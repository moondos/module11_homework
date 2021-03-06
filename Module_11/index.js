function countDown(n) {
	if (n < 1) {
		return("The number is less than 1")
	}
	else {
		let nums = []
		for (let i = n; i >= 1; --i) {
			nums.push(i)
		}
		return(nums);
	}
	   
}

module.exports = countDown