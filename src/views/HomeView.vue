<template>
  <main>
    <div class="row">
      <div class="col-md-3 sidebar">
        <div class="heading-title">
          <div class="detail-sidebar"></div>
          <h1 class="header-title mt-2">Sinau Coding</h1>  
        </div>
        <div class="profile">
          <img class="profile-image" src="../assets/images/pexels-photo-2379004 2.svg" alt="profile-picture">  
        </div>
        <div class="detail-user">
          <p class="name-user">Albar Muhammad</p>
          <p class="type-user">Admin</p>
        </div>
        <div class="sidebar-menu">
          <button class="menu-list">
            <icon-home/>
            <p class="m-2">
              Home
            </p>
          </button>
        </div>
        <div class="sign-out">
          <button class="btn-sign-out">
            <span class="m-2">
              Log out
            </span>
            <icon-sign-out/>
          </button>
        </div>
      </div>
      <div class="col-md-9 mainside">
        <navbar/>
        <main-content/>
      </div>
    </div>
  </main>
</template>

<script>
import IconHome from '../components/icons/IconHome.vue'
import IconSignOut from '../components/icons/IconSignout.vue'
import Navbar from '../components/Navbar.vue'
import MainContent from '../components/MainContent.vue'
export default (await import('vue')).defineComponent({
  components: {
    IconHome,
    IconSignOut,
    Navbar,
    MainContent
  }
})
</script>
