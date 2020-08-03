/**
 * Component: App.jsx
 * Parent: index.js
 * Child: RestaurantList.jsx
 * Description: Contains NavBar, imports css and calls RestaurantList.jsx 
 */
import React from 'react';
import RestaurantsList from './components/RestaurantsList'
import './App.css';

function App() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<h3 className="navbar-brand mr-auto">Restaurants</h3>
				<div>
					<h4>Just a random navigation bar.</h4>
				</div>
			</nav>
			<div className="App">
				<RestaurantsList />
			</div>
		</>

	);
}

export default App;
