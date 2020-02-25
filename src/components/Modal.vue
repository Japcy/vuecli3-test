<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancle')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('cancle')">{{cancleText}}</a>
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancle')">{{cancleText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    // 弹框类型
    modalType: {
      type: String,
      default: 'form'
    },
    // 弹框标题
    title: String,
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancleText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/sass/mixin.scss";
@import "./../assets/sass/config.scss";
@import "./../assets/sass/modal.scss";
</style>
