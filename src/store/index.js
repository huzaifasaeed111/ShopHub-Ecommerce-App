import {createStore} from 'vuex';
import axios from 'axios';
const store = createStore({
//    ########################## States ####################
  state:{
     products: [],
     SingleProduct:'',
     cart:[],
  },
//   ################################# Mutations ################
  mutations:{
     SET_ALL_PRODUCTS(state,AllProducts){
        state.products = AllProducts;
     },
     SET_SINGLE_PRODUCT(state,SingleProduct){
        state.SingleProduct= SingleProduct;
     },
     ADD_TO_CART(state,{ProductDetail}){
         state.cart.push({ProductDetail});
     }
  },
//   ############################## Actions ######################
  actions:{
    //   ________________________Get All Products_____________________

      GetAllProducts({commit}){
        axios.get('https://dummyjson.com/products').then((response)=>{
            commit("SET_ALL_PRODUCTS",response.data.products);
            console.log(response.data.products);
        });
      },
      async GetSingleProduct({commit},id){
      const response= await  axios.get(`https://dummyjson.com/products/${id}`);
      commit("SET_SINGLE_PRODUCT",response.data);

      },
       addProductToCart({commit}, {ProductDetail}){
               commit('ADD_TO_CART', {ProductDetail});
       }
  }
});

export default store;