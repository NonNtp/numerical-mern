import { det, round } from 'mathjs'
import './Table.css'

export const Cramer = (A, B) => {
	let X = []
	for (let i = 0; i < B.length; i++) {
		let Ai = []
		A.forEach((data, j) => {
			Ai.push([...data])
			Ai[j][i] = B[j]
		})
		X[i] = round(det(Ai)) / det(A)
	}

	return (
		<table>
			<tbody>
				<tr>
					<th>X1</th>
					<th>X2</th>
					<th>X3</th>
				</tr>
				<tr>
					<td>{X[0]}</td>
					<td>{X[1]}</td>
					<td>{X[2]}</td>
				</tr>
			</tbody>
		</table>
	)
}
