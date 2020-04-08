<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header'
import { requestPushPermission } from './push-notification'
export default {
  components: {
    Header
  },
  mounted () {
    requestPushPermission()
  }
}
</script>
