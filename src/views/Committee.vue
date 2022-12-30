<template>
  <div class="viewDiv Committee viewht scroll">
    <committee-tab-nav :tabs="['Organisation', 'Position', 'Members']" :selected="selected" @selected="setSelected">
      
      <committee-tab :isSelected="selected === 'Organisation'">
        <!-- <h3>Vicar Message</h3> -->
        <div class="vicar">
          <OrganisationCard/>
        </div>
      </committee-tab>

      <committee-tab :isSelected="selected === 'Position'">
        <!-- <h3>Assi-vicar1 Message</h3> -->
        <div class="vicar">
          <PositionCard/>
        </div>
      </committee-tab>

      <committee-tab :isSelected="selected === 'Members'">
        <!-- <h3>Assi-vicar2 Message</h3> -->
        <div class="vicar">
          <MembersCard/>
        </div>
      </committee-tab>

    </committee-tab-nav>
    <committee-tab/>
  </div>
  
</template>

<script>
import OrganisationCard from '@/components/Committe/Organisation/OrganisationCard.vue'
import PositionCard from '@/components/Committe/Position/PositionCard.vue'
import MembersCard from '@/components/Committe/Members/MembersCard.vue'
import CommitteeTab from '@/components/Committe/Tabs/CommitteeTab.vue'
import CommitteeTabNav from '@/components/Committe/Tabs/CommitteeTabNav.vue'

export default{
  name: 'Committee-',
  components: {
    CommitteeTab,
    CommitteeTabNav,
    OrganisationCard,
    PositionCard,
    MembersCard
},
  data() {
    return {
      selected: 'Organisation'
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




</style>













<!-- <template>
  <div class=" viewht scroll">

    <CommitteeCard/>

  </div>
</template>

<script>
import CommitteeCard from "@/components/Committe/CommitteeCard.vue";

export default {
  name: 'Committee-',
  components:{
    CommitteeCard
}
}

</script>

<style scoped>

.Committee{
    display: flex;
    justify-content: center;
    width: 100%;
}

.Committee{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
    background-size: cover;
    width: 100%;
    z-index: -99;
}


.announcement h4{
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;
}

.announcement span{
  margin: 6px;
}

.announcement .antop{
  display: flex;
  justify-content: space-between
}



</style> -->