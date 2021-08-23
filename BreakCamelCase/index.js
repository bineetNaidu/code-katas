/**
 * 
 * @param {string} str 
 */

function beakCamelCase(str) {
	const arr = str.split('');

	return arr.map(s => {
		return s.match(/[A-Z]/g) ? ` ${s}` : s;
	}).join(" ");
}