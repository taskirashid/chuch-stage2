<template>
    <div class="Committee">
  
      
      <div class="news ">
  
        <div class="committeeDiv">
          <!-- <h3>Prayer Group</h3> -->
          <div class="antop">
            <!-- <hr class="hrLine"> -->
            <Members/>
          </div>
          <hr>
        </div>
        
      </div>
  
    </div>
  </template>
  
  <script>
  import Members from "@/components/Committe/Members/Members.vue"
  
  export default {
    name: 'MembersCard-',
    components:{
      Members 
    }
  }
  
  </script>
  
  <style scoped>

  h5{
    color: var(--main-color);
  }
  
  hr{
    border: 0.1px solid #dddddd;
  }


  .news{
    width: 100%;
  }

.committeeDiv{
  /* padding: 18px 20px 24px 23px; */
  /* padding: 8px 20px 24px 23px; */
  width: 100%;
  /* background: #fff; */
}

  </style>