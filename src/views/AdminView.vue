<template>
  <div class="home">
    <h6>管理者登入後能看到的頁面</h6>
    <NavFont :mode="'/admin'" />
    <router-view />
    <div v-if="isAdminIndex">
      <h2>後台首頁</h2>
    </div>
  </div>
</template>

<script>
import NavFont from '../components/NavFonted.vue'

export default {
  components: {
    NavFont
  },
  created () {
    const now = new Date()
    if (now > this.getCookieData('expired')) {
      alert('認證已過期, 請重新登入')
      this.$router.push({
        path: '/login'
      })
    }
  },
  computed: {
    isAdminIndex () {
      return this.$route.path === '/admin'
    }
  },
  methods: {
    getCookieData (key) {
      const cookieStr = (`; ${document.cookie}`)
      const cookieSplit = cookieStr.split(`; ${key}=`)
      let getCookieValue = ''
      if (cookieSplit.length === 2) {
        getCookieValue = cookieSplit[1].split(';')[0]
      }
      return getCookieValue
    }
  }
}
</script>

<style scoped>
</style>
