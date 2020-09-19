<template>
  <div id="wrapper">
    <h1>Esta página de administración está en construcción.</h1>
    <h2>
      Intente como
      <router-link :to="{name: 'AdministradorSimple'}">administrador simple.</router-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: "AdministradorAvanzado",
};
</script>

<style lang="scss" scoped>
#wrapper{
    text-align: center;
}
</style>