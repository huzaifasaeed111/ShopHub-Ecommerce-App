import {createStore} from 'vuex';
import axios from 'axios';
const store = createStore({
//    ########################## States ####################
  state:{
     products: [],
     SingleProduct:'',
     cart:[],
     categories:[],
     categProduct:[],
     
  },
//   ################################# Mutations ################
  mutations:{
     SET_ALL_PRODUCTS(state,AllProducts){
        state.products = AllProducts;
     },
     SET_SINGLE_PRODUCT(state,SingleProduct){
        state.SingleProduct= SingleProduct;
     },
     SET_PRODUCT_CATEGORIES(state,productCategories){
         state.categories=productCategories;
     },
     SINGLE_CATEGORY_PRODUCT(state,categProduct){
         state.categProduct=categProduct;
     },
     Add_To_Cart(state,{product,quantity}){
          let productInCart=state.cart.find(item=>{
               return item.product.id == product.id;
          });
          if(productInCart){
            productInCart.quantity += quantity;
            return;
          }
          state.cart.push({product,quantity});
     },
     REMOVE_PRODUCT_FROM_CART(state,product){
         state.cart= state.cart.filter(item=>{
           return item.product.id !== product.id;
         })
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

      GetProductCategories({commit}){
          axios.get('https://dummyjson.com/products/categories').
          then((response)=>{
             console.log(response.data,'-------');
             commit('SET_PRODUCT_CATEGORIES', response.data);
          })
      },

      SingleCategoryProduct({commit},id){
          axios.get(`https://dummyjson.com/products/category/${id}`).
          then((response)=>{
            console.log(response.data);
             commit('SINGLE_CATEGORY_PRODUCT',response.data.products);
          })
      },
      AddToCart({commit},{product,quantity}){
          commit('Add_To_Cart',{product,quantity});
      },
      removeProductFromCart({commit},product){
        commit('REMOVE_PRODUCT_FROM_CART',product);
      }
  },
  getters:{
     cartTotalPrice :(state)=>{
        let total=0;
        state.cart.forEach(item=>{
          total += item.product.price * item.quantity;
        })
        return total;
     }
  }
});

export default store;