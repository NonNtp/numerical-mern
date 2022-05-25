import React, { useState, useRef, useEffect } from 'react'

import { BisectionMethod } from '../../modules/Root/Bisection'

import './Root.css'

const Bisection = () => {
	const [isLoaded, setIsLoaded] = useState([])
	const [showGraph, setShowGraph] = useState(false)
	const [result, setResult] = useState('')

	const equationInputRef = useRef()
	const xlInputRef = useRef()
	const xrInputRef = useRef()

	const sendRequest = async () => {
		const response = await fetch('http://localhost:5000/api/get-bisection', {
			headers: {
				authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
			},
		})
		const responseData = await response.json()
		setIsLoaded(responseData)
	}
	useEffect(() => {
		sendRequest()
	}, [])

	const submitHandler = (event) => {
		event.preventDefault()

		const enteredEquation = equationInputRef.current.value
		const enteredXl = xlInputRef.current.value
		const enteredXr = xrInputRef.current.value

		let xlNumber = parseFloat(enteredXl)
		let xrNumber = parseFloat(enteredXr)

		setResult(BisectionMethod(enteredEquation, xlNumber, xrNumber))
		setShowGraph(true)
	}

	return (
		<div>
			<div className='flex-app'>
				<div className='app'>
					<h1 className='bisection'>Bisection</h1>
					<form onSubmit={submitHandler}>
						<div className='control-group'>
							<div className='form-control'>
								<label htmlFor='xr'>Equation Bisection</label>
								<select ref={equationInputRef}>
									{isLoaded.map((equ, index) => {
										return (
											<option
												key={index}
												value={equ.equation}
												label={equ.equation}
											></option>
										)
									})}
								</select>
							</div>
							<div className='form-control'>
								<label htmlFor='xr'>Xl</label>
								<select ref={xlInputRef}>
									{isLoaded.map((equXl, index) => {
										return (
											<option
												key={index}
												value={equXl.xl}
												label={equXl.xl}
											></option>
										)
									})}
								</select>
							</div>
							<div className='form-control'>
								<label htmlFor='xr'>Xr</label>
								<select ref={xrInputRef}>
									{isLoaded.map((equXr, index) => {
										return (
											<option
												key={index}
												value={equXr.xr}
												label={equXr.xr}
											></option>
										)
									})}
								</select>
							</div>
						</div>
						<div className='form-actions'>
							<button type='submit'>Submit</button>
						</div>
					</form>
					<p>result : {result[0]}</p>
				</div>
				{showGraph && <div className='app'>{result[1]}</div>}
			</div>
			{showGraph && <div className='app-table'>{result[2]}</div>}
		</div>
	)
}

export default Bisection
