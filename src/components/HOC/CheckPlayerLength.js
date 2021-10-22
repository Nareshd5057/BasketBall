import React, { Component } from 'react'

export default class CheckPlayerLength extends Component {
	render() {
		return this.props.players.length >= 5 ? (
			<>{this.props.children}</>
		) : (
			<h3 className="text-center">Please create 5 players</h3>
		)
	}
}
