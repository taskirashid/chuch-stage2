<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Organisation</th>
                <th scope="col">Position</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">phone No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <!-- <td v-for='organisation in organisations' v-bind:key="organisation.id">{{organisation}}</td> -->
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark@gmail.com</td>
                <td>9966221186</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Jacob</td>
                <td>Jacob</td>
                <td>Jacob@gmail.com</td>
                <td>9966221186</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>John</td>
                <td>John</td>
                <td>John@gmail.com</td>
                <td>9966221186</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Jaison</td>
                <td>Jaison</td>
                <td>Jaison</td>
                <td>Jaison@gmail.com</td>
                <td>9966221186</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Thomas</td>
                <td>Thomas</td>
                <td>Thomas</td>
                <td>Thomas@gmail.com</td>
                <td>9966221186</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Members-',
  props: {
    msg: String
  },
  data(){
    return{
      // organisation: '',
      // organisations: ['1','2','3'],
      // organisations: ['4','5','6'],
      // organisations: ['7','8','9'],
    }
  },
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