//Service layer for app

import axios from 'axios';

//To resolve CORS issue. Please note that a max of 200 service request per hour can be
//served by this proxy
const PROXY_Url = 'https://cors-anywhere.herokuapp.com/';
const URL = PROXY_Url + `https://remora.staging.saleswhale.com`;

export const getListOfRestaurants = () => {
	return axios(URL + '/restaurants', {
		method: 'GET',
		headers: {
			'content-type': 'text/plain',
		}
	}).then(res => {
		return res.data
	}).catch(error => {
		throw error;
	});
};

export const getRestaurantDetails = id => {
	return axios(URL + `/restaurants/${id}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
		}
	}).then(res => {
		return res
	}).catch(error => {
		throw error;
	});
}