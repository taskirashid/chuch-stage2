<template>
    <div class="Committee">
  
      
      <div class="news">
  
        <div class="wptime">
          <h3>Workship Time</h3>
          <div class="antop">
            <hr class="hrLine">
            <Workship />
          </div>
        </div>
        
      </div>
  
    </div>
  </template>
  
  <script>
  import Workship from "@/components/WorkshipTime/Workship.vue"
  
  export default {
    name: 'Workship-',
    components:{
      Workship
    }
  }
  
  </script>
  
  <style scoped>

.wptime{
  /* padding: 18px 20px 24px 23px; */
  width: 100%;
}
  
  hr{
    border: 0.1px solid #dddddd;
  }


  .news{
    width: 100%;
    height: calc(100vh - 200px);
  }

  .Committee{
    width: 100%;
  }

  </style>