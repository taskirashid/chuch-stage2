<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Day</th>
                <th scope="col">Holyday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dec 24, 2022</td>
                <td>Saturday</td>
                <td>Christmas Eve</td>
              </tr>
              <tr>
                <td>Dec 25, 2022</td>
                <td>Sunday</td>
                <td>Christmas</td>
              </tr>
              <tr>
                <td>Dec 28, 2022</td>
                <td>Wednesday</td>
                <td>Holy Innocents</td>
              </tr>
              <tr>
                <td>Dec 31, 2022</td>
                <td>Saturday</td>
                <td>Watch Night</td>
              </tr>
              <tr>
                <td>Jan 06, 2023</td>
                <td>Friday</td>
                <td>Epiphany</td>
              </tr>
              <tr>
                <td>Jan 08, 2023</td>
                <td>Sunday</td>
                <td>The Baptism of Jesus</td>
              </tr>
              <tr>
                <td>Feb 02, 2023</td>
                <td>Thursday</td>
                <td>Candlemas</td>
              </tr>
              <tr>
                <td>Feb 14, 2023</td>
                <td>Tuesday</td>
                <td>St. Valentine's Day</td>
              </tr>
              <tr>
                <td>Feb 22, 2023</td>
                <td>Wednesday</td>
                <td>Ash Wednesday</td>
              </tr>
              <tr>
                <td>Mar 17, 2023</td>
                <td>Friday</td>
                <td>St. Patrick's Day</td>
              </tr>
              <tr>
                <td>Mar 19, 2023</td>
                <td>Sunday</td>
                <td>St. Joseph's Day</td>
              </tr>
              <tr>
                <td>Apr 02, 2023</td>
                <td>Sunday</td>
                <td>Palm Sunday</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Events-',
  components:{
  }
}

</script>


<style scoped>


h5{
    color: var(--main-color);
  }

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