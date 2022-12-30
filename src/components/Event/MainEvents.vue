<template>
    <div class="Committee">
  
      
      <div class="news">
  
        <div class="wptime">
          <h3>Events</h3>
          <div class="antop">
            <hr class="hrLine">
            <events/>
          </div>
        </div>
        
      </div>
  
    </div>
  </template>
  
<script>
import Events from '@/components/Event/Events.vue'
  
  export default {
    name: 'MainEvents-',
    components:{
        Events
    }
  }
  
  </script>
  
  <style scoped>

.wptime{
  /* padding: 18px 20px 24px 23px; */
  width: 100%;
  /* background: #fff; */
}
  
  hr{
    border: 0.1px solid #dddddd;
  }


  .news{
    width: 100%;
  }

  .Committee{
    width: 100%;
  }

  </style>