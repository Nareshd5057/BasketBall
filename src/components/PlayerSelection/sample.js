import {
	Button,
	Checkbox,
	FormControl,
	Grid,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

export default function PlayerSelection() {
	let [players, setPlayers] = React.useState([])
	const [selectedPlayers, setSelectedPlayers] = React.useState([])
	const state = useSelector((state) => state)
	const playerArr = state.players
	const dispatch = useDispatch()
	console.log(playerArr)
	let [checkNameDublicate, setCheckNameDublicate] = React.useState([
		false,
		false,
		false,
		false,
		false,
	])
	let handleChange = (event, index, key) => {
		// console.log(selectedPlayers)
		// setPlayers(event.target.value)
		// var tempArr = JSON.parse(JSON.stringify(selectedPlayers))
		// let findIndex = tempArr.findIndex((obj) => obj.index == index)
		// console.log(findIndex)

		// let newArr = tempArr[findIndex]
		// if (newArr) {
		// 	newArr.index = index
		// 	newArr['Name'] = event.target.value
		// }

		// if (findIndex === -1) {
		// 	console.log(selectedPlayers)
		// 	// handle error
		// 	setSelectedPlayers(
		// 		selectedPlayers.concat({
		// 			index: index,
		// 			Name: event.target.value,
		// 		})
		// 	)
		// } else {
		// 	console.log(newArr)
		// 	setSelectedPlayers([
		// 		...tempArr.slice(0, index),
		// 		newArr,
		// 		...tempArr.slice(index + 1),
		// 	])
		// }

		// setSelectedPlayers('Test')
		setPlayers(['test'])
		setPlayers(
			(state1) => [state1] // "React is awesome!"
		)

		// if (findIndex !== -1) {
		// 	tempArr[findIndex].index = index
		// 	tempArr[findIndex].Name = event.target.value
		// } else {
		// 	tempArr.push({
		// 		index: index,
		// 		Name: event.target.value,
		// 	})
		// 	// tempArr = [
		// 	// 	...selectedPlayers,
		// 	// 	{
		// 	// 		index: index,
		// 	// 		Name: event.target.value,
		// 	// 	},
		// 	// ]
		// }

		// console.log(tempArr)

		// if (
		// 	selectedPlayers[index] &&
		// 	selectedPlayers[index].hasOwnProperty('index')
		// ) {
		// 	selectedPlayers[index].index = index
		// 	selectedPlayers[index].Name = event.target.value
		// } else {
		// 	tempArr = [
		// 		...selectedPlayers,
		// 		{
		// 			index: index,
		// 			Name: event.target.value,
		// 		},
		// 	]
		// }

		// }
		// else {
		// 	tempArr = [
		// 		...selectedPlayers,
		// 		{
		// 			index: index,
		// 			Name: event.target.value,
		// 		},
		// 	]
		// }

		//let tempCheckDub = checkNameDublicate
		// playerArr.map((item, i) => {
		// 	tempCheckDub[i] = selectedPlayers.some((obj, ind) => {
		// 		return ind === i
		// 	})
		// })

		// let tempObj = [
		// 	...selectedPlayers.filter((obj, ind) => {
		// 		return obj.Name === event.target.value
		// 	}),
		// 	{
		// 		index: index,
		// 		Name: event.target.value,
		// 	},
		// ]
		// let tempObj1 = [
		// 	...selectedPlayers.filter((obj, ind) => {
		// 		return obj.Name !== event.target.value
		// 	}),
		// ]
		// if (selectedPlayers.length >= 1) {
		// 	tempObj.map((item, i) => {
		// 		tempCheckDub[item.index] = true
		// 	})

		// 	tempObj1.map((item, i) => {
		// 		tempCheckDub[item.index] = false
		// 	})
		// }

		// tempCheckDub[index] =
		// 	selectedPlayers.length >= 1
		// 		? selectedPlayers.findIndex((obj) => {
		// 				console.log(obj)
		// 				return obj.Name == event.target.value
		// 		  })
		// 		: -1
		// playerArr.map((item, i) => {
		// 	console.log(item)
		// 	tempCheckDub[item.FirstName] =
		// 		selectedPlayers.length > 1
		// 			? selectedPlayers.findIndex((obj) => {
		// 					console.log(obj)
		// 					return obj.Name == item.FirstName
		// 			  })
		// 			: -1
		// })
		// tempArr['player' + '_' + index] = {}
		// tempArr['player' + '_' + index][key] = event.target.value

		//setSelectedPlayers((state) => [...state, tempArr])
		// selectedPlayers = [...tempArr]
		// let keyArr = []
		// let tempArr1 = tempArr.map((item, index1) => {
		// 	return tempArr.filter((item1, index2) => {
		// 		if (index1 !== index2 && item.Name === item1.Name) {
		// 			console.log(item)
		// 			keyArr.push(item.index)
		// 			return item
		// 		} else {
		// 			// console.log(item)
		// 		}
		// 	})
		// })
		// console.log(keyArr)
		// if (keyArr.length !== 0) {
		// 	if (selectedPlayers.length >= 1) {
		// 		keyArr.map((item, i) => {
		// 			checkNameDublicate[item] = true
		// 		})
		// 	}
		// } else {
		// 	setCheckNameDublicate([false, false, false, false, false])
		// }

		// console.log(checkNameDublicate)
		// console.log(JSON.stringify(tempArr))
		// const {
		// 	target: { value },
		// } = event
		// setPlayers(
		// 	// On autofill we get a the stringified value.
		// 	typeof value === 'string' ? value.split(',') : value
		// )
		//checkDuplicates(event.target.value)
	}

	const checkDuplicates = (value) => {
		console.log(selectedPlayers)
		console.log(value)
		let selectedPlaArr = JSON.parse(JSON.stringify(selectedPlayers))
		let tempArr = selectedPlaArr.filter((item, index) => {
			if (item.Name === value) {
				playerArr[item.index].error = true
			} else {
				playerArr[index].error = false
			}
			return item.Name === value
		})
		// console.log(tempArr)
		// playerArr.filter((item, index) => {
		// 	tempArr.filter((item1, index1) => {
		// 		if (item1.index === index) {
		// 			playerArr[item1.index].error = true
		// 		} else {
		// 			playerArr[index].error = true
		// 		}
		// 	})
		// })
		// tempArr.filter((item, index) => {
		// 	playerArr[item.index].error = true
		// })
		console.log(playerArr)
		return tempArr.length > 1 ? true : false
	}
	return (
		<Grid sm="6" className="m0Auto">
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				{playerArr.map((player, index) => {
					return (
						<>
							{console.log(player.error)}
							<Grid item xs={6} className="simpleMultiSelect">
								<FormControl sx={{ m: 1, width: '100%' }} error={player.error}>
									<InputLabel id="demo-simple-select-standard-label">
										Player Name {player.error ? 'error true' : ''}
									</InputLabel>
									<Select
										labelId="demo-simple-select-standard-label"
										id="demo-simple-select-standard"
										value={
											selectedPlayers['player_' + index] &&
											selectedPlayers['player_' + index]['Name']
										}
										onChange={(e) => handleChange(e, index, 'Name')}
										input={<OutlinedInput label="Tag" />}
										renderValue={(selected) => selected}
										MenuProps={MenuProps}
										className="error"
									>
										{playerArr.length &&
											playerArr.map((player, index) => (
												<MenuItem
													key={player.FirstName + '_' + index}
													value={player.FirstName}
												>
													<ListItemText primary={player.FirstName} />
												</MenuItem>
											))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={6} className="simpleMultiSelect">
								<FormControl sx={{ m: 1, width: '100%' }}>
									<InputLabel id="demo-simple-select-standard-label">
										Position
									</InputLabel>
									<Select
										labelId="demo-simple-select-standard-label"
										id="demo-simple-select-standard"
										value={
											selectedPlayers['player_' + index] &&
											selectedPlayers['player_' + index]['Position']
										}
										onChange={handleChange}
										input={<OutlinedInput label="Tag" />}
										renderValue={(selected) => selected}
										MenuProps={MenuProps}
									>
										{player.Position &&
											player.Position.map((player, index) => (
												<MenuItem key={player + '_' + index} value={player}>
													<ListItemText primary={player} />
												</MenuItem>
											))}
									</Select>
								</FormControl>
							</Grid>
						</>
					)
				})}
				{/* <Grid item xs={6} className="simpleMultiSelect">
					<FormControl sx={{ m: 1, width: '100%' }}>
						<InputLabel id="demo-simple-select-standard-label">
							Player Name
						</InputLabel>
						<Select
							labelId="demo-simple-select-standard-label"
							id="demo-simple-select-standard"
							value={players}
							onChange={handleChange}
							input={<OutlinedInput label="Tag" />}
							renderValue={(selected) => selected}
							MenuProps={MenuProps}
						>
							{playerArr.map((player, index) => (
								<MenuItem
									key={player.FirstName + '_' + index}
									value={player.FirstName}
								>
									<ListItemText primary={player.FirstName} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={6} className="simpleMultiSelect">
					<FormControl sx={{ m: 1, width: '100%' }}>
						<InputLabel id="demo-simple-select-standard-label">
							Position
						</InputLabel>
						<Select
							labelId="demo-simple-select-standard-label"
							id="demo-simple-select-standard"
							value={players}
							onChange={handleChange}
							input={<OutlinedInput label="Tag" />}
							renderValue={(selected) => selected}
							MenuProps={MenuProps}
						>
							{playerArr.map((player, index) => (
								<MenuItem
									key={player.FirstName + '_' + index}
									value={player.FirstName}
								>
									<ListItemText primary={player.FirstName} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={6} className="simpleMultiSelect">
					<FormControl sx={{ m: 1, width: '100%' }}>
						<InputLabel id="demo-simple-select-standard-label">
							Player Name
						</InputLabel>
						<Select
							labelId="demo-simple-select-standard-label"
							id="demo-simple-select-standard"
							value={players}
							onChange={handleChange}
							input={<OutlinedInput label="Tag" />}
							renderValue={(selected) => selected}
							MenuProps={MenuProps}
						>
							{playerArr.map((player, index) => (
								<MenuItem
									key={player.FirstName + '_' + index}
									value={player.FirstName}
								>
									<ListItemText primary={player.FirstName} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={6} className="simpleMultiSelect">
					<FormControl sx={{ m: 1, width: '100%' }}>
						<InputLabel id="demo-simple-select-standard-label">
							Position
						</InputLabel>
						<Select
							labelId="demo-simple-select-standard-label"
							id="demo-simple-select-standard"
							value={players}
							onChange={handleChange}
							input={<OutlinedInput label="Tag" />}
							renderValue={(selected) => selected}
							MenuProps={MenuProps}
						>
							{playerArr.map((player, index) => (
								<MenuItem
									key={player.FirstName + '_' + index}
									value={player.FirstName}
								>
									<ListItemText primary={player.FirstName} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} className="text-center btnSubmit">
					{/* <Button
						variant="contained"
						sm={{ marginTop: '10px' }}
						bgcolor="primary"
						onClick={() => handleSave()}
					>
						Compose Team
					</Button>
				</Grid> */}
			</Grid>
		</Grid>
	)
}
