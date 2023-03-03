<template>
  <div class="home">
    <h6>Hello, 這裡是前台頁面</h6>
    <NavFont :mode="'/'" />
    <router-view />
    <div v-if="isIndex">
      <h2>前台首頁</h2>
    </div>
  </div>
</template>

<script>
import NavFont from '../components/NavFonted.vue'

export default {
  components: {
    NavFont
  },
  computed: {
    isIndex () {
      return this.$route.path === '/'
    }
  }
}
</script>

<style scoped>
</style>
