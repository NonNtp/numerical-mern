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
let xm
let Error
let arrayOject = []
let resultTable = []

const funcOnePoint = (eq, xm) => {
	const equation = evaluateTex(eq, { x: xm })
	return equation.evaluated
}
export const OnePointMethod = (x, oldX, i) => {
	xm = funcOnePoint(x, oldX)
	Error = Math.abs((xm - oldX) / xm)

	let object = { x: i, y: Error }
	object.x = i
	object.y = Error
	arrayOject.push(object)

	let tableObject = { i: i, xm: xm, errorTable: Error }
	tableObject.i = i
	tableObject.xm = xm
	tableObject.errorTable = Error.toFixed(10)
	resultTable.push(tableObject)

	if (Error < EPSILON) {
		console.log('result : ', xm)
		console.log(arrayOject)
		console.log(resultTable)
	} else {
		i++
		console.log('iteration : ', i)
		console.log('xm : ', xm)
		console.log('Error : ', Error.toFixed(10))
		console.log('---------------------------------')

		OnePointMethod(x, xm, i)
	}

	return [
		'The value of root is : ' + xm.toFixed(10),
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
					<th>Xm</th>
					<th>Error</th>
				</tr>
				{resultTable.map((data, index) => {
					return (
						<tr key={index}>
							<td>{data.i}</td>
							<td>{data.xm}</td>
							<td>{data.errorTable}</td>
						</tr>
					)
				})}
			</tbody>
		</table>,
	]
}
