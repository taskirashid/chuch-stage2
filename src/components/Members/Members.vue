<template>
    <div class="comp">
        <div class="flash">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Edavaka register no</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{item.edavaka_register_no}}</th>
                <td>{{item.member_name}}</td>
              </tr>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{item.edavaka_register_no}}</th>
                <td>{{item.member_name}}</td>
              </tr>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{item.edavaka_register_no}}</th>
                <td>{{item.member_name}}</td>
              </tr>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{item.edavaka_register_no}}</th>
                <td>{{item.member_name}}</td>
              </tr>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{item.edavaka_register_no}}</th>
                <td>{{item.member_name}}</td>
              </tr>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{item.edavaka_register_no}}</th>
                <td>{{item.member_name}}</td>
              </tr>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{item.edavaka_register_no}}</th>
                <td>{{item.member_name}}</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Alex</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Jaison</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Thomas</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Members-',
    data(){
      return{
        list: [],
      }
    },
    
    async mounted() {
      let result = await axios.get("http://192.168.29.11:5000/member/getAllMember")
      // console.warn(result.data.member)
      this.list=result.data.member
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