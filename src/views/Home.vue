<template>
  <div class="py-3 container">
    <div class="row">
      <!-- <div class="col-12 d-flex justify-content-center">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          Detectamos que o aceite das notificações foi bloqueado. Por favor,<button type="button" class="btn btn-link" :click="dispatchPermissionPush()">Ative as notificações</button>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div> -->
      <div class="col-12 d-flex justify-content-center mb-3">
        <a target="_blank" href="https://coronavirus.ceara.gov.br/profissional/" rel="noopener noreferrer">
          <b-card
            style="max-width: 20rem;"
            class="mb-2 text-center line-orange"
            >
            <div class="card-icon mx-auto">
              <span class="icon icon-doctor mx-auto"></span>
            </div>
            <p class="my-3">Visite o site do Profissional de Saúde</p>
          </b-card>
        </a>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <a target="_blank" href="https://gestao-ventiladores.dev.org.br/" rel="noopener noreferrer">
          <b-card
            style="max-width: 20rem;"
            class="mb-2 text-center line-orange d-flex justify-content-center">
            <div class="card-icon mx-auto">
              <span class="icon icon-respirator mx-auto"></span>
            </div>
            <p class="my-3">Visite o nosso Sistema Central de Ventiladores</p>
          </b-card>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import {requestPushPermission} from '../push-notification'
export default {
  name: 'Home'
  // methods: {
  //   dispatchPermissionPush () {
  //     requestPushPermission()
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  .line-orange {
    border-top: 3px solid #f36821;
  }
  .card-icon {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    align-self: center;
  }
  a {
    color: black;
  }
</style>
