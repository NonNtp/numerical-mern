import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import GaussSeidelMethod from '../../modules/Linear/GaussSeidel'
import './matrix.css'

const GaussSeidel = () => {
	const [value, setValue] = useState([])
	const [result, setResult] = useState('')
	const [showGraph, setShowGraph] = useState(false)

	const config = {
		headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
	}

	const fetchData = async () => {
		const response = await axios.get(
			'http://localhost:5000/api/get-elimination',
			config
		)
		setValue(response.data)
	}

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line
	}, [])

	const a11InputRef = useRef()
	const a12InputRef = useRef()
	const a13InputRef = useRef()
	const a14InputRef = useRef()
	const a21InputRef = useRef()
	const a22InputRef = useRef()
	const a23InputRef = useRef()
	const a24InputRef = useRef()
	const a31InputRef = useRef()
	const a32InputRef = useRef()
	const a33InputRef = useRef()
	const a34InputRef = useRef()
	const a41InputRef = useRef()
	const a42InputRef = useRef()
	const a43InputRef = useRef()
	const a44InputRef = useRef()

	const b1InputRef = useRef()
	const b2InputRef = useRef()
	const b3InputRef = useRef()
	const b4InputRef = useRef()

	const submitHandler = (event) => {
		event.preventDefault()
		const enteredA11 = a11InputRef.current.value
		const enteredA12 = a12InputRef.current.value
		const enteredA21 = a21InputRef.current.value
		const enteredA22 = a22InputRef.current.value
		const enteredA23 = a23InputRef.current.value
		const enteredA32 = a32InputRef.current.value
		const enteredA33 = a33InputRef.current.value
		const enteredA34 = a34InputRef.current.value
		const enteredA43 = a43InputRef.current.value
		const enteredA44 = a44InputRef.current.value

		const enteredB1 = b1InputRef.current.value
		const enteredB2 = b2InputRef.current.value
		const enteredB3 = b3InputRef.current.value
		const enteredB4 = b4InputRef.current.value

		console.log(
			setResult(
				GaussSeidelMethod(
					enteredB1,
					enteredA12,
					enteredA11,
					enteredB2,
					enteredA21,
					enteredA22,
					enteredA23,
					enteredB3,
					enteredA32,
					enteredA33,
					enteredA34,
					enteredB4,
					enteredA43,
					enteredA44
				)
			)
		)
		setShowGraph(true)
		event.target.reset()
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='flex-app'>
					<div className='app'>
						<h1>Gauss Seidel</h1>
						<div className='A-value'>
							<div className='control-group2'>
								<div className='form-control2'>
									<select ref={a11InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a11}
													label={equ.a11}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a12InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a12}
													label={equ.a12}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a13InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a13}
													label={equ.a13}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a14InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a14}
													label={equ.a14}
												></option>
											)
										})}
									</select>
								</div>
								<br />
								<div className='form-control2'>
									<select ref={a21InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a21}
													label={equ.a21}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a22InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a22}
													label={equ.a22}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a23InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a23}
													label={equ.a23}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a24InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a24}
													label={equ.a24}
												></option>
											)
										})}
									</select>
								</div>
								<br />
								<div className='form-control2'>
									<select ref={a31InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a31}
													label={equ.a31}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a32InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a32}
													label={equ.a32}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a33InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a33}
													label={equ.a33}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a34InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a34}
													label={equ.a34}
												></option>
											)
										})}
									</select>
								</div>
								<br />
								<div className='form-control2'>
									<select ref={a41InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a41}
													label={equ.a41}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a42InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a42}
													label={equ.a42}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a43InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a43}
													label={equ.a43}
												></option>
											)
										})}
									</select>
								</div>
								<div className='form-control2'>
									<select ref={a44InputRef}>
										{value.map((equ, index) => {
											return (
												<option
													key={index}
													value={equ.a44}
													label={equ.a44}
												></option>
											)
										})}
									</select>
								</div>
							</div>
						</div>
					</div>
					<div className='app'>
						<div className='X-value'>
							<input type='text' className='itemX' placeholder='x1' />
							<input type='text' className='itemX' placeholder='x2' />
							<input type='text' className='itemX' placeholder='x3' />
							<input type='text' className='itemX' placeholder='x4' />
						</div>
					</div>
					<div className='app'>
						<div className='B-value'>
							<div className='form-control2'>
								<select ref={b1InputRef}>
									{value.map((equ, index) => {
										return (
											<option
												key={index}
												value={equ.b1}
												label={equ.b1}
											></option>
										)
									})}
								</select>
							</div>
							<div className='form-control2'>
								<select ref={b2InputRef}>
									{value.map((equ, index) => {
										return (
											<option
												key={index}
												value={equ.b2}
												label={equ.b2}
											></option>
										)
									})}
								</select>
							</div>
							<div className='form-control2'>
								<select ref={b3InputRef}>
									{value.map((equ, index) => {
										return (
											<option
												key={index}
												value={equ.b3}
												label={equ.b3}
											></option>
										)
									})}
								</select>
							</div>
							<div className='form-control2'>
								<select ref={b4InputRef}>
									{value.map((equ, index) => {
										return (
											<option
												key={index}
												value={equ.b4}
												label={equ.b4}
											></option>
										)
									})}
								</select>
							</div>
						</div>
					</div>
				</div>
				<button type='submit' className='button'>
					Submit
				</button>
			</form>

			{showGraph && <div className='app-table'> {result[0]}</div>}
		</div>
	)
}

export default GaussSeidel
