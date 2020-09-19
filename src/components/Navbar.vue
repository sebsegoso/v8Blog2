<template>
  <nav class="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand">V8</a>
      <button
        data-toggle="collapse"
        data-target="#navbarResponsive"
        class="navbar-toggler"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <!-- MENU DE NAVEGACION -->
        <ul class="nav navbar-nav ml-auto" id="menu-v8">
          <li class="nav-item" role="presentation">
            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
            <router-link :to="{name: 'Raiz'}">Portada</router-link>|
          </li>
          <li class="nav-item" role="presentation">
            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
            <router-link :to="{name: 'SobreMi'}">Sobre mi</router-link>|
          </li>
          <li class="nav-item" role="presentation">
            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
            <router-link to="/contacto">Contacto</router-link>|
          </li>
          <li class="nav-item" role="presentation">
            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
            <router-link to="/post/1">Último post</router-link>|
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #000;
  color: #fff;
  #menu-v8 a {
    color: #ccc;
    text-shadow: 1px 1px #000;
    &:hover {
      color: #4444ff;
    }
  }
}
</style>