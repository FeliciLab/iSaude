<template>
  <b-navbar :class="{'pt-5': platform === 'ios'}" toggleable type="dark" class="bg-header">
    <div class="w-100 d-flex justify-content-center">
      <img
        :src="require('../assets/esp_branca.png')"
        style="max-width:150px; max-height:48px"
        alt="Escola de Saúde Pública do Ceará"
      />
    </div>
  </b-navbar>
</template>

<style lang="scss" scoped>
.bg-header {
  background-color: #00853b;
}
</style>

<script>
export default {
  props: ['platform']
}
</script>
