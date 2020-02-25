<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">金融</a>
          <a href="javascript:;">有品</a>
          <a href="javascript:;">小爱开放平台</a>
          <a href="javascript:;">企业团购</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="userName">{{ userName }}</a>
          <a href="javascript:;" v-if="!userName" @click="login">登录</a>
          <a href="javascript:;" v-if="userName">我的订单</a>
          <a href="javascript:;" v-if="!userName">注册</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>
            购物车({{cartCount}})</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <div class="ul">
                <li
                  class="product"
                  v-for="(item, index) in productsList"
                  :key="index"
                >
                  <a :href="'/#/products/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <div class="ul">
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <div class="ul">
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=200&h=138"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=200&h=138"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=200&h=138"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=200&h=138"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=200&h=138"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=200&h=138"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" placeholder="小米9 小米9 SE" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      productsList: []
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  computed: {
    userName () {
      return this.$store.state.username
    },
    cartCount () {
      return this.$store.state.cartCount
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 6
        }
      }).then((res) => {
        this.productsList = res.list
      })
    },
    goToCart () {
      this.$router.push('/cart')
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./../assets/sass/base.scss";
@import "./../assets/sass/mixin.scss";
@import "./../assets/sass/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        font-size: 12px;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        text-align: center;
        background-color: #ff6600;
        color: #fff;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, "./../assets/images/icon-cart.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex();
      // background-color: pink;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: "";
            @include bgImg(55px, 55px, "./../assets/images/mi-logo.png");
            transition: margin 0.2s;
          }
          &::after {
            content: "";
            @include bgImg(55px, 55px, "./../assets/images/mi-home.png");
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        padding-left: 209px;
        width: 644px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
              z-index: 100;
            }
          }
          .children {
            position: absolute;
            background-color: #fff;
            top: 112px;
            left: 0;
            height: 0;
            opacity: 0;
            width: 1226px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            overflow: hidden;
            transition: all 0.5s;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: $fontK;
              line-height: 12px;
              text-align: center;
              background-color: #fff;
              position: relative;
              &::before {
                content: "";
                position: absolute;
                border-right: 1px solid #d7d7d7;
                height: 99px;
                top: 28px;
                right: 0;
              }
              &:last-child::before {
                border: none;
              }
              a {
                display: inline-block;
                .pro-img {
                  img {
                    width: auto;
                    height: 111px;
                    margin-top: 26px;
                  }
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: #333;
                }
                .pro-price {
                  color: $colorA;
                }
              }
            }
          }
        }
      }
      .header-search {
        width: 318px;

        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            width: 263px;
            height: 50px;
            border: none;
            border-right: 1px solid #e0e0e0;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            @include bgImg(18px, 18px, "./../assets/images/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
