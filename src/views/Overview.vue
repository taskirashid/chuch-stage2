<template>
  <div class=" viewht scroll">
    
    <CardCount/>

    <div class="news">

      <div class="announcement frontCard">
          <div class="antop">
            <h3>Announcement</h3>
            <a href="/AnnouncementPage">
              <div class="more">
                <h4>See all<span class="fas fa-chevron-circle-right"></span></h4>
              </div>
            </a>
          </div>
          <Announcement />
      </div>

      <div class="flashNews frontCard">
          <div class="antop">
            <h3>Flash News</h3>
            <a href="/FlashNews">
              <div class="more">
                <h4>See all<span class="fas fa-chevron-circle-right"></span></h4>
              </div>
            </a>
          </div>
          <FlashNews/>
      </div>

    </div>

    <div class="msg">
        <div class="antop">
          <h3>Aachen's Messages</h3>
          <a href="/AachensMsg">
            <div class="more">
              <h4>See all<span class="fas fa-chevron-circle-right"></span></h4>
            </div>
          </a>
        </div>
        <Aachans/>
    </div>

  </div>

</template>

<script>
import CardCount from '@/components/CardCount.vue'
import Announcement from '@/components/Announcement/Announcement.vue'
import Aachans from '@/components/Aachens/Aachens.vue'
import FlashNews from '@/components/FlashNews/FlashNews.vue'

export default {

  name: 'Overview-',
  components:{
    CardCount,
    Announcement,
    Aachans,
    FlashNews
  },
  
}
</script>


<style scoped>


.main{
  background: #fff!important;
}

.news{
  column-gap: 20px;
}

.frontCard{
  background: var(--off-white);
  padding: 2rem;
  margin-top: 3rem;
}

.msg{
  background: var(--main-color);
  padding: 2rem;
  margin-top: 3rem;
}


.announcement h4{
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;
}

.announcement span{
  margin: 6px;
}

.antop{
  display: flex;
  justify-content: space-between
}



.flashNews h4{
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;
}

.flashNews span{
  margin: 6px;
}

.flashNews .antop{
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 20px; */
}

.news{
  margin-bottom: 20px;
}

.msg .vicar{
  background: #fff;
}



@media (max-width: 1024px) {

  .news {
    display: block;
  }
  

}


@media (max-width: 650px) {

  .news {
    /* display: block; */
  }
  

}

</style>