<template>
  <div id="wrapper">
    <Navbar />
    <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->
    <transition name="transicion">
      <router-view ></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}
.transicion-enter-active,
.transicion-leave-active {
  transition: all 1s ease;
}
.transicion-enter,
.transicion-leave-to {
  opacity: 0;
  filter: blur(1.5rem);
}
#wrapper {
  background-color: #ddd;
  min-height: 100vh;
}
.vista-router {
  padding-top: 56px;
}
.masthead {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: difference;
}
header {
  padding: 150px 0;
  color: #fff;
  text-shadow: 2px 2px 0 #000, 0 0 10px #777;
}
</style>
