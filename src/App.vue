<template>
  <div>
     <NavbarComp/>
     <router-view></router-view>
     <FooterComp/>
  </div>
</template>

<script>

import FooterComp from './Layout/footerComp.vue';
import NavbarComp from './Layout/NavbarComp.vue';
export default {
  name: 'App',
  components: {
    NavbarComp,
    FooterComp
}
}
</script>

<style>
 
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');
</style>
