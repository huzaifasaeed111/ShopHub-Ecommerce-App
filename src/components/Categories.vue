<template>
    <div class="container">
        <div class="row">
           <div class="col-12 text-center">
               <h1 class="product-header">All Products</h1>
           </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-4 text-center mb-3" v-for="product in AllProducts" :key="product.id">
                <div>
                  <img :src="product.thumbnail" class="img-fluid" alt="">
                </div>
                <h5>{{product.title}}</h5>
                <h5>{{product.price}}</h5>
                {{ product.id }}
                <router-link :to="{name:'ProductDetailPage', params:{id:product.id}}">
                  <button class="show-detail-btn">View Detail</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
   export default{
     name:'Categories'
   }
</script>

<style scoped>

</style>