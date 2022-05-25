import './Table.css'
const GaussSeidelMethod = (
	b1,
	a12,
	a11,
	b2,
	a21,
	a22,
	a23,
	b3,
	a32,
	a33,
	a34,
	b4,
	a43,
	a44
) => {
	var i = 1,
		x1 = 0,
		x2 = 0,
		x3 = 0,
		x4 = 0,
		EPSILON_Seidel = 0.000001,
		Error1 = 1,
		Error2 = 1,
		Error3 = 1,
		Error4 = 1

	var newX1, newX2, newX3, newX4

	let resultTable = []

	while ((Error1 && Error2 && Error3 && Error4) > EPSILON_Seidel) {
		newX1 = (b1 - a12 * x2) / a11
		newX2 = (b2 - a21 * newX1 - a23 * x3) / a22
		newX3 = (b3 - a32 * newX2 - a34 * x4) / a33
		newX4 = (b4 - a43 * newX3) / a44

		Error1 = Math.abs((newX1 - x1) / newX1)
		Error2 = Math.abs((newX2 - x2) / newX2)
		Error3 = Math.abs((newX3 - x3) / newX3)
		Error4 = Math.abs((newX4 - x4) / newX4)

		x1 = newX1
		x2 = newX2
		x3 = newX3
		x4 = newX4

		let tableObject = {
			i: i,
			newX1: newX1,
			newX2: newX2,
			newX3: newX3,
			newX4: newX4,
		}
		tableObject.i = i
		tableObject.newX1 = newX1
		tableObject.newX2 = newX2
		tableObject.newX3 = newX3
		tableObject.newX4 = newX4
		resultTable.push(tableObject)

		i++
	}
	return [
		<table>
			<tbody>
				<tr>
					<th>Iteration</th>
					<th>X1</th>
					<th>X2</th>
					<th>X3</th>
					<th>X4</th>
				</tr>
				{resultTable.map((data, index) => {
					return (
						<tr key={index}>
							<td>{data.i}</td>
							<td>{data.newX1.toFixed(10)}</td>
							<td>{data.newX2.toFixed(10)}</td>
							<td>{data.newX3.toFixed(10)}</td>
							<td>{data.newX4.toFixed(10)}</td>
						</tr>
					)
				})}
			</tbody>
		</table>,
	]
}

export default GaussSeidelMethod
