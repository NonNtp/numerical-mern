import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './matrix.css'

import { Cramer } from '../../modules/Linear/Cramer'

const CraMerRule = () => {
	const [value, setValue] = useState([])
	const [aValue, setAValue] = useState([])
	const [bValue, setBValue] = useState([])
	const [result, setResult] = useState([])

	const config = {
		headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
	}

	const fetchData = async () => {
		const response = await axios.get(
			'http://localhost:5000/api/get-cramer',
			config
		)
		setValue(response.data)
		setAValue(response.data[0].A)
		setBValue(response.data[0].B)
	}

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line
	}, [])

	const clickButton = () => {
		setResult(Cramer(aValue, bValue))
		console.log(value)
		console.log(aValue)
		console.log(bValue)
	}

	return (
		<div className='flex-app'>
			<div className='app'>
				<h1>CraMerRule</h1>
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

export default CraMerRule
