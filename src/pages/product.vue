<template>
  <div class="">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="dv"></div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam'
export default {
  name: 'product',
  components: {
    ProductParam
  }
}
</script>

<style scoped>
.dv{
  height: 1000px;
}
</style>
