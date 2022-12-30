<template>
  <div>
  <input class="check" type="checkbox" id="nav-toggle">
    <div class="sidebar">
      <div class="sidebar-brand">
        <h1><span class="">Revive Haven Church</span></h1>
        
        <label for="nav-toggle">
            <span class="fa-solid fa-xmark"></span>
          </label>
      </div>

      <div class="sidebar-menu">
        <ul>
          <li class="router-link-blk">
            <router-link to="/overview">
              <i class="fas fa-archive"></i>
              <span>Overview</span>
            </router-link>
          </li>
          <li>
            <router-link to="/aachensMsg">
              <i class="fas fa-comment-alt"></i>     
              <span>Aachen's Messages</span>  
            </router-link>
          </li>
          <li>
            <router-link to="/parish">
              <i class="fas fa-place-of-worship"></i> 
              <span>Parish</span>  
            </router-link>
          </li>
          <li>
            <router-link to="/members">
              <i class="fas fa-users"></i>
              <span>Members</span> 
            </router-link>
          </li>
          <li>
            <router-link to="/committee">
              <i class="fas fa-users-cog"></i> 
              <span>Committee</span>  
            </router-link>
          </li>
          <li>
            <router-link to="/announcementPage">
              <i class="fas fa-bullhorn"></i>
              <span>Announcement</span>
            </router-link>
          </li>
          <li>
            <router-link to="/obituary">
              <i class="fas fa-book-dead"></i>
              <span>Obituary</span>  
            </router-link>
          </li>
          <li>
            <router-link to="/events">
              <i class="fas fa-list-alt"></i>
              <span>Events</span>  
            </router-link>
          </li>
          <li>
            <router-link to="/flashNews">
              <i class="fas fa-newspaper"></i>   
              <span>Flash News</span>  
            </router-link>
          </li>
          <li>
            <router-link to="/worshipTime">
              <i class="fas fa-clock"></i> 
              <span>Worship Time</span>  
            </router-link>
          </li>
          <li>
            <router-link to="/settings">
              <i class="fas fa-cogs"></i>
              <span>Settings</span>  
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>


<script>

export default {
  name: 'Sidebar-',
}

</script>

<style>

/* 
#nav-toggle:checked ~ .overview-blk {
  width: calc(100% - 70px);
  margin-left: 80px!important;
} */


.check{
  display: contents;
}


.sidebar{
  width: 280px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--main-color);
  box-shadow: 2px 0px 0px rgb(0 0 0 / 9%);
  z-index: 101;
  transition: width 300ms;
}

.sidebar-brand {
  display: flex;
  min-height: 77px;
  padding: 0.9rem 0rem 0.9rem 2rem;
  color: var(--font-white);
  min-width: 270px;
  align-items: center;
    justify-content: space-between;
}

.sidebar-brand h1{
  margin-top: 10px;
  display: flex;
}

.sidebar-brand label{
    display: flex;
    align-items: center;
    margin: 0px 15px 0px 15px;
    height: fit-content;
}

.sidebar-brand span {
  display: inline-block;
  color: var(--font-white);
  font-size: 2rem;
  font-weight: 600;
  font-variant-caps: small-caps;

}

.sidebar-menu li{
  width: 100%;
  /* margin-bottom: 1.3rem; */
  /* margin-left: 2rem; */
}

.sidebar-menu span {
    margin-left: 13px;
}

.sidebar-menu a{
  display: block;
  color: #363635;
  font-size: 1.4rem;
  font-weight: 400;
  padding-left: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.sidebar-menu ul{
  padding-left: 0px;
}

.sidebar-menu a{
    text-decoration: none;
}

.sidebar-menu a:hover{
    text-decoration: none;
}

/* .sidebar-menu a.active{ */
.sidebar-menu a.router-link-exact-active{
  background: #ebeced;
  color: #34363a;
  text-decoration: none;
  box-shadow: 0px 0px 2px 0px #ffffff;
  padding-left: 5rem;
  transition: .5s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.sidebar-menu a span:first-child{
  font-size: 1.5rem;
  padding-right: 1rem;
}

/* .sidebar-menu a.router-link-exact-active svg path{
  color: #5b67cd;
}

  */
  
.sidebar-menu li:nth-child(1) a.router-link-exact-active svg path{
  color: #5b67cd;
}
  
.sidebar-menu li:nth-child(2) a.router-link-exact-active svg path{
  color: #4f8fa7;
}
  
.sidebar-menu li:nth-child(3) a.router-link-exact-active svg path{
  color: #c7547a;
}
  
.sidebar-menu li:nth-child(4) a.router-link-exact-active svg path{
  color: #9d8d3f;
}
  
.sidebar-menu li:nth-child(5) a.router-link-exact-active svg path{
  color: #5b67cd;
}
  
.sidebar-menu li:nth-child(6) a.router-link-exact-active svg path{
  color: #4f8fa7;
}
  
.sidebar-menu li:nth-child(7) a.router-link-exact-active svg path{
  color: #c7547a;
}
  
.sidebar-menu li:nth-child(8) a.router-link-exact-active svg path{
  color: #9d8d3f;
}
  
.sidebar-menu li:nth-child(9) a.router-link-exact-active svg path{
  color: #5b67cd;
}
  
.sidebar-menu li:nth-child(10) a.router-link-exact-active svg path{
  color: #4f8fa7;
}
  
.sidebar-menu li:nth-child(11) a.router-link-exact-active svg path{
  color: #c7547a;
}



@media only screen and (max-width: 1200px){
  
    #nav-toggle:checked + .sidebar{
      width: 70px;
        padding-top: 78px;
    }

    #nav-toggle:checked + .sidebar .sidebar-brand,
    #nav-toggle:checked + .sidebar li{
      padding-left: 1rem;
      text-align: center;
    }

    #nav-toggle:checked + .sidebar li{
      padding-left: 0rem;
    }
    /* h1 span:last-child */
    #nav-toggle:checked + .sidebar .sidebar-brand,
    #nav-toggle:checked + .sidebar li a span:last-child{
      display: none;
    }

    #nav-toggle:checked + .sidebar .sidebar-brand h1 span{
      height: 0;
    }

    #nav-toggle:checked + .sidebar li a{
      padding-left: 0rem;
    }

    #nav-toggle:checked +  .main-content{
      transition: margin-left 300ms;
      margin-left: 345px;
    }
}


@media (min-width: 1024px) {
  .sidebar label{
    display: none;
  }
}


</style>