<template>
  <div>
    <a v-for="link in userRouters" :key="link.path" href="#"
        @click.prevent="()=> this.$router.push(this.ifAdminChildren(link.path))" class="me-2">
        {{ link.name }}</a>
    <a v-if="mode === '/admin'" href="#" @click.prevent="() => logout()">登出</a>
    <hr>
  </div>
</template>

<script>
const apiUrl = import.meta.env.VITE_API

export default {
  props: ['mode'],
  data () {
    return {
      userRouters: []
    }
  },
  computed: {
    routerList () {
      return []
    }
  },
  created () {
    const allRouters = this.$router.options.routes
    const modeRouters = allRouters.find(e => e.path === this.mode)
    this.userRouters = [modeRouters, ...modeRouters.children]
  },
  methods: {
    ifAdminChildren (link) {
      const adminPages = this.mode === '/admin' && link !== '/admin'
      return adminPages ? `/admin/${link}` : link
    },
    getCookieData (key) {
      const cookieStr = (`; ${document.cookie}`)
      const cookieSplit = cookieStr.split(`; ${key}=`)
      let getCookieValue = ''
      if (cookieSplit.length === 2) {
        getCookieValue = cookieSplit[1].split(';')[0]
      }
      return getCookieValue
    },
    logout () {
      this.$http.post(`${apiUrl}logout`, {}, {
        headers: {
          Authorization: this.getCookieData('token')
        }
      })
        .then((res) => {
          alert('已登出')
          document.cookie = 'expired='
          document.cookie = 'token='
          this.$router.push({
            path: '/'
          })
        })
        .catch(() => {
          alert('登出失敗')
        })
    }
  }
}
</script>

<style>
</style>
