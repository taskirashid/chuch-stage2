<template>
    <div>
        
        <div class="msgs-combo">


          <div class="vicar Left">
            <MsgCard/>
          </div>
          <div class="vicar Right">
            <MsgCard/>
          </div>


        </div>
    </div>
</template>

<script>
import MsgCard from '@/components/Aachens/MsgCard.vue'

export default {
  name: 'Aachans-',
  components:{
    MsgCard
  }
}

</script>


<style scoped>





.more h4 svg{
  margin-left: 7px;
}


.msg .msgs-combo{
  display: flex;
  column-gap: 20px;
}

.msg .vicar{
  justify-content: space-between;
    width: -webkit-fill-available;
  padding: 2rem;
  border-radius: 2px;
  color: var(--color-dark);
  margin-top: 18px;
  background-color: #f5f5f5;
}


.msg h4{
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;
}

.msg span{
  margin: 6px;
}

.msg .antop{
  display: flex;
  justify-content: space-between
}



@media (max-width: 650px) {
  
  .msg .msgs-combo{
    display: block!important;
  }

}



</style>