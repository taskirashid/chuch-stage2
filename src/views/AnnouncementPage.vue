<template>
  <div class="viewDiv announcement viewht scroll">
    <h3>Announcement</h3>
    <div class="bgann">
      <div class="tit-date">
        <h5>Title_1</h5>
        <h6 class="date">11-10-2022</h6>
      </div>
      <Announcement />
    </div>
    <div class="bgann">
      <div class="tit-date">
        <h5>Title_2</h5>
        <h6 class="date">22-09-2022</h6>
      </div>
      <Announcement />
    </div>
    <div class="bgann">
      <div class="tit-date">
        <h5>Title_3</h5>
        <h6 class="date">15-08-2022</h6>
      </div>
      <Announcement />
    </div>
    <div class="bgann">
      <div class="tit-date">
        <h5>Title_4</h5>
        <h6 class="date">30-07-2022</h6>
      </div>
      <Announcement />
    </div>

  </div>
</template>

<script>
import Announcement from '@/components/Announcement/Announcement.vue'

export default {
  name: 'AnnouncementPage-',
  components:{
    Announcement,
  }
}

</script>

<style scoped>

.bgann{
  border: 2px solid #c7c7c7;
  border-radius: 3px;
  padding: 15px;
  margin: 2rem 0rem 2rem 0rem;
}


.tit-date{
  display: flex;
  justify-content: space-between;
}

.date{
  color: #838383eb;
}

h5{
  color: var(--main-color);
  font-size: 15px;
  font-weight: 500;
}

</style>