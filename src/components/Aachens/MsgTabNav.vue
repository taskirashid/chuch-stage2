<template>
    <div>
      <ul class="nav nav-tabs">
        <li v-for="tab in tabs" :key="tab" class="nav-item">
          <a class="nav-link" :class="{ active: tab === selected }" @click="setTab(tab)">
            {{ tab }}
          </a>
        </li>
      </ul>
      <slot></slot>
    </div>
    
  </template>
  
  <script>
  export default{
    props:{
      tabs: {
        type: Array,
        required: true,
      },
      selected: {
        type: String,
        required: true,
      }
    },
    methods: {
      setTab(tab) {
        this.$emit('selected', tab);
      }
    }
  }
  
  </script>
  
  <style scoped>
/* sidebar-menu a.router-link-exact-active */

/* router-link-exact-active router-link-active */

/* nav-link active */

  /* .active{
    color: #9997e7!important;
    border-bottom: 1px solid var(--main-color);
    background: #c5cbff;
  }
  .nav-link{
    color: #9997e7;
    font-weight: 500;
  } */

  
  </style>
  
  
  
  
  