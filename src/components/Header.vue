<template>
  <b-navbar toggleable type="dark" class="bg-header">
    <div class="w-100 d-flex justify-content-center">
      <img
        :src="require('../assets/esp_branca.png')"
        style="max-width:150px; max-height:48px"
        alt="Escola de Saúde Pública do Ceará"
      />
    </div>

    <!-- <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>-->

    <!-- <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>-->
  </b-navbar>
</template>

<style lang="scss" scoped>
.bg-header {
  background-color: #00853b;
}
</style>
