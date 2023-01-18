<template>
   <div class="container mt-5" >
       <div class="row" >
           <div class="col-12 text-center mb-5">
                <p class="head-text h2">Products</p>
           </div>
       </div>
       <div class="row text-center">
          <div class="col-lg-4 mb-3"  v-for="product in catProducts" :key="product.id">
             <div class="col-12">
                 <img :src="product.thumbnail" class="img-fluid img-style" alt="">
                 <p class="h5">{{product.title}}</p>
                 <p class="h5">{{product.price}}</p>
             </div>
             <div class="col-12">
                <router-link :to="{name:'ProductDetailPage', params:{id:product.id}}">
                    <button class="show-detail-btn">View Detail</button>
                </router-link>
             </div>
          </div>
       </div>
   </div>
</template>

<script>
   export default{
      name:'CategoryPage',
      props:['id'],
      mounted(){
         this.$store.dispatch('SingleCategoryProduct',this.$route.params.id);
       },
       computed:{
          catProducts(){
            return this.$store.state.categProduct;
          },
       },
      

   }
</script>

<style scoped>
.show-detail-btn{
    background-color: white;
    padding: 10px;
    font-size: 20px;
    font-family: 'Dancing Script', cursive;
}
.show-detail-btn:hover{
    background-color: #5f5b4c;
    color: white;
}
.head-text{
    display: inline;
    border-bottom: 5px solid #5f5b4c;
}
.img-style{
     width: 300px;
     height: 300px;
}
</style>