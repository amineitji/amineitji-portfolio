<template>
    <footer class="footer text-center p-3 bg-dark text-white">
      &copy; {{ currentYear }}
    </footer>
  </template>
  
  <script>
  export default {
    name: 'SiteFooter',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  </style>
  