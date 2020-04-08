import firebase from 'firebase'
const initFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '145552152707'
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
