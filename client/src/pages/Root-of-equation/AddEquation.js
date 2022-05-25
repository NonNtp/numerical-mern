import React, { useRef } from 'react'

import './Root.css'

const AddEquation = () => {
	const equationInputRef = useRef()
	const xlInputRef = useRef()
	const xrInputRef = useRef()

	const submitHandler = async (event) => {
		event.preventDefault()

		const enteredEquation = equationInputRef.current.value
		const enteredXl = xlInputRef.current.value
		const enteredXr = xrInputRef.current.value

		try {
			const response = await fetch('http://localhost:5000/api/post-bisection', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					equation: enteredEquation,
					xl: enteredXl,
					xr: enteredXr,
				}),
			})
			const responseData = await response.json()
			console.log(responseData)

			event.target.reset()
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='app'>
			<h1 className='bisection'>Add Equation</h1>

			<form onSubmit={submitHandler}>
				<div className='control-group'>
					<div className='form-control'>
						<label htmlFor='equation'>Equation</label>
						<input type='text' name='equation' ref={equationInputRef} />
					</div>
					<div className='form-control'>
						<label htmlFor='xr'>Xl</label>
						<input type='text' name='equation' ref={xlInputRef} />
					</div>
					<div className='form-control'>
						<label htmlFor='xr'>Xr</label>
						<input type='text' name='equation' ref={xrInputRef} />
					</div>
				</div>
				<div className='form-actions'>
					<button type='submit'>Add</button>
				</div>
			</form>
		</div>
	)
}

export default AddEquation
