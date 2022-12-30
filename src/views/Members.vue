<template>
  <div class="viewDiv Members viewht scroll">
    <Members/>
  </div>
</template>

<script>
import Members from '@/components/Members/Members.vue'

export default {
  name: 'WorkshipMain-',
  components:{
    Members
  }
}

</script>


<style scoped>

/* .Members{
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 25px;
  background-size: cover;
  z-index: -99;
  background: #fff;
} */

</style>