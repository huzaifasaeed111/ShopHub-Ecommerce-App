<template>
    <div>
      <bannerComp/>
      <OfferComp/>
      <DummyProducts/>
    </div>
</template>

<script>
 import DummyProducts from '@/components/DummyProducts.vue';
import bannerComp from '@/components/bannerComp.vue';
 import OfferComp from '@/components/OfferComp.vue';
  export default{
    name:'HomePage',
    components:{
    bannerComp,
    OfferComp,
    DummyProducts
}
  }
</script>

<style>

</style>