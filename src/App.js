
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter} from 'react-router-dom'
import Home from './home'


const App = () => (
	<BrowserRouter>
		<Provider store={store}> 
			<Home userAnswers={""}/>
		</Provider>
	</BrowserRouter>
)


export default App
