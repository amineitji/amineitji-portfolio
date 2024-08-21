<template>
    <header class="header d-flex justify-content-between align-items-center p-3 bg-dark text-white">
      <h1 class="menu-title m-0">{{ menuTitle }}</h1>
      <div>Amine ITJI - portfolio</div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'SiteHeader',
    props: {
      menuTitle: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
  }
  </style>
  