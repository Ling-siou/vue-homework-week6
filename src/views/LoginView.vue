<template>
    <div class="login">
      <h2 class="mb-3 text-center">後台登入</h2>
        <form style="width: 320px" class="mx-auto">
            <div class="mb-3">
              <label for="loginEmail" class="form-label">Email</label>
              <input type="email" class="form-control" id="loginEmail" v-model="email">
            </div>
            <div class="mb-3">
              <label for="loginPassword" class="form-label">密碼</label>
              <input type="password" class="form-control" id="loginPassword" v-model="password">
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary text-center" @click.prevent="login">登入</button>
            </div>
          </form>
        </div>
</template>

<script>
const apiUrl = import.meta.env.VITE_API

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const loginData = {
        username: this.email,
        password: this.password
      }
      this.$http.post(`${apiUrl}admin/signin`, loginData)
        .then((res) => {
          document.cookie = `expired=${res.data.expired}`
          document.cookie = `token=${res.data.token}`
          alert('登入成功')
          this.$router.push({
            path: '/admin/products'
          })
        })
        .catch(() => {
          alert('登入失敗')
        })
    }
  }
}
</script>
