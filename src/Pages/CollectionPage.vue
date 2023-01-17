<template>
    <div>
       <categoryButton/>
       <AllProducts/>
    </div>
</template>

<script>
import categoryButton from '@/components/categoryButton.vue';
import AllProducts from '@/components/AllProducts.vue';
   export default{
    name:'CollectionPage',
    components:{
        categoryButton,
        AllProducts
    },
   }
</script>

<style>

</style>