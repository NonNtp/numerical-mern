import { evaluateTex } from 'tex-math-parser'
import {
	XYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	LineSeries,
} from 'react-vis'
import './Table.css'

const EPSILON = 0.00000001

let fx0
let fx1
let err
let xNew
let arrayOject = []
let resultTable = []

const funcSecant = (eq, xm) => {
	const equation = evaluateTex(eq, { x: xm })
	return equation.evaluated
}

export const secantMethod = (equ, x0, x1, xOld, i) => {
	console.log('round ', i)
	i++

	console.log('x0 receive :: ', x0)
	console.log('x1 receive :: ', x1)
	console.log('err receive :: ', xOld)

	fx0 = funcSecant(equ, x0)
	fx1 = funcSecant(equ, x1)

	xNew = x0 - (fx0 * (x0 - x1)) / (fx0 - fx1)
	err = Math.abs((xNew - xOld) / xNew)

	console.log('fx0 : ', fx0.toFixed(10))
	console.log('fx1 : ', fx1.toFixed(10))
	console.log('x : ', xNew)
	console.log('error : ', err.toFixed(10))

	let object = { x: i, y: err }
	object.x = i
	object.y = err
	arrayOject.push(object)

	let tableObject = { i: i, x0: x0, x1: x1, xNew: xNew, errorTable: err }
	tableObject.i = i
	tableObject.x0 = x0
	tableObject.x1 = x1
	tableObject.xNew = xNew
	tableObject.errorTable = err.toFixed(10)
	resultTable.push(tableObject)

	if (err < EPSILON) {
		console.log('result is ', xNew)
	} else {
		x1 = xNew + 1
		secantMethod(equ, xNew, x1, xNew, i)
	}

	return [
		'The value of root is : ' + xNew.toFixed(10),
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
					<th>X0</th>
					<th>X1</th>
					<th>Error</th>
				</tr>
				{resultTable.map((data, index) => {
					return (
						<tr key={index}>
							<td>{data.i}</td>
							<td>{data.x0}</td>
							<td>{data.x1}</td>
							<td>{data.errorTable}</td>
						</tr>
					)
				})}
			</tbody>
		</table>,
	]
}
