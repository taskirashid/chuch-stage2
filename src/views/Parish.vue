<template>
  <div class="viewDiv Parish viewht scroll">
    <parish-tab-nav :tabs="['Details', 'History']" :selected="selected" @selected="setSelected">
      <parish-tab :isSelected="selected === 'Details'">
        <!-- <h3>Vicar Message</h3> -->
        <div class="vicar">
          <ParishDetails/>
          <ParishImage/>
        </div>
      </parish-tab>
      <parish-tab :isSelected="selected === 'History'">
        <!-- <h3>Assi-vicar1 Message</h3> -->
        <div class="vicar">
          <HistoryCard/>
        </div>
      </parish-tab>
    </parish-tab-nav>
  </div>
  
</template>

<script>
import ParishTab from '@/components/ParishComp/ParishTab.vue'
import ParishTabNav from '@/components/ParishComp/ParishTabNav.vue'
import ParishDetails from '@/components/ParishComp/ParishDetails.vue'
import ParishImage from '@/components/ParishComp/ParishImage.vue'
import HistoryCard from '@/components/ParishComp/HistoryCard.vue'

export default{
  name: 'Parish-',
  components: {
    ParishTabNav,
    ParishTab,
    ParishDetails,
    ParishImage,
    HistoryCard
},
  data() {
    return {
      selected: 'Details'
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    }
  }

}

</script>

<style>
/* .Parish{
  margin-top: 0px;
  padding: 18px 20px 24px 23px;
  background: #fff;
} */


/* .Parish{
  margin-top: 0px;
  align-items: center;
  width: 100%;
  padding: 35px 20px 24px 23px;
  background: #fff;
    display: block;
    margin-left: 0px;
    margin-right: 0px;
    background-size: cover;
    z-index: -99;
} */

</style>







<!-- <template>
  <div class="Parish viewht scroll">
    <div class="fst">
      <parish-details/>
      <parish-image/>
    </div>
  </div>
</template>

<script>
import ParishDetails from '@/components/ParishComp/ParishDetails.vue'
import ParishImage from '@/components/ParishComp/ParishImage.vue'

export default {
  name: 'Parish-',
  components:{
    ParishDetails,
    ParishImage,
  }
}

</script>

<style scoped>

.Parish{
  margin-top: 0px;
  align-items: center;
  width: 100%;
  padding: 35px 20px 24px 23px;
  background: #fff;
    display: block;
    margin-left: 0px;
    margin-right: 0px;
    background-size: cover;
    z-index: -99;
}
 
  

</style> -->