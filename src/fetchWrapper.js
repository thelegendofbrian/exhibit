// Optional polyfill
// import 'whatwg-fetch'

function fetchWrapper() {

  if (!arguments[1]) {
    arguments[1] = {}
  }
  arguments[1].credentials = 'include'

  if (window.origin.indexOf('localhost') !== -1 || window.origin.indexOf('127.0.0.1') !== -1) {
    // dev env

    return import('./portConfig.js').then(module => {
      arguments[0] = `http://localhost:${module.default.devServer}${arguments[0]}`
      return fetch.apply(this, arguments)
    })
  }

  return fetch.apply(this, arguments)
}

export default fetchWrapper