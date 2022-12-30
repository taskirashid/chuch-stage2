<template>
  <div class="viewDiv flashNews viewht scroll">
    <h3>Flash News</h3>

    <div class="bgann">
      <FlashNews/>
      <div class="divDate">
        <h6 class="date">02-12-2022</h6>
      </div>
    </div>

    <div class="bgann">
      <FlashNews/>
      <div class="divDate">
        <h6 class="date">30-11-2022</h6>
      </div>
    </div>

    <div class="bgann">
      <FlashNews/>
      <div class="divDate">
        <h6 class="date">15-11-2022</h6>
      </div>
    </div>

    <div class="bgann">
      <FlashNews/>
      <div class="divDate">
        <h6 class="date">22-10-2022</h6>
      </div>
    </div>

  </div>
</template>

<script>
import FlashNews from '@/components/FlashNews/FlashNews.vue'

export default {
  name: 'FlashNews-',
  components:{
    FlashNews
  }
}

</script>


<style scoped>

.bgann{
    /* background-color: #dddddd; */
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 15px;
  margin: 2rem 0rem 2rem 0rem;
}

/* .flashNews{
  margin: 0px 0px 0px 0px;
  padding: 18px 20px 24px 23px;
  width: -webkit-fill-available;
  background: #fff;
} */

.divDate{
  color: #707070;
  display: flex;
  justify-content: flex-end;
}

</style>