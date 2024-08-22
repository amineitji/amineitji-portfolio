<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="['collapse', 'navbar-collapse', { show: isCollapsed }]">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profil">À propos de moi</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projets-universitaires">Projets Universitaires</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projets-personnels">Projets Personnels</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/commandez">Commandez un site vitrine</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.navbar {
  padding: 10px 20px;
}

.nav-link {
  color: white;
}

.nav-link:hover {
  text-decoration: underline;
}

.nav-item {
  margin-left: 15px;
}

.navbar-toggler {
  border: none;
}
</style>
