<template>
<div>
   <h2>products List</h2>
   <ul>
     <li v-for="(product,i) in products" :key="i" >
       {{product.title}} - {{product.price}} - {{product.inventory}}
     </li>
   </ul>
</div>
</template>

<script>
import shop from '@/api/shop'
import store from '@/store/index'
export default {
  computed:{
    products(){
      return store.getters.avaiProducts
    }
  },
   created(){
     store.dispatch('fetchProducts')
   }
};
</script>

