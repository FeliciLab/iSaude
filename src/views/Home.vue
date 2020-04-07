<template>
  <div class="py-3 container">
    <div class="logo"></div>
    <div class="px-3">
      <b-button block  class="btn-orange" target="_blank" href="https://coronavirus.ceara.gov.br/profissional/">Visite o site do Profissional de Saúde</b-button>
      <b-button block class="btn-orange" target="_blank" href="https://gestao-ventiladores.dev.org.br/">Visite o nosso Sistema Central de Ventiladores</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .btn-orange {
    background-color: #fc6836;
    color: white;

    &:hover {
      background-color: #ce542c;
    }
    &:focus {
      background-color: #ce542c;
    }
  }
</style>
