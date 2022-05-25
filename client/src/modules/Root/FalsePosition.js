import { evaluateTex } from 'tex-math-parser'
import {
	XYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	LineSeries,
} from 'react-vis'
import './Table.css'

const EPSILON = 0.000001

export const FalsePositionMethod = (x, a, b) => {
	let iteration = 0
	let arrayOject = []
	let resultTable = []

	const funcFalsePosition = (eq, c) => {
		const equation = evaluateTex(eq, { x: c })
		return equation.evaluated
	}

	if (funcFalsePosition(x, a) * funcFalsePosition(x, b) >= 0) {
		console.log('A * B must less than 0 ')
		return
	}

	let c = a
	let error
	while (b - a >= EPSILON) {
		c =
			(a * funcFalsePosition(x, b) - b * funcFalsePosition(x, a)) /
			(funcFalsePosition(x, b) - funcFalsePosition(x, a))

		if (funcFalsePosition(x, c) === 0.0) {
			break
		} else if (funcFalsePosition(x, c) * funcFalsePosition(x, a) < 0) {
			b = c
			error = Math.abs((b - a) / b).toFixed(10)
		} else {
			a = c
			error = Math.abs((a - b) / a).toFixed(10)
		}

		let object = { x: iteration, y: error }
		object.x = iteration
		object.y = error
		arrayOject.push(object)

		let tableObject = { i: iteration, xl: b, xr: a, errorTable: error }
		tableObject.i = iteration
		tableObject.xl = b
		tableObject.xr = a
		tableObject.errorTable = error
		resultTable.push(tableObject)

		iteration++
	}

	console.log(arrayOject)

	return [
		'The value of root is : ' + c.toFixed(10),
		<XYPlot width={400} height={400}>
			<HorizontalGridLines />
			<LineSeries data={arrayOject} />
			<XAxis />
			<YAxis />
		</XYPlot>,
		<table>
			<tbody>
				<tr>
					<th>Iteration</th>
					<th>Xl</th>
					<th>Xr</th>
					<th>Error</th>
				</tr>
				{resultTable.map((data, index) => {
					return (
						<tr key={index}>
							<td>{data.i}</td>
							<td>{data.xl}</td>
							<td>{data.xr}</td>
							<td>{data.errorTable}</td>
						</tr>
					)
				})}
			</tbody>
		</table>,
	]
}
