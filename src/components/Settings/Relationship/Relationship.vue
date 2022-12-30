<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Relationship</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Father</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mother</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>GrandFather</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>GrandMother</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Son</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Daughter</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Husband</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Wife</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Brother</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Sister</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>Daughter in law</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>Son in law</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Relationship-',
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