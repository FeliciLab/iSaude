import firebase from 'firebase'
import { Plugins } from '@capacitor/core'

const initFirebase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyDcZZrVte2c4zd0jTpnPrhZOIw4KFDkN8A',
    authDomain: 'covid-19-ceara-7f898.firebaseapp.com',
    databaseURL: 'https://covid-19-ceara-7f898.firebaseio.com',
    projectId: 'covid-19-ceara-7f898',
    storageBucket: 'covid-19-ceara-7f898.appspot.com',
    messagingSenderId: '145552152707',
    appId: '1:145552152707:web:4053b6b6a90701dd7be3b6',
    measurementId: 'G-YDRYSE60EK'
  })
}

navigator.serviceWorker
  .register('/service-worker.js')
  .then((registration) => {
    firebase.messaging().useServiceWorker(registration)
  })

const requestPushPermission = async () => {
  const { PushNotification } = Plugins
  PushNotification.requestPermission().then(result => {
    if (result.granted) {
      PushNotification.register()
    } else {
      console.log('error')
    }
  })

  PushNotification.addListener('registration', token => {
    alert('Push registration success, token: ' + token.value)
    console.log('Push registration success, token: ' + token.value)
  })

  PushNotification.addListener('registrationError', error => {
    alert('Error on registration: ' + JSON.stringify(error))
    console.log('Error on registration: ' + JSON.stringify(error))
  })

  PushNotification.addListener('pushNotificationReceived', notification => {
    alert('Push received: ' + JSON.stringify(notification))
    console.log('Error on registration: ' + JSON.stringify(notification))
  })

  PushNotification.addListener('pushNotificationActionPerformed', notification => {
    alert('Push action performed: ' + JSON.stringify(notification))
    console.log('Error on registration: ' + JSON.stringify(notification))
  })
}

export {
  initFirebase,
  requestPushPermission
}
