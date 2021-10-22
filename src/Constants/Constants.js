import React, { Component } from 'react'
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}
const positions = [
	'Point Guard (PG)',
	'Shooting Guard (SG)',
	'Small Forward (SF)',
	'Power Forward (PF)',
	'Center (C) ',
]
const Constants = {
	MenuProps,
	positions,
}
export default Constants
