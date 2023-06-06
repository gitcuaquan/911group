<template>
  <LayoutHeader>

  </LayoutHeader>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|<button @click="$setLanguage('vi')">Việt nam</button> | <button @click="$setLanguage('en')">Tiếng Anh</button>
  </nav> -->
  <router-view />
  <LayoutFooter></LayoutFooter>
</template>
<script>
import LayoutHeader from '@/components/layout/header.vue' 
import LayoutFooter from '@/components/layout/footer.vue' 
export default {
  name: 'APP_MAIN',
  components:{
    LayoutHeader,
    LayoutFooter

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: 'Be Vietnam Pro', sans-serif,Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #f5f5f500;
	border-radius: 10px;
}

html::-webkit-scrollbar
{
	width: 10px;
	background-color: transparent;
}

html::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-image: -webkit-gradient(linear,
									   left bottom,
									   left top,
									   color-stop(0.44, rgb(163, 163, 163)));
}
</style>
