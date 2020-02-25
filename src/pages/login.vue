<template>
  <div class="login">
    <div class="login-header">
      <div class="container">
        <a href="/#/index"><img src="/images/mi-logo1.png" alt=""/></a>
      </div>
    </div>
    <div class="login-wrapper">
      <div class="container">
        <div class="login-form">
          <h3 class="login-form-header">
            <span class="checked">账号登录</span><span class="sep-line">|</span
            ><span>扫码登录</span>
          </h3>
          <div class="input">
            <input
              type="text"
              v-model="username"
              placeholder="邮箱/手机号码/小米ID"
            />
          </div>
          <div class="input">
            <input type="password" v-model="password" placeholder="密码" />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login () {
      let { username, password } = this
      this.axios
        .post('/user/login', {
          username,
          password
        })
        .then(res => {
          this.$cookie.set('userId', res.id, { expires: '1M' })
          this.$store.dispatch('saveUserName', res.username)
          this.$router.push('/index')
        })
    },
    register () {
      this.axios
        .post('/user/register', {
          username: 'songyf',
          password: 'songyf'
        })
        .then(() => {
          alert('注册成功')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/sass/base.scss";
@import "./../assets/sass/config.scss";
@import "./../assets/sass/mixin.scss";
@import "./../assets/sass/button.scss";
.login {
  .login-header {
    .container {
      height: 113px;
      padding-top: 29px;
      padding-bottom: 32px;
      box-sizing: border-box;
      img {
        width: 200px;
        height: 50px;
      }
    }
  }
  .login-wrapper {
    background: url("/images/login-bg.jpg") no-repeat center;
    .container {
      height: 588px;
      position: relative;
      .login-form {
        width: 410px;
        height: 510px;
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        position: absolute;
        background-color: #fff;
        top: 37px;
        right: 0;
        .login-form-header {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .checked {
            color: #ff6600;
          }
          .sep-line {
            margin: 0 32px;
          }
        }
        .input {
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          input {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
            font-size: 14px;
          }
        }
        .btn-box {
          cursor: pointer;
          .btn {
            width: 100%;
            line-height: 50px;
            margin-top: 10px;
            font-size: 16px;
          }
        }

        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms {
            color: #ff6600;
          }
          .reg {
            color: #999999;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
}
</style>
