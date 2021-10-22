import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PlayerCreation from './components/PlayerCreation/PlayerCreation'
import PlayerSelection from './components/PlayerSelection/PlayerSelection'

export default function Routers() {
	return (
		<Switch>
			<Route exact path="/" render={() => <Redirect to="/PlayerCreation" />} />
			<Route exact path="/PlayerCreation" component={PlayerCreation} />
			<Route path="/PlayerSelection" component={PlayerSelection} />
		</Switch>
	)
}
