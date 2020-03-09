<template>
    <div class="home">
        <NavBar />
      <div class="relative h-screen w-screen bg-cover bg-center shadow-2x1" 
      :style="`background-image:url(${bg_homeImage})`">
      <div class="h-screen w-screen opacity-80" />
      <div class="absolute h-screen w-screen top-0 flex-col justify-center items-center">
          <h1 class="text-7xl font-bold text-white px-6 hover:bg-white hover:text-white-800 opacity-80">
              RGV League
          </h1>
          <h3 class="text-4xl font-bold text-white px-6 hover:bg-white hover:text-white-800 opacity-80"> May your passion for 
            soccer remain on the field. 
            Register your team and play with others 
            to choose the best of the RGV. </h3>
      </div>  
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import bg_homeImage from '../assets/bg_home.jpg'

export default {
    name:'Home',
    components: {
        NavBar,
    },
    data() {
        return {
            bg_homeImage,
        }
    }
}
</script>