import { evaluateTex } from 'tex-math-parser'
import {
	XYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	LineSeries,
} from 'react-vis'
import { derivative } from 'mathjs'
import './Table.css'

const EPSILON = 0.00000001

let x
let Error
let arrayOject = []
let resultTable = []

const funcNewton = (eq, xm) => {
	const equation = evaluateTex(eq, { x: xm })
	return equation.evaluated
}

export const NewtonMethod = (equ, xi, i) => {
	const fxi = funcNewton(equ, xi)
	const f2xi = derivative(equ, 'x').evaluate({ x: xi })

	x = xi - fxi / f2xi
	Error = Math.abs((x - xi) / x)

	console.log('round ', i)
	console.log('x : ', x)
	console.log('error : ', Error.toFixed(10))

	let object = { x: i, y: Error }
	object.x = i
	object.y = Error.toFixed(10)
	arrayOject.push(object)

	let tableObject = { i: i, x: x, errorTable: Error }
	tableObject.i = i
	tableObject.x = x
	tableObject.errorTable = Error.toFixed(10)
	resultTable.push(tableObject)

	if (Error < EPSILON) {
		console.log('result is ', x)
		console.log(arrayOject)
		console.log(resultTable)
	} else {
		i++
		NewtonMethod(equ, x, i)
	}
	return [
		'The value of root is : ' + x.toFixed(10),
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
					<th>X</th>
					<th>Error</th>
				</tr>
				{resultTable.map((data, index) => {
					return (
						<tr key={index}>
							<td>{data.i}</td>
							<td>{data.x}</td>
							<td>{data.errorTable}</td>
						</tr>
					)
				})}
			</tbody>
		</table>,
	]
}
