// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

// eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: 'AIzaSyDcZZrVte2c4zd0jTpnPrhZOIw4KFDkN8A',
  authDomain: 'covid-19-ceara-7f898.firebaseapp.com',
  databaseURL: 'https://covid-19-ceara-7f898.firebaseio.com',
  projectId: 'covid-19-ceara-7f898',
  storageBucket: 'covid-19-ceara-7f898.appspot.com',
  messagingSenderId: '145552152707',
  appId: '1:145552152707:web:4053b6b6a90701dd7be3b6',
  measurementId: 'G-YDRYSE60EK' // troque pelo seu sender id
})

// eslint-disable-next-line no-undef
const messaging = firebase.messaging()

console.log(messaging)