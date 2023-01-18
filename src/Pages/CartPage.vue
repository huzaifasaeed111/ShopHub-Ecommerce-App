<template>
  <section class="h-100 mt-3" style="background-color: #eee;">
    <div class="container h-100 py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10">
  
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
          </div>
  
          <div class="card rounded-3 mb-4">
            <div class="card-body p-4">
              <div class="row d-flex justify-content-between align-items-center"
                v-for="item in cart" :key="item.product.id">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img class="img-fluid rounded-3" :src="item.product.thumbnail" alt="Cotton T-shirt">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <p class="lead fw-normal mb-2">{{item.product.title}}</p>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  {{ item.quantity }}
  
            
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 class="mb-0">{{item.product.price}}</h5>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end" @click.prevent="removeProductFromCart(item.product)">
                  <a href="#" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                </div>
                <hr>
              </div>
            </div>
          </div>
  
          <div class="card">
            <div class="text-center">
                 <p class="h3">Total: ${{cartTotalPrice}}</p>
            </div>
            <router-link to="/okPage">
            <div class="card-body text-center mb-3">
              <button type="button" class="pay-btn btn-block btn-lg">Proceed to Pay</button>
            </div>
          </router-link>
            <router-link to="/CollectionPage">
            <div class="card-body text-center">
              <button type="button" class="pay-btn btn-block btn-lg">add more</button>
            </div>
          </router-link>
          </div>
  
        </div>
      </div>
    </div>
  </section>
</template>

<script>
   export default{
      name:'CartPage',
      computed:{
         cart(){
            return this.$store.state.cart;
         },
         cartTotalPrice(){
          return this.$store.getters.cartTotalPrice;
         }
      },
      methods:{
        removeProductFromCart(product){
          this.$store.dispatch('removeProductFromCart',product);
        }
      }
   }
</script>

<style scoped>
   .pay-btn{
      background-color: white;
      border: 2px solid black;
      color:rgb(138, 107, 66);
      padding:10px;
      border-radius: 30px;
   }
</style>