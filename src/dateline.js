function dateline(dt){

    var dayNames = ['Sunday', 'Monday', 'Tuesday',
		    'Wednesday', 'Thursday', 'Friday',
		    'Saturday'];
    var monthNames = ['Jan.', 'Feb.', 'March', 'April',
		      'May', 'June', 'July', 'Aug.',
		      'Sept.', 'Oct.', 'Nov.', 'Dec.'];

    var ampm = "a.m."

    if (dt.getHours >= 12) {
	ampm = "p.m."
    }

    return monthNames[dt.getMonth()]
	+ " "
	+ dt.getDate()
	+ ", "
	+ dt.getFullYear()
	// +" "
	// + (1 + dt.getHours() % 12)
	// + ":"
	// + dt.getMinutes()
	// + " "
	// + ampm;
}

export { dateline }
