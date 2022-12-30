<template>
    <div>
      
      <Sidebar/>
      <Topbar/>

    </div>
</template>

<script>
import Sidebar from '@/components/Navbar/Sidebar.vue';
import Topbar from '@/components/Navbar/Topbar.vue';

export default {
  name: 'navbar-',
  components:{
    Sidebar,
    Topbar

  }
}
</script>

<style>

 
/* @media (max-width: 650px) {
  .sidebar{
    display: none;
  }
  .scroll {
    margin-left: 0.5rem!important;
    margin-right: 0.5rem;
  }
  header {
    box-shadow: 0px 2px 0px rgb(0 0 0 / 9%);
    left: 0px;
    width: 100%;
  }
  .main-content label {
    font-size: 2rem;
    font-weight: 500;
  }
  .user-wrapper img {
    width: 34px;
  }
}  */

</style>