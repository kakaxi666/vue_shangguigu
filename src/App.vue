<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
 import Header from './components/Header'
 import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    Footer
  }
}
</script>

<style>
</style>
