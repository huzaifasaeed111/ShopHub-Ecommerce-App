<template>
     <div>
        <h1>{{this.id}}</h1>
     </div>
<div class="container-styling">
    <div class="container mt-3 ">
        <div class="row mb-3" >
            <div class="col-lg-4 text-center">
                <img :src="ProductDetail.thumbnail" class="img-fluid img-styling" alt="">
            </div>
            <div class="col-lg-8 text-center mt-3">
                <h2>{{ProductDetail.title}}</h2>
                <h3>{{ProductDetail.price}}</h3>
                <p>{{ProductDetail.description}}</p>
                <div class="text-center">
                    <router-link to="/CartPage">
                        <button class="cart-btn" @click="AddToCart()" >Add To Cart</button>
                    </router-link>
                
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
   export default{
     
     props:['id'],
     data(){
       return{
        quantity:1,
       }
     },
    
     computed:{
         ProductDetail(){
             return this.$store.state.SingleProduct;
         }
     },
     mounted(){
        console.log(this.$route.params.id);
        
        this.$store.dispatch('GetSingleProduct',this.$route.params.id);
     },
     methods:{
        AddToCart(){
             this.$store.dispatch('AddToCart',{product:this.ProductDetail, quantity:this.quantity});
        }
     }
   }
</script>

<style scoped>
     .cart-btn{
        background-color: white;
        color: rgb(110, 84, 50);
        padding: 5px;
        width: 300px;
        font-family: 'Dancing Script', cursive;
        font-size: 20px;
     }
     .cart-btn:hover{
        background-color: rgb(209, 198, 185);
        color: black;
     }
     .container-styling{
         margin-top: 100px;
         margin-bottom: 200px;
         border: 2px solid rgb(110, 84, 50);
         margin-bottom: 100px;
     }
     .img-styling{
        height: 300px;
     }
</style>