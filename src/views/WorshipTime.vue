<template>
  <div class="viewDiv Workship  viewht scroll">
    <WorkshipTimeCard/>
  </div>
</template>

<script>
import WorkshipTimeCard from '@/components/WorkshipTime/WorkshipTimeCard.vue'

export default {
  name: 'WorkshipMain-',
  components:{
    WorkshipTimeCard
  }
}

</script>


<style scoped>

/* .Workship{
  display: flex;
  align-items: flex-start;
  width: 100%;
  background-size: cover;
  z-index: -99;
  background: #fff;
} */

</style>