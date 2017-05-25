import moment from 'moment-timezone';

let defaultTimeZone = null
// defaultTimeZone = 'America/New_York'

if (defaultTimeZone) {
	moment.tz.setDefault(defaultTimeZone)
}


let local = moment.prototype.local

// Returns a new moment object. This appears to correct prototype functions on the moment object
/*
	Not sure why this happens, but it does
	Ex:
		Hour is currently 12

		moment().local().hour(); // 10, incorrect
		moment().local().clone().hour(); // 12, correct
*/
// The new version of local will return the moment in whatever timezone has been set at the default
moment.prototype.local = function() {
	if (defaultTimeZone) {
		this.tz(defaultTimeZone)
	}

	return local.call(this).clone()
}

// forceLocal will return the moment as whatever timezone the computer is set to (default local functionality)
moment.prototype.forceLocal = function() {
	return local.call(this)
}

// Will return the utcMoment in with a local utc offset but set at the same time as the original utc
/*
	Example:
	// With a local offset of -6:00

	Just using .local()
	1/1/2017 2:00 +0:00
	12/31/2016 20:00 -6:00 

	With this method
	1/1/2017 2:00 +0:00
	1/1/2017 2:00 -6:00

	This helps with having a utc and and finding the start of the utc day in local time
	Otherwise, as in the example, when you convert to local, you may end up with a different day and even year!
*/
moment.prototype.keepTimeLocal = function() {

	let offset = parseInt(moment().utcOffset())

	return this.local().add(-offset, 'minutes')
}

export default moment