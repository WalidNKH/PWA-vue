/* eslint-disable no-console */

import { register } from 'register-service-worker'
import Swal from 'sweetalert2'
console.log('test : ' + process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
  console.log('test numero 2 : ' + process.env.NODE_ENV)
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      Swal.fire('Service worker has been registered.')},
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
