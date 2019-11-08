// Optional polyfill
// import 'whatwg-fetch';

function fetchWrapper() {
	
	if (window.origin === 'http://localhost:3000') {
		// dev env
		arguments[0] = 'http://localhost' + arguments[0];
    }
    // not sure if necessary since no csrf
	// arguments[1].credentials = 'include';
	return fetch.apply(this, arguments);
}

export default fetchWrapper;