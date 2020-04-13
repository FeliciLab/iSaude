<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header'
import { Plugins } from '@capacitor/core'
export default {
  components: {
    Header
  },
  mounted () {
    const { PushNotifications } = Plugins
    console.log('Plugins -> ', Plugins)
    console.log('Push Notification -> ', PushNotifications)
    PushNotifications.register()

    PushNotifications.addListener('registration', token => {
      alert('Push registration success, token: ' + token.value)
      console.log('Push registration success, token: ' + token.value)
    })

    PushNotifications.addListener('registrationError', error => {
      alert('Error on registration: ' + JSON.stringify(error))
      console.log('Error on registration: ' + JSON.stringify(error))
    })

    PushNotifications.addListener('pushNotificationReceived', notification => {
      alert('Push received: ' + JSON.stringify(notification))
      console.log('Error on registration: ' + JSON.stringify(notification))
    })

    PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      alert('Push action performed: ' + JSON.stringify(notification))
      console.log('Error on registration: ' + JSON.stringify(notification))
    })
  }
}
</script>
