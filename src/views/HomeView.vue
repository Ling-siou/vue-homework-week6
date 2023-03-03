<template>
  <div class="home">
    <h6>Hello, 這裡是前台頁面</h6>
    <NavFont :mode="'/'" />
    <router-view />
  </div>
</template>

<script>
import NavFont from '../components/NavFonted.vue'

export default {
  components: {
    NavFont
  }
}
</script>

<style scoped>
</style>
