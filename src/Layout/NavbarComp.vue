<template>
    <div class="container-fluid navigation">
        <div class="row">
            <!-- ############################ Logo ######################### -->
            <div class="col-3 logo p-3">
              <h3 class="logo-text"><i class="fa-brands fa-shopify"></i>&nbsp;ShopHub</h3>
            </div>
            <!-- ############################## Navbar Menus ##################### -->
            <div class="col-6 text-center mt-2 nav-menu p-3 mb-2">
                <li  class="d-inline p-3"><router-link to="/"><a href="#">Home</a></router-link></li>
                <li  class="d-inline p-3"><router-link to="/CollectionPage"><a href="#">Collections</a></router-link></li>
                <li  class="d-inline p-3"><router-link to="/AboutPage"><a href="#">About</a></router-link></li>
                <li  class="d-inline p-3"><router-link to="/ContactPage"><a href="#">Contact</a></router-link></li>
            </div>
            <!-- ############################## Navbar Icons ############################# -->
            <div class="col-3 icons-width p-3">
                <div class="row mb-2">
                    <div class="col-6 mt-2">
                      <router-link class="icon-route" to="/AccountPage">
                        <i class="fa-regular fa-user icon-color"></i>&nbsp;
                        <a href="#" class="account">Login</a>
                      </router-link>
                    </div>
                    <div class="col-6 mt-2">
                      <router-link class="icon-route" to="/CartPage">
                        <i class="fa-solid fa-cart-shopping icon-color"></i>&nbsp;
                         <a href="#" class="cart">Cart</a>
                      </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   export default{
    name:'NavbarComp',
   }
</script>

<style scoped>
.navigation{
    background-color: #f5f3f2;
    position: sticky;
    top:0;
    z-index: 1000;
  }
  .logo-text{
    color:#b8ae86;
    font-family: 'Dancing Script', cursive;
    font-weight: 1500;
  }
  .nav-menu li a{
    text-decoration: none;
    color: #b8ae86;
    font-size: 18px;
    font-weight: bold;
  }
  .nav-menu li a:hover{
    border-bottom: 2px solid #b8ae86;
  }
  .account, .cart{
    text-decoration: none;
    color: #b8ae86;
    font-weight: bold;
  }
  .icon-color{
    color:#b8ae86;
    font-weight: bold;
  }
  .icon-route{
     text-decoration: none;
  }
  @media screen and (max-width: 870px){
   .nav-menu li a{
    text-decoration: none;
    color: #b8ae86;
    font-size: 12px;
   }
  .nav-menu li a:hover{
    border-bottom: 1px solid #b8ae86;
   }
  .account, .cart{
    text-decoration: none;
    color: #b8ae86;
    font-size: 12px;
   }
  .icon-color{
    color:#b8ae86;
   }
  }
  @media screen and (max-width: 746px){
     .logo{
       display: block;
       width: 100%;
       text-align:center;
      }
      .nav-menu{
        width: 70%;
      }
     .icons-width{
        width: 30%;
      }
     .account, .cart{
       display: none;
      }
  }
  @media screen and (max-width: 479px){
      .logo-img{
       width:100px;
       height: 50px;
      }
      .nav-menu{
        width: 100%;
      }
     .icons-width{
        display: none;
      }
  }
  @media screen and (max-width: 338px){
      .nav-menu li a{
        font-size:8px;
      }
  }
</style>