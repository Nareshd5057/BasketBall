import {
	Button,
	Checkbox,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Paper,
	Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
} from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import constants from './../../Constants/Constants'
export default function PlayerCreation() {
	/* DECLARATION PART */
	const state = useSelector((state) => state)
	//CREATED REFERENCE FOR ALL FIELDS
	const [playerInputRef, setplayerInputRef] = React.useState({
		FirstName: React.useRef(),
		LastName: React.useRef(),
		Height: React.useRef(),
	})
	let [playerObj, setplayerObj] = React.useState(state.player)
	const dispatch = useDispatch()

	/* FUNCTION PART */
	//COMMON INPUT CHANGE FUNCTIOIN
	const handleInputChange = (inputKey, value) => {
		let orgState = state.player
		orgState[inputKey] = inputKey === 'Position' ? [...value] : value
		dispatch({ type: 'inputChange', newState: orgState })
		setplayerObj(orgState)
	}

	//HANDLE PLAYER SAVE FUNCTIONALITY
	const handleSave = () => {
		const isEmpty = Object.values(playerObj).some(
			(x) => x === null || x === '' || x.length === 0
		)
		if (!isEmpty) {
			let orgState = JSON.stringify(state.player)
			dispatch({ type: 'savePlayes', newPlayer: orgState })

			playerObj.FirstName = ''
			playerObj.LastName = ''
			playerObj.Height = ''
			playerObj.Position = []
		} else {
			setplayerObj({
				FirstName: playerObj.FirstName ? playerObj.FirstName : '',
				LastName: playerObj.LastName ? playerObj.LastName : '',
				Height: playerObj.Height ? playerObj.Height : '',
				Position: playerObj.Position.length > 0 ? playerObj.Position : [null],
			})
			let objKeys = Object.keys(playerInputRef)
			for (let i = 0; i < objKeys.length; i++) {
				if (playerObj[objKeys[i]] !== '') {
					playerInputRef[objKeys[i]].current.focus()
					break
				}
			}
		}
	}

	//HANDLE SELECT MENU CHANGE EVENT
	const handleChange = (event) => {
		const {
			target: { value },
		} = event
		if (playerObj.Position[0] === null) {
			setplayerObj({
				FirstName: playerObj.FirstName ? playerObj.FirstName : '',
				LastName: playerObj.LastName ? playerObj.LastName : '',
				Height: playerObj.Height ? playerObj.Height : '',
				Position: [],
			})
			playerObj.Position = []
		}
		playerObj.Position = []
		playerObj.Position = typeof value === 'string' ? value.split(',') : value
		handleInputChange('Position', value === 'string' ? value.split(',') : value)
	}

	//CHECK DUPLICATE FIRSTNAMES IN AN ARRAY
	const uniqueFirstname = () => {
		return state.players.some((item) => {
			let itemFirstName = item.FirstName
			return (
				itemFirstName.toLowerCase() ===
				(playerObj.FirstName
					? playerObj.FirstName.toLowerCase()
					: playerObj.FirstName)
			)
		})
	}

	return (
		<Grid sm="6" className="m0Auto">
			<Paper sm={12} sx={{ p: 5 }} elevation={3}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={6}>
						<TextField
							id="standard-basic"
							label="FirstName"
							variant="standard"
							value={playerObj.FirstName}
							onChange={(e) => {
								handleInputChange('FirstName', e.target.value)
							}}
							error={playerObj.FirstName === '' || uniqueFirstname()}
							helperText={uniqueFirstname() ? 'Already Exist!' : ' '}
							inputRef={playerInputRef.FirstName}
							autoComplete="off"
							disabled={state.players.length == 5}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="standard-basic"
							label="LastName"
							variant="standard"
							value={playerObj.LastName}
							onChange={(e) => {
								handleInputChange('LastName', e.target.value)
							}}
							error={playerObj.LastName === ''}
							helperText={playerObj.LastName === '' ? 'Empty field!' : ' '}
							inputRef={playerInputRef.LastName}
							autoComplete="off"
							disabled={state.players.length == 5}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="standard-basic"
							label="Height"
							variant="standard"
							value={playerObj.Height}
							type="number"
							min="0"
							onKeyPress={(event) => {
								if (event.key == '-' || event.key == '+') {
									event.preventDefault()
									return false
								}
							}}
							onChange={(e) => {
								handleInputChange('Height', e.target.value)
							}}
							helperText={playerObj.Height === '' ? 'Empty field!' : ' '}
							error={playerObj.Height === ''}
							inputRef={playerInputRef.Height}
							inputProps={{ pattern: '[0-9]*' }}
							autoComplete="off"
							disabled={state.players.length == 5}
						/>
					</Grid>
					<Grid item xs={6} className="simpleMultiSelect">
						<FormControl sx={{ m: 1, width: '100%' }}>
							<InputLabel id="demo-simple-select-standard-label">
								Position
							</InputLabel>
							<Select
								labelId="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								multiple
								value={playerObj.Position}
								onChange={handleChange}
								input={<OutlinedInput label="Tag" />}
								renderValue={(selected) =>
									selected.length > 0 ? selected.join(', ') : ''
								}
								MenuProps={constants.MenuProps}
								disabled={state.players.length == 5}
							>
								{constants.positions.map((position) => (
									<MenuItem key={position} value={position}>
										<Checkbox
											checked={playerObj.Position.indexOf(position) > -1}
										/>
										<ListItemText primary={position} />
									</MenuItem>
								))}
							</Select>
							{playerObj.Position.length > 0 &&
							playerObj.Position[0] === null &&
							playerObj.Position.length < 2 ? (
								<FormHelperText className="ml0" error={true}>
									Empty Field
								</FormHelperText>
							) : (
								''
							)}
						</FormControl>
					</Grid>
					<Grid item xs={12} className="text-center btnSubmit">
						<Button
							variant="contained"
							bgcolor="primary"
							onClick={() => handleSave()}
							disabled={state.players.length == 5}
						>
							Save
						</Button>
					</Grid>
					{state.players.length == 5 ? (
						<h4 className="m0Auto mt30">
							<b>Note:</b>{' '}
							<p>
								Please navigate to First Quater and assign the position to
								players
							</p>
						</h4>
					) : (
						<></>
					)}
				</Grid>
			</Paper>

			<TableContainer sx={{ mt: 5 }} component={Paper} elevation={3}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{Object.keys(playerObj).map((x) => (
								<TableCell>
									<strong>{x}</strong>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{state.players.map((row) => (
							<TableRow
								key={row.FirstName}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.FirstName}
								</TableCell>
								<TableCell>{row.LastName}</TableCell>
								<TableCell>{row.Height}</TableCell>
								<TableCell>{row.Position.join(',')}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	)
}
