import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Grid, Tab } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useHistory } from 'react-router'

export default function Navigation() {
	/* DECALATION PART */
	const [value, setValue] = React.useState('PlayerCreation')

	/* USED TO NAVIGATE PROGRAMATICALLY */
	const history = useHistory()

	/* NAVIGATE TO APPROPRIATE LOCATION */
	const handleChange = (event, newValue) => {
		setValue(newValue)
		history.push('/' + newValue)
	}
	return (
		<Grid className="m0Auto" sx={{ mt: 3 }}>
			<Box>
				<TabContext value={value}>
					<TabList
						className="justifyCenter"
						onChange={handleChange}
						aria-label="lab API tabs example"
					>
						<Tab label="Compose Item" value="PlayerCreation" />
						<Tab label="First Quater" value="PlayerSelection" />
					</TabList>
				</TabContext>
			</Box>
		</Grid>
	)
}
