// Optional polyfill
// import 'whatwg-fetch';
import portCfg from './portConfig';

function fetchWrapper() {

  if (window.origin === `http://localhost:${portCfg.devClient}`) {
    // dev env
    arguments[0] = `http://localhost:${portCfg.devServer}${arguments[0]}`;
  }
  // not sure if necessary since no csrf
  // arguments[1].credentials = 'include';
  return fetch.apply(this, arguments);
}

export default fetchWrapper;