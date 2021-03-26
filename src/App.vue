<template>
<v-app>

<NavBar />
<v-main >
      <router-view />
    </v-main>
    
</v-app>

</template>

<style lang="scss">

</style>
<script>
import NavBar from "@/components/navbar.vue";

export default {
  components: {
    NavBar
  },data: function () {
     return {


     }
  }
}
</script>