/**
 * Component: RestaurantCard
 * Parent: RestaurantList.jsx
 * Child: N/A
 * Description: Renders a single restaurant card on the screen and uses the algoritm to normalize wonky 
 * 				time intervals.
 * Algorithm: ../algos/getRestaurantTimings
 */

import React, { useEffect, useState } from 'react';
import { getRestaurantOpenTimings } from '../algos/getRestaurantTimings'

//restaurant details passed as props
const RestaurantCard = ({ restaurant }) => {

	const [opens, setOpens] = useState('N/A');
	const [closes, setCloses] = useState('N/A');

	useEffect(() => {
		let timings = getRestaurantOpenTimings(restaurant.attributes.hours)
		if(timings.length > 1) {
			setOpens(convertToString(timings[0]) + " & " + convertToString(timings[1]))
			setCloses(convertToString([timings[0][1], timings[1][0]]))
		} else if(timings.length === 1){
			setOpens(convertToString(timings[0]))
			setCloses(convertToString([timings[0][1], timings[0][0]]))
		}

	}, [])

	//Converts the returned shifts by the algorithm into A.M. and P.M. strings
	const convertToString = timings => {
		let convertedString = '';
		if (timings[0] < 12) {
			convertedString += timings[0] + ' a.m. to ';
		} else if (timings[0] === 12) {
			convertedString += timings[0] + ' p.m. to ';
		} else {
			convertedString += timings[0] - 12 + ' p.m. to ';
		}

		if (timings[1] < 12) {
			convertedString += timings[1] + ' a.m.';
		} else if (timings[1] === 12) {
			convertedString += timings[1] + ' p.m.';
		} else {
			convertedString += timings[1] - 12 + ' p.m.';
		}

		return convertedString;
	}

	//Quick bootstrap cards for finesse :)
	return (
		<div className="col-md-6 text-center">
			<div className="card text-white bg-primary mb-3">
				<div className="card-header">{restaurant.type.toUpperCase()}</div>
				<div className="card-body">
					<h2 className="card-title">{restaurant.attributes.name}</h2>
					<p className="card-text text-left">
						Some quick example text to build on the card title and make up the bulk of the card's content.
						Some quick example text to build on the card title.
					</p>
				</div>
				<ul className="list-group list-group-flush text-left">
					<li className="list-group-item text-success">OPENS: {opens}</li>
					<li className="list-group-item text-danger">CLOSES: {closes}</li>
				</ul>
			</div>
		</div>
	)
}

export default RestaurantCard;