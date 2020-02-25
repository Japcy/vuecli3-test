<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="./../assets/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">MIUI</a><span>|</span> <a href="javascript:;">米家</a><span>|</span>
      <a href="javascript:;">米聊</a><span>|</span> <a href="javascript:;">多看</a><span>|</span>
      <a href="javascript:;">游戏</a><span>|</span> <a href="javascript:;">音乐</a><span>|</span>
      <a href="javascript:;">路由器</a><span>|</span> <a href="javascript:;">米粉卡</a><span>|</span>
      <a href="javascript:;">政企服务</a>
    </div>
    <div class="copyright">copyright精通vue</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: auto;
    }
    p {
      color: #999999;
      margin-top: 13px;
    }
  }
  .footer-link {
    a {
      color: #999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright{
    margin-top: 10px;
  }
}
</style>
