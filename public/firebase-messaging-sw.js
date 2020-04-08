// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

// eslint-disable-next-line no-undef
firebase.initializeApp({
  messagingSenderId: 'your messagingSenderId' // troque pelo seu sender id
})

// eslint-disable-next-line no-undef
const messaging = firebase.messaging()

console.log(messaging)