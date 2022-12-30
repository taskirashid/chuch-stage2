<template>
    <div class="comp">
        <div class="flash">
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a voluptatem magni consequuntur perferendis vitae debitis commodi nobis vero praesentium? Consectetur recusandae eius maxime facilis hic suscipit nobis alias accusamus.</h6>
          <!-- <hr> -->
        </div>
    </div>
</template>

<script>

export default {
  name: 'Announcement-',
  components:{
  }
}

</script>


<style scoped>

/* .comp{ */
  /* padding-top: 1px; */
/* } */

.flash{
    display: block;
    justify-content: space-between;
    /* padding: 2rem; */
    border-radius: 2px;
    color: var(--color-dark);
    /* margin-top: 5px; */
}

.flash h6{
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2rem;
}

/* hr{
  border: 1px solid #dd9a2f;
} */

</style>