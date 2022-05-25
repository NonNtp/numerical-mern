import React, { useState, useRef, useEffect } from 'react'

import { OnePointMethod } from '../../modules/Root/OnePoint'

import './Root.css'

const OnePoint = () => {
	const [isLoaded, setIsLoaded] = useState([])
	const [showGraph, setShowGraph] = useState(false)
	const [result, setResult] = useState('')

	let iteration = 0

	const equationInputRef = useRef()
	const xmInputRef = useRef()

	const sendRequest = async () => {
		const response = await fetch('http://localhost:5000/api/get-onePoint', {
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
		const enteredXm = xmInputRef.current.value

		let xmNumber = parseFloat(enteredXm)

		setResult(OnePointMethod(enteredEquation, xmNumber, iteration))
		setShowGraph(true)
	}

	return (
		<div>
			<div className='flex-app'>
				<div className='app'>
					<h1 className='bisection'>One-Point </h1>
					<form onSubmit={submitHandler}>
						<div className='control-group'>
							<div className='form-control'>
								<label htmlFor='xr'>Equation One-Point</label>
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
								<label htmlFor='xr'>XM</label>
								<select ref={xmInputRef}>
									{isLoaded.map((equXl, index) => {
										return (
											<option
												key={index}
												value={equXl.xm}
												label={equXl.xm}
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

export default OnePoint
