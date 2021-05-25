<template>
  <v-app class="grey lighten-4">
    <NavBar/>

    <v-main class="main">
      <router-view></router-view>
    </v-main>
    <Footer />

  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {mapActions} from 'vuex';


export default {
  components:{
    NavBar,
    Footer
 },

  data (){
    return {}
  },

  mounted() {
    this.checkLoginStatus()
  },

  methods:{
    checkLoginStatus(){
      if(localStorage.getItem("token") && localStorage.getItem("userId")){
        this.refreshPage()
      }
    },

    ...mapActions(["refreshPage"])
  }

}


</script>



<style>

</style>
