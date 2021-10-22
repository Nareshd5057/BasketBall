import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<Typography
						variant="h6"
						color="inherit"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						BasketBall
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
