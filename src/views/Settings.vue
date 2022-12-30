<template>
  <div class="viewDiv settings viewht scroll">
    <settings-tab-nav :tabs="['TermsConditions', 'PrayerGroup', 'Relationship']" :selected="selected" @selected="setSelected">
      
      <settings-tab :isSelected="selected === 'TermsConditions'">
        <!-- <h3>Vicar Message</h3> -->
        <div class="vicar">
          <TermsConditions/>
        </div>
      </settings-tab>

      <settings-tab :isSelected="selected === 'PrayerGroup'">
        <!-- <h3>Assi-vicar1 Message</h3> -->
        <div class="vicar">
          <PrayerGroup/>
        </div>
      </settings-tab>

      <settings-tab :isSelected="selected === 'Relationship'">
        <!-- <h3>Assi-vicar2 Message</h3> -->
        <div class="vicar">
          <Relationship/>
        </div>
      </settings-tab>

    </settings-tab-nav>
    <settings-tab/>
  </div>
  
</template>

<script>
import TermsConditions from '@/components/Settings/TermsConditions/TermsConditions.vue'
import PrayerGroup from '@/components/Settings/PrayerGroup/PrayerGroup.vue'
import Relationship from '@/components/Settings/Relationship/Relationship.vue'
import SettingsTab from '@/components/Settings/Tabs/SettingsTab.vue'
import SettingsTabNav from '@/components/Settings/Tabs/SettingsTabNav.vue'

export default{
  name: 'Settings-',
  components: {
    SettingsTab,
    SettingsTabNav,
    TermsConditions,
    PrayerGroup,
    Relationship
},
  data() {
    return {
      selected: 'TermsConditions'
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

/* .settings{
  margin-top: 0px;
  padding: 18px 20px 24px 23px;
  background: #fff;
} */

</style>
