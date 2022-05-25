import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './components/shared/Sidebar'
import AddEquation from './pages/Root-of-equation/AddEquation'
import Bisection from './pages/Root-of-equation/Bisection'
import FalsePosition from './pages/Root-of-equation/FalsePosition'
import OnePoint from './pages/Root-of-equation/OnePoint'
import Newton from './pages/Root-of-equation/Newton'
import Secant from './pages/Root-of-equation/Secant'
import CraMerRule from './pages/Linear-System/CraMerRule'
import GaussElimination from './pages/Linear-System/GaussElimination'
import Jacobi from './pages/Linear-System/Jacobi'
import GaussSeidel from './pages/Linear-System/GaussSeidel'

const App = () => {
	return (
		<Router>
			<Sidebar />
			<Switch>
				<Route path='/root/equation' exact component={AddEquation} />
				<Route path='/root/bisection' exact component={Bisection} />
				<Route path='/root/false' exact component={FalsePosition} />
				<Route path='/root/one' exact component={OnePoint} />
				<Route path='/root/new' exact component={Newton} />
				<Route path='/root/secant' exact component={Secant} />
				<Route path='/linear/craMer' exact component={CraMerRule} />
				<Route path='/linear/elimination' exact component={GaussElimination} />

				<Route path='/linear/jacobi' exact component={Jacobi} />
				<Route path='/linear/seidel' exact component={GaussSeidel} />
			</Switch>
		</Router>
	)
}

export default App
