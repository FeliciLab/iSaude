import firebase from 'firebase'
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

const requestPushPermission = async () => {
  try {
    const messaging = firebase.messaging()
    await messaging.requestPermission()
    const token = await messaging.getToken()
    console.log('token do usuário:', token)
    return token
  } catch (error) {
    console.error(error)
  }
}

export {
  initFirebase,
  requestPushPermission
}
