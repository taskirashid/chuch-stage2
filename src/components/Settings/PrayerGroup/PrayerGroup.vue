<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Prayer Group</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Group_1</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Group_2</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Group_3</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Group_4</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Group_5</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'PrayerGroup-',
  components:{
  }
}

</script>


<style scoped>

.comp{
  padding-top: 8px;
}

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
    font-weight: 400;
    line-height: 2rem;
}


/* hr{
  border: 1px solid #dd9a2f;
} */

</style>