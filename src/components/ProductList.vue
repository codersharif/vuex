<template>
<div>
   <h2>products List</h2>
   <img v-if="loading" src="@/assets/img/loading.gif">
   <ul v-else>
     <li v-for="(product,i) in products" :key="i" >
       {{product.title}} - {{product.price}} - {{product.inventory}}
     </li>
   </ul>
</div>
</template>

<script>
import store from '@/store/index'
export default {
  data(){
    return{
      loading:false
    }
  },
  computed:{
    products(){
      return store.getters.avaiProducts
    }
  },
   created(){
     this.loading = true
     store.dispatch('fetchProducts')
     
     .than(() => this.loading = false)
   }
};
</script>

