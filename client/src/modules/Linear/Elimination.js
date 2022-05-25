import { subtract, multiply } from 'mathjs'

const EliminationMethod = (A, B) => {
	const n = B.length
	let X = []
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			let a = A[i][i],
				b = A[j][i]
			A[j] = subtract(multiply([...A[i]], b), multiply([...A[j]], a))
			B[j] = subtract(B[i] * b, B[j] * a)
		}
	}
	for (let i = n - 1; i >= 0; i--) {
		let ax = B[i]
		for (let j = i + 1; j < n; j++) {
			ax -= A[i][j] * X[j]
		}
		X[i] = ax / A[i][i]
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

export default EliminationMethod
