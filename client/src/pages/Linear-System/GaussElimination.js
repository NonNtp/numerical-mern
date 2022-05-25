import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './matrix.css'

import EliminationMethod from '../../modules/Linear/Elimination'

const GaussElimination = () => {
	const [result, setResult] = useState('')
	const [aValue, setAValue] = useState([])
	const [bValue, setBValue] = useState([])

	const config = {
		headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
	}

	const fetchData = async () => {
		const response = await axios.get(
			'http://localhost:5000/api/get-cramer',
			config
		)
		setAValue(response.data[0].A)
		setBValue(response.data[0].B)
	}

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line
	}, [])

	const clickButton = () => {
		setResult(EliminationMethod(aValue, bValue))
		console.log(aValue)
		console.log(bValue)
	}
	return (
		<div className='flex-app'>
			<div className='app'>
				<h1>GaussElimination</h1>
				<div className='control-group'>
					<div className='form-control'>
						{aValue.map((a, index) => {
							return (
								<div key={index}>
									<p className='p'>{a}</p>
								</div>
							)
						})}
					</div>
					<div className='form-control'>
						{bValue.map((b, index) => {
							return (
								<div key={index}>
									<p className='p'>{b}</p>
								</div>
							)
						})}
					</div>
				</div>
				<button onClick={clickButton}>Submit</button>
			</div>
			<div className='app'>{result}</div>
		</div>
	)
}

export default GaussElimination
