/**
 * Component: RestaurantList
 * Parent: App.jsx
 * Child: RestaurantCard.jsx
 * Description: Calls a service to get the list of restaurants into state and maps 
 * 				each restaurant details to provide to chile RestaurantCard.jsx.
 */

import React, { useState, useEffect } from 'react';
import { getListOfRestaurants } from '../api/api'
import RestaurantCard from './RestaurantCard'
import logo from '../logo.svg';

const RestaurantsList = () => {

	const [restaurants, setRestaurants] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getListOfRestaurants().then(res => {
			setRestaurants(res.data)
		})
	}, [])

	useEffect(() => {
		if (restaurants.length > 0) {
			setLoading(false)
		}
	}, [restaurants])

	const renderRestaurants = () => {
		return restaurants.map(restaurant => {
			return (
				<RestaurantCard restaurant={restaurant} key={restaurant.id} />
			)
		})

	}
	return (
		<div className="container restaurant-list">
			<div className="row">
				<div className="col-md-12">
					<h1>List of Restaurants</h1><br />
				</div>
			</div>
			<div className="row">
				{loading ?
				<div className="col-md-12 text-center">
					<img src={logo} className="App-logo" alt="logo" /><br />
					<h3>Loading...</h3>
				</div>
					: renderRestaurants()}
			</div>
		</div>
	)
}

export default RestaurantsList;