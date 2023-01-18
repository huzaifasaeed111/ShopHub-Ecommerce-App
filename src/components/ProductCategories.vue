<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-12 text-center">
                <p class="h2 head-text">Products Categories</p>
            </div>
        </div>

        <div class="row mt-5 text-center">
              <div class="col-lg-2 col-sm-12" v-for="category in Categ" :key="category">
                 <div class=" text-center">
                <router-link class="Btn-cat" :to="{name:'CategoryPage', params:{id:category}}">

                        <button class="categ-btn d-block w-100">{{category}}</button>
                    </router-link>
                </div>
              </div>
        </div>

        <div class="row m-3">
            <div class="col-12 text-center">
              <router-link to="/CollectionPage">
                <button class="see-btn">See All Products</button>
              </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ProductCategories',
       mounted(){
         this.$store.dispatch('GetProductCategories');
       },
       computed:{
          Categ(){
            return this.$store.state.categories;
          },
       },
    }
</script>

<style scoped>
    .head-text{
       display: inline;
       border-bottom: 5px solid #b8ae86;
       font-family: 'Dancing Script', cursive;
    }
    .categ-btn{
        background-color: white;
        color: black;
        font-family: 'Dancing Script', cursive;
        border: 2px solid #b8ae86;
        padding: 7px;
        font-size: 20px;
        margin-top: 7px;
        border-radius: 30px;
        box-shadow: 5px 5px #b8ae86;
    }
    .categ-btn:hover{
        background-color: #c5b883;
    }
    .see-btn{
        background-color: white;
        color: black;
        border: 2px solid #0c0c0c;
        padding: 7px;
        font-size: 20px;
        font-family: 'Dancing Script', cursive;
        width: 300px;
        font-weight: bold;
        border-radius: 30px;
    }
    .see-btn:hover{
        background-color: #c5b883;
    }
    .Btn-cat{
        text-decoration: none;
    }
</style>