if (!String.prototype.trim) {
 String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g,'');
 }
};
// If trim() function is not supported

function LPdefaultFor(arg, val) { return typeof arg !== 'undefined' ? arg : val; }

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

function stringToSearchQuery (s,d) {
	s = s.trim();
	return s.replace(/\s+/g, d);
	// stringToSearchQuery('I love you', '+AND+') returns I+AND+love+AND+you
}

function LPUpdateQueryString(key, value, url) {
	if (!url) url = window.location.href;
	var re = new RegExp("([?|&])" + key + "=.*?(&|#|$)(.*)", "gi");

	if (re.test(url)) {
		if (typeof value !== 'undefined' && value !== null)
				return url.replace(re, '$1' + key + "=" + value + '$2$3');
		else {
			var hash = url.split('#');
			url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
			if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
					url += '#' + hash[1];
			return url;
		}
	}
	else {
		if (typeof value !== 'undefined' && value !== null) {
			var separator = url.indexOf('?') !== -1 ? '&' : '?',
					hash = url.split('#');
			url = hash[0] + separator + key + '=' + value;
			if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
					url += '#' + hash[1];
			return url;
		}
		else
			return url;
	}
	// Add a query string parameter if it doesn't exist. Don't submit value means 
	// to get rid of the parameter. Thanks for ellemayo for providing this function
	// http://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
	// e.g. LPUpdateQueryString('aUrlVar','123','/index.php?a=1&aUrlVar=2') changes aUrlVar to 123.
}

function LPlnkAndTxt(c,l) {
	var cl = l.trim();
	if (cl !=='') { 
		cl  = '<a href="' + cl + '" rel="nofollow" target="_blank">' + c.trim() + '</a>';
	}
	else {cl = c.trim();}
	return cl;
	// Combine link and text
}	
function LPurlHash() {
  var arr = window.location.hash.split('#');
  if(typeof arr[1] !== "undefined") { return arr[1]}
  else return '';
  // Get URL hash value
}

var correctYear = function(value, options){
  var theDate=new Date();
  var theYear=theDate.getFullYear();
  if (value < 1900 || value > theYear+1) return false;
  return true;
}		
// Validate year format
