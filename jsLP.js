function numberToMonthYear(m,y) {
	var strMonth = "";
	switch (m)	{
		case 1: strMonth="January";break;
		case 2: strMonth="February";break;
		case 3: strMonth="March";break;					
		case 4: strMonth="April";break;										
		case 5: strMonth="May";break;															
		case 6: strMonth="June";break;															
		case 7: strMonth="July";break;															
		case 8: strMonth="August";break;
		case 9: strMonth="September";break;																				
		case 10: strMonth="October";break;																									
		case 11: strMonth="November";break;																														
		case 12: strMonth="December";break;																																			
	}
	strMonth = strMonth.toUpperCase();
	return strMonth + ", " + y;
}
function fixedFromCharCode (c) {
	if (c > 0xFFFF) {
		c -= 0x10000;
		return String.fromCharCode(0xD800 + (c >> 10), 0xDC00 + (c & 0x3FF));
	}
	else {	return String.fromCharCode(c);	}
	// e.g. foo = fixedFromCharCode(0x1D15D);
}
