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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
