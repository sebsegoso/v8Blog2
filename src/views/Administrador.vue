<template>
  <div id="wrapper">
      <h1>Administración</h1>
        <router-link :to="{name: 'AdministradorSimple'}">Simple </router-link> |
        <router-link :to="{name: 'AdministradorAvanzado'}">Avanzado</router-link>
        <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#wrapper{
    text-align: center;
}
</style>