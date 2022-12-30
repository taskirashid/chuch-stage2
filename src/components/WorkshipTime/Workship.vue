<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <tbody>
              <h5>Sunday</h5>
              <tr>
                <td>5.45am</td>
                <td>7am</td>
                <td>8.45am</td>
                <td>10.15am</td>
                <td>4.30pm</td>
                <td>5.30pm</td>
                <td>7.00pm</td>
              </tr>
              <br>
              <h5>Weekdays ( Monday-Thursday )</h5>
              <tr>
                <td>6am</td>
                <td>7am </td>
                <td>6pm </td>
              </tr>
              <br>
              <h5>Friday</h5>
              <tr>
                <td>6am </td>
                <td>7am</td>
                <td>12pm </td>
                <td>6pm</td>
              </tr>
              <br>
              <h5>First Friday</h5>
              <tr>
                <td>5.45am </td>
                <td>7am </td>
                <td>9am </td>
                <td>10.30am </td>
                <td>12pm</td>
                <td>3.30pm</td>
                <td>5pm </td>
                <td>7pm</td>
              </tr>
              <br>
              <h5>Saturday</h5>
              <tr>
                <td>6am </td>
                <td>7am </td>
                <td>6pm </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Committee-',
  components:{
  }
}

</script>


<style scoped>


h5{
    color: var(--multi-charcol);
  }

.comp{
  padding-top: 8px;
  
  padding-bottom: 10px;
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

tr{
  display: flex;
  column-gap: 30px;
}

td{
  font-weight: 500;
  /* margin: 0px 15px 0px 15px; */
  border: 1.5px solid var(--multi-charcol)!important;
  border-radius: 4px;
}


/* hr{
  border: 1px solid #dd9a2f;
} */



@media (max-width: 650px) {
 
 
  tr{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 26px;
  }

}


</style>


