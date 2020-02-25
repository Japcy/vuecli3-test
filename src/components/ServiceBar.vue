<template>
  <div class="service-bar">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span><a href="#">预约维修服务</a></li>
        <li><span class="icon-7day"></span><a href="#">7天无理由退货</a></li>
        <li><span class="icon-15day"></span><a href="#">15天免费换货</a></li>
        <li><span class="icon-post"></span><a href="#">满150元包邮</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-bar'
}
</script>

<style lang="scss" scoped>
@import "./../assets/sass/base.scss";
@import "./../assets/sass/mixin.scss";
.service-bar {
  .container {
    font-size: 16px;
    text-align: center;
    height: 80px;
    padding: 33px 0 32px 0;
    box-sizing: border-box;
    li {
      display: inline-block;
      width: 24.9%;
      border-right: 1px solid #e5e5e5;
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: top;
        margin-right: 8px;
      }
      .icon-setting {
        @include bgImg("20px", "20px", "./../assets/images/icon-setting.png");
      }
      .icon-7day{
        @include bgImg("20px", "20px", "./../assets/images/icon-7day.png");
      }
      .icon-15day{
        @include bgImg("20px", "20px", "./../assets/images/icon-15day.png");
      }
      .icon-post{
        @include bgImg("20px", "20px", "./../assets/images/icon-post.png");
      }
      a{
        color:#666666;
      }
    }
  }
}
</style>
