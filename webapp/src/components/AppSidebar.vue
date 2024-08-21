<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <button @click="toggleSidebar" class="btn toggle-btn">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul v-if="!isCollapsed" class="nav flex-column mt-3">
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/profil">Profil</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/projets-universitaires">Projets Universitaires</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/projets-personnels">Projets Personnels</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/commandez">Commandez un site vitrine</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
  background-color: #2c3e50;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 70px;
}

.toggle-btn {
  background-color: transparent;
  border: none;
  align-self: flex-end;
  margin-bottom: 10px;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%288, 8, 8, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.nav-link {
  padding: 10px 15px;
  color: white;
}

.nav-link:hover {
  text-decoration: underline;
}

.nav-item {
  margin-bottom: 15px;
}
</style>
