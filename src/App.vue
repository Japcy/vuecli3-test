<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      res: ''
    }
  },
  mounted () {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser () {
      this.axios.get('user').then((res) => {
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res) => {
        this.$store.dispatch('saveCartNum', res)
      })
    }
  }
  // mounted () {
  //   this.axios.get('/user/login').then((res) => {
  //     this.res = res
  //   })
  // }
}
</script>
<style lang="scss">
@import './assets/sass/reset.scss';
@import './assets/sass/config.scss';
@import './assets/sass/button.scss';
</style>
