<template>
  <div class="viewDiv msg viewht scroll">
    <msg-tab-nav :tabs="['Vicar', 'Assi-vicar1', 'Assi-vicar2']" :selected="selected" @selected="setSelected">
      <msg-tab :isSelected="selected === 'Vicar'">
        <!-- <h3>Vicar Message</h3> -->
        <div class="vicar">
          <MsgCard/>
        </div>
      </msg-tab>
      <msg-tab :isSelected="selected === 'Assi-vicar1'">
        <!-- <h3>Assi-vicar1 Message</h3> -->
        <div class="vicar">
          <MsgCard/>
        </div>
      </msg-tab>
      <msg-tab :isSelected="selected === 'Assi-vicar2'">
        <!-- <h3>Assi-vicar2 Message</h3> -->
        <div class="vicar">
          <MsgCard/>
        </div>
      </msg-tab>
    </msg-tab-nav>
  </div>
  
</template>

<script>
import MsgTab from '@/components/Aachens/MsgTab.vue'
import MsgTabNav from '@/components/Aachens/MsgTabNav.vue'
import MsgCard from '@/components/Aachens/MsgCard.vue'

export default{
  components: { 
    MsgTabNav, 
    MsgTab,
    MsgCard
  },
  data() {
    return {
      selected: 'Vicar'
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

.main{
  background: var(--off-white)!important;
}



/* .msg{
  margin-top: 0px;
  padding: 18px 20px 24px 23px;
  background: #fff;
} */

</style>





















<!-- <template>
  <div class="msg viewht scroll">

        <div class="antop">
          <h3>Aachen's Messages</h3>
        </div>
        
        <div class="vicar">
          <MsgCard/>
        </div>
        <div class="vicar">
          <MsgCard/>
        </div>
        <div class="vicar">
          <MsgCard/>
        </div>

  </div>
</template>

<script>
import MsgCard from '@/components/Aachens/MsgCard.vue'

export default {
  name: 'AachensMsg-',
  components:{
    MsgCard,
  },
  
}

</script>

<style scoped>

.msg{
  margin-top: 0px;
  padding: 18px 20px 24px 23px;
  background: #fff;
}


</style> -->