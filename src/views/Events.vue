<template>
  <div class="viewDiv Events viewht scroll">
    <MainEvents/>
  </div>
</template>

<script>
import MainEvents from '@/components/Event/MainEvents.vue'

export default {
  name: 'Events-',
  components:{
    MainEvents
  }
} 

</script>



<style scoped>

/* .Events{
  margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: white;
}
.Events{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
    background-size: cover;
    z-index: -99;
} */
.Events h3{
  color: white;
}

</style>