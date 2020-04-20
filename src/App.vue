<template>
  <div class="content">
    <Header :platform="platform"/>
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
  data () {
    return {
      platform: ''
    }
  },
  async mounted () {
    const { PushNotifications, Device } = Plugins
    const info = await Device.getInfo()
    this.platform = info.platform
    if (info.platform !== 'web') {
      PushNotifications.register()
      PushNotifications.addListener('registration', token => {
        console.log('Push registration success, token: ' + token.value)
      })

      PushNotifications.addListener('registrationError', error => {
        console.log('Error on registration: ' + JSON.stringify(error))
      })

      PushNotifications.addListener('pushNotificationReceived', notification => {
        console.log('Error on registration: ' + JSON.stringify(notification))
      })

      PushNotifications.addListener('pushNotificationActionPerformed', notification => {
        console.log('Error on registration: ' + JSON.stringify(notification))
      })
    }
  }
}
</script>
