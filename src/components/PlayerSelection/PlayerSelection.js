import React, { Component } from 'react'
import {
	Button,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	Paper,
} from '@mui/material'
import { connect } from 'react-redux'
import CheckPlayerLength from '../HOC/CheckPlayerLength'
import constants from './../../Constants/Constants'

class PlayerSelection extends Component {
	/* DECLARATION PART */
	constructor(props) {
		super(props)
		this.state = {
			players: this.props.players,
			selectedPlayers: [],
			keys: [],
			positionDupKeys: [],
		}
	}

	/* FUNCTION PART */

	//HANDLE INPUT CHANGE DYNAMICALLY - ALL INPUT CHANGE EVENT
	handleChange = (event, index, key) => {
		var tempArr = JSON.parse(JSON.stringify(this.state.selectedPlayers))
		//Find existing object in the players array
		let findIndex = tempArr.findIndex((obj) => obj.index == index)

		let newArr = tempArr[findIndex]
		if (newArr) {
			newArr.index = index
			newArr['Name'] = event.target.value
		}
		//add and update the selected players array
		if (findIndex === -1) {
			this.setState(
				{
					selectedPlayers: [
						...this.state.selectedPlayers,
						{
							index: index,
							Name: event.target.value,
						},
					],
				},
				() => this.checkNameDuplicates(this.state.selectedPlayers)
			)
		} else {
			this.setState(
				{
					selectedPlayers: [
						...tempArr.slice(0, findIndex),
						newArr,
						...tempArr.slice(findIndex + 1),
					],
				},
				() => this.checkNameDuplicates(this.state.selectedPlayers)
			)
		}
	}

	//HANDLE THE PLAYER'S POSITION CHANGE EVENT
	handlePositionChange = (event, index, key) => {
		var tempArr = JSON.parse(JSON.stringify(this.state.selectedPlayers))
		//Find existing object in the players array
		let findIndex = tempArr.findIndex((obj) => obj.index == index)

		let newArr = tempArr[findIndex]
		if (newArr) {
			newArr['Position'] = event.target.value
		}
		// Just update the position of the player
		this.setState(
			{
				selectedPlayers: [
					...tempArr.slice(0, findIndex),
					newArr,
					...tempArr.slice(findIndex + 1),
				],
			},
			() => this.checkPositionDuplicates(this.state.selectedPlayers)
		)
	}

	// SINCE WE DONT WANT TO ALLOW THE DUPLICATES PLAYERS - CHECKING FOR PLAYER NAME DUPLICATES(ADD DUPLICATES KEY TO SHOW THE ERROR)
	checkNameDuplicates = (stateArr) => {
		let keys = []
		let selectedPlaArr = JSON.parse(JSON.stringify(stateArr))
		selectedPlaArr.map((item, index) => {
			selectedPlaArr.filter((item1, index1) => {
				if (index !== index1 && item.Name === item1.Name) {
					keys.push(item.index)
				}
			})
		})
		this.setState({
			keys: [...new Set(keys)],
		})
	}

	// SINCE WE DONT WANT TO ALLOW THE DUPLICATES POSITIONS - CHECKING FOR POSITION DUPLICATES(ADD DUPLICATES KEY TO SHOW THE ERROR)
	checkPositionDuplicates = (stateArr) => {
		let keys = []
		let selectedPlaArr = JSON.parse(JSON.stringify(stateArr))
		selectedPlaArr.map((item, index) => {
			selectedPlaArr.filter((item1, index1) => {
				if (index !== index1 && item.Position === item1.Position) {
					keys.push(item.index)
				}
			})
		})
		this.setState({
			positionDupKeys: [...new Set(keys)],
		})
	}

	//HANDLE SAVE FUNCTIONALITY OF PLAYER AND POSITION
	handleSave = () => {
		console.log(this.state.selectedPlayers)
	}

	render() {
		return (
			<Grid sm="6" className="m0Auto">
				<Paper sm={12} sx={{ p: 5 }} elevation={3}>
					{/* HOC COMPONENT TO HIDE THE GRID WHEN PLAYER COUNT IS LESS THAN 5 */}
					<CheckPlayerLength players={this.props.playerState.players}>
						<Grid
							container
							rowSpacing={1}
							columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						>
							{this.props.playerState.players.map((player, index) => {
								return (
									<>
										<Grid item xs={6} className="simpleMultiSelect">
											<FormControl
												sx={{ m: 1, width: '100%' }}
												error={this.state.keys.includes(index)}
											>
												<InputLabel id="demo-simple-select-standard-label">
													Player Name {player.error ? 'error true' : ''}
												</InputLabel>
												<Select
													labelId="demo-simple-select-standard-label"
													id="demo-simple-select-standard"
													value={
														this.state.selectedPlayers[index] &&
														this.state.selectedPlayers[index].Name
													}
													onChange={(e) => this.handleChange(e, index, 'Name')}
													input={<OutlinedInput label="Tag" />}
													renderValue={(selected) => selected}
													MenuProps={constants.MenuProps}
													className="error"
												>
													{this.props.playerState.players.length &&
														this.props.playerState.players.map(
															(player, index) => (
																<MenuItem
																	key={player.FirstName + '_' + index}
																	value={player.FirstName}
																>
																	<ListItemText primary={player.FirstName} />
																</MenuItem>
															)
														)}
												</Select>
												<FormHelperText className="ml0" error={true}>
													{!this.state.keys.includes(index)
														? ''
														: 'Player Should be unique'}
												</FormHelperText>
											</FormControl>
										</Grid>
										<Grid item xs={6} className="simpleMultiSelect">
											<FormControl
												sx={{ m: 1, width: '100%' }}
												error={this.state.positionDupKeys.includes(index)}
											>
												<InputLabel id="demo-simple-select-standard-label">
													Position
												</InputLabel>
												<Select
													labelId="demo-simple-select-standard-label"
													id="demo-simple-select-standard"
													onChange={(e) =>
														this.handlePositionChange(e, index, 'Position')
													}
													input={<OutlinedInput label="Tag" />}
													renderValue={(selected) => selected}
													MenuProps={constants.MenuProps}
													disabled={
														this.state.selectedPlayers[index] === undefined ||
														this.state.keys.includes(index)
													}
												>
													{player.Position &&
														player.Position.map((player, index) => (
															<MenuItem
																key={player + '_' + index}
																value={player}
															>
																<ListItemText primary={player} />
															</MenuItem>
														))}
												</Select>
												<FormHelperText className="ml0" error={true}>
													{!this.state.positionDupKeys.includes(index)
														? ''
														: 'Position Should be unique'}
												</FormHelperText>
											</FormControl>
										</Grid>
									</>
								)
							})}
						</Grid>
						<Grid item xs={12} className="text-center btnSubmit">
							<Button
								variant="contained"
								sm={{ marginTop: '10px' }}
								bgcolor="primary"
								onClick={() => this.handleSave()}
								disabled={this.state.selectedPlayers.length < 5}
							>
								Save
							</Button>
						</Grid>
					</CheckPlayerLength>
				</Paper>
			</Grid>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		playerState: state,
	}
}
export default connect(mapStateToProps)(PlayerSelection)
