<template>
    <div>
      <bannerComp/>
      <OfferComp/>
      <ProductCategories/>
    </div>
</template>

<script>
    import bannerComp from '@/components/bannerComp.vue';
    import OfferComp from '@/components/OfferComp.vue';
    import ProductCategories from '@/components/ProductCategories.vue';
  export default{
    name:'HomePage',
    components:{
    bannerComp,
    OfferComp,
    ProductCategories
}
  }
</script>

<style>

</style>