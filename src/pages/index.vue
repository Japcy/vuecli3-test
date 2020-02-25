<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"><img :src="item.img"/></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
        <div class="site-category">
          <ul class="cate-wrap">
            <li class="cate-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="cate-children">
                <ul v-for="(item, i) in cateList" :key="i">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img :src="sub ? sub.img : cateimg1" alt="" />
                      <span>{{ sub.name || "小米9" }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="cate-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="cate-children"></div>
            </li>
            <li class="cate-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="cate-children"></div>
            </li>
            <li class="cate-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="cate-children"></div>
            </li>
            <li class="cate-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="cate-children"></div>
            </li>
            <li class="cate-item">
              <a href="javascript:;">耳机 音箱</a>
              <div class="cate-children"></div>
            </li>
            <li class="cate-item">
              <a href="javascript:;">电源 配件</a>
              <div class="cate-children"></div>
            </li>
            <li class="cate-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="cate-children"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="ads-box">
        <a
          v-for="(item, index) in adsList"
          :key="index"
          :href="'/#/product/' + item.id"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a :href="'/#/product/' + banner.id"
          ><img v-lazy="banner.img" alt=""
        /></a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2 class="title">手机</h2>
        <div class="product-wrapper">
          <div class="pro-left">
            <a href=""
              ><img v-lazy="'/images/pro-left/mix-alpha.jpg'" alt=""
            /></a>
          </div>
          <div class="pro-right">
            <ul class="pro-list" v-for="(list, i) in productsList" :key="i">
              <li class="pro-item" v-for="(item, j) in list" :key="j">
                <span class="tag" :class="j % 2 == 0 ? 'new' : ''">新品</span>
                <div class="pro-img">
                  <a :href="'/#/product/' + item.id"
                    ><img v-lazy="item.mainImage" alt=""
                  /></a>
                </div>
                <div class="pro-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">
                    {{ item.price }}元
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :show-modal="showModal"
      @submit="goToCart"
      @cancle="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import Modal from './../components/Modal'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    Modal
  },
  data () {
    return {
      cateimg1: '/images/cate-img/item-box-1.png',
      swiperOption: {
        loop: true, // 循环模式选项
        autoplay: true, // 设置为true启动自动切换，并使用默认的切换设置。
        effect: 'cube', // slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/images/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/images/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/images/slider/slide-3.jpg'
        },
        {
          id: '46',
          img: '/images/slider/slide-4.jpg'
        },
        {
          id: '46',
          img: '/images/slider/slide-5.jpg'
        }
      ],
      cateList: [
        [
          {
            id: 30,
            img: '/images/cate-img/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/images/cate-img/item-box-2.png',
            name: '小米CC9'
          },
          {
            id: 32,
            img: '/images/cate-img/item-box-3.jpg',
            name: '小米CC9'
          },
          {
            id: 33,
            img: '/images/cate-img/item-box-4.jpg',
            name: '小米CC9'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/images/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/images/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/images/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/images/ads/ads-4.jpg'
        }
      ],
      banner: {
        id: 30,
        img: '/images/banner/banner-1.png'
      },
      productsList: [],
      showModal: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.axios
        .get('/products', {
          params: {
            categoryId: 100012,
            pageSize: 8
          }
        })
        .then(res => {
          this.productsList = [res.list.slice(0, 4), res.list.slice(4, 8)]
        })
    },
    addCart (id) {
      this.showModal = true
    },
    goToCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/sass/base.scss";
@import "./../assets/sass/config.scss";
@import "./../assets/sass/mixin.scss";
.index {
  .container {
    .swiper-box {
      position: relative;
      .swiper-container {
        height: 451px;
        img {
          width: 100%;
          height: 100%;
        }
        .swiper-button-prev {
          left: 274px;
        }
      }
      .site-category {
        height: 451px;
        width: 264px;
        background-color: #55585a7a;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        box-sizing: border-box;
        padding: 26px 0 26px 0;
        font-size: $fontI;
        .cate-wrap {
          .cate-item {
            width: 100%;
            height: 50px;
            line-height: 50px;
            cursor: pointer;
            color: $colorG;
            a {
              display: block;
              margin-left: 30px;
              color: $colorG;
              position: relative;
              &::after {
                content: " ";
                position: absolute;
                right: 28px;
                width: 10px;
                top: 17.5px;
                height: 15px;
                background: url("./../assets/images/icon-arrow.png") no-repeat
                  center;
                background-size: contain;
                // @include bgImg(
                //   "10px",
                //   "15px",
                //   "./../assets/images/icon-arrow.png"
                // );
              }
            }
            &:hover {
              background-color: $colorA;
              .cate-children {
                display: block;
              }
            }
            .cate-children {
              display: none;
              box-sizing: border-box;
              width: 964px;
              height: 100%;
              background-color: $colorG;
              border: 1px solid $colorH;
              position: absolute;
              top: 0;
              left: 264px;
              ul {
                display: flex;
                justify-content: space-between;
                height: 75px;
                li {
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                  a {
                    font-size: $fontJ;
                    color: $colorB;
                  }
                  img {
                    width: 42px;
                    height: 45px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .ads-box {
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a {
        width: 296px;
        height: 167px;
      }
    }
    .banner {
      margin-bottom: 50px;
    }
  }
  .product-box {
    background-color: $colorH;
    .container {
      h2 {
        font-size: $fontF;
        height: 71px;
        color: $colorB;
        line-height: 71px;
      }
      .product-wrapper {
        height: 619px;
        margin-bottom: 50px;
        display: flex;
        .pro-left {
          width: 224px;
          margin-right: 16px;
        }
        .pro-right {
          .pro-list {
            @include flex();
            width: 986px;
            margin-bottom: 15px;
            &:last-child {
              margin-bottom: 0;
            }
            .pro-item {
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              .tag {
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: $colorG;
                &.new {
                  background-color: #7ecf68;
                }
                &.kill {
                  background-color: #e82626;
                }
              }
              .pro-img {
                img {
                  height: 147px;
                }
                margin: 24px 0;
              }
              .pro-info {
                h3 {
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p {
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto;
                  font-size: 12px;
                }
                .price {
                  color: #f20a0a;
                  font-size: $fontJ;
                  font-weight: bold;
                  cursor: pointer;
                  &::after {
                    content: "";
                    @include bgImg(22px, 22px, "/images/icon-cart-hover.png");
                    vertical-align: middle;
                    margin-left: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
