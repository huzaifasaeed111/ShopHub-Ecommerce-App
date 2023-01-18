import { createWebHashHistory,createRouter } from "vue-router";
import HomePage from './Pages/HomePage.vue';
import CollectionPage from './Pages/CollectionPage.vue';
import AboutPage from './Pages/AboutPage.vue';
import ContactPage from './Pages/ContactPage.vue';
import ProductDetailPage from './Pages/ProductDetailPage.vue';
import AllProducts from './components/AllProducts.vue';
import AccountPage from './Pages/AccountPage.vue';
import CartPage from './Pages/CartPage.vue';
import CategoryPage from './Pages/CategoryPage';

const routes = [
    {
      name: 'HomePage',
      path: '/',
      component:HomePage
    },
    {
        name:'CollectionPage',
        path:'/CollectionPage',
        component:CollectionPage
    },
    {
        name:'AboutPage',
        path:'/AboutPage',
        component:AboutPage
    },
    {
        name:'ContactPage',
        path:'/ContactPage',
        component:ContactPage
    },
    {
        name: 'ProductDetailPage',
        path:'/ProductDetailPage/:id',
        component:ProductDetailPage
    },
    {
        name: 'AllProducts',
        path:'/AllProducts',
        component:AllProducts
    },
    {
        name: 'AccountPage',
        path: '/AccountPage',
        component:AccountPage
    },
    {
        name: 'CartPage',
        path:'/CartPage',
        component:CartPage
    },
    {
        name: 'CategoryPage',
        path:'/CategoryPage/:id',
        component:CategoryPage 
    }
];

const router = createRouter({
     history: createWebHashHistory(),
     routes,
});
export default router;