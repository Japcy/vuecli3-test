<template>
  <div class="nav-bar" :class="{ 'is-fixed': isFixed }">
    <div class="container">
      <div class="pro-title">
        小米8 透明探索版
      </div>
      <div class="pro-param">
        <a href="">概述</a>
        <span></span>
        <a href="">参数</a>
        <span></span>
        <a href="">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight () {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      console.log(scrollTop)
      this.isFixed = scrollTop > 152
    }
  },
  destroyed () {
    window.addEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/sass/base.scss";
@import "./../assets/sass/config.scss";
@import "./../assets/sass/mixin.scss";
@import "./../assets/sass/button.scss";
.nav-bar {
  &.is-fixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px $colorE;
  }
  .container {
    height: 70px;
    border-top: 1px solid #e5e5e5;
    @include flex();
    .pro-title {
      font-size: 18px;
      color: #333333;
      font-weight: 700;
    }
    .pro-param {
      a {
        font-size: 14px;
        color: #333;
        margin-right: 10px;
      }
      span {
        height: 11px;
        border-left: 1px solid #333;
        margin-right: 10px;
      }
    }
  }
}
</style>
