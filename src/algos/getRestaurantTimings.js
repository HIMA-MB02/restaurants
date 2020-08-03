//This contains TASK 2: The algorithm to correct timings
//Algorithm has a complexity of O(n) => as there are no nested for-loops.

let timings;

export const getRestaurantOpenTimings = allTimes => {
	timings = allTimes;

	//Find the earliest and the latest that the restaurant is open
	let bounds = findBounds();

	//If we consider time to be in the format [start-time, end-time]
	//Find the greatest end-time, for which start-time lies in the bounds of bounds[0]
	let firstShift = getStartOfBreakShift(bounds[0])

	//Find the least start-time, for which end-time lies in the bounds of bounds[1]
	let secondShift = getEndOfBreakShift(bounds[1])

	//If both sshifts are equal, which will happen in the case of e.g. [2, 15], [15, 20]
	if(JSON.stringify(firstShift) === JSON.stringify(secondShift)) {
		return [firstShift]
	} else {
		return [firstShift, secondShift]
	}
}

const getStartOfBreakShift = currentTimings => {
	let startOfBreak = currentTimings[1];
	timings.forEach(time => {
		if(time[0] >= currentTimings[0] && time[0] <= currentTimings[1]) {
			if(time[1] > currentTimings[1]) {
				startOfBreak = time[1];
			}
		}
	})
	return [currentTimings[0], startOfBreak]
}

const getEndOfBreakShift = currentTimings => {
	let endOfBreak = currentTimings[0]
	timings.forEach(time => {
		if(time[1] >= currentTimings[0] && time[1] <= currentTimings[1]) {
			if(time[0] < currentTimings[0]) {
				endOfBreak  = time[0]
			}
		}
	})
	return [endOfBreak, currentTimings[1]]
}

const findBounds = () => {
	let min = timings[0][0];
	let max = timings[0][1];
	let minThreshold;
	let maxThreshold;

	timings.forEach(time => {
		if(time[0] <= min) {
			min = time[0];
			minThreshold = time;
		}
		if(time[1] >= max) {
			max = time[1];
			maxThreshold = time;
		}
	})
	return [minThreshold, maxThreshold]
}