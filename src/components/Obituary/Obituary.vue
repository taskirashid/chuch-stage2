<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>22/02/2021</th>
                <td>Mark</td>
                <td>Description........</td>
              </tr>
              <tr>
                <th>22/02/2021</th>
                <td>Mark</td>
                <td>Description........</td>
              </tr>
              <tr>
                <th>22/02/2021</th>
                <td>Mark</td>
                <td>Description........</td>
              </tr>
              <tr>
                <th>22/02/2021</th>
                <td>Mark</td>
                <td>Description........</td>
              </tr>
              <tr>
                <th>22/02/2021</th>
                <td>Mark</td>
                <td>Description........</td>
              </tr>
              <tr>
                <th>22/02/2021</th>
                <td>Mark</td>
                <td>Description........</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Obituary-',
  components:{
  }
}

</script>


<style scoped>

.comp{
  padding-top: 8px;
    width: 100%;

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