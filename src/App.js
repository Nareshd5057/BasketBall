import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Routers from './Routers'

function App() {
	return (
		<BrowserRouter>
			{/* MAIN HEADER */}
			<Header />
			{/* MAIN APP NAVIGATION */}
			<Navigation />
			{/* APP ROUTER CONFIG */}
			<Routers />
		</BrowserRouter>
	)
}

export default App
