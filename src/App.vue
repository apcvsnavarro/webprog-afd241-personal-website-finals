<template>
  <div id="app">
    <section class="profile">
      <img src="https://i.pravatar.cc/120" alt="Your Name" class="avatar" />
      <h1>Your Name</h1>
      <p>Short bio about yourself. Vue.js developer. 🚀</p>
      <a href="mailto:you@example.com">Contact Me</a>
    </section>
    <Guestbook />
  </div>
</template>

<script setup>
import Guestbook from './components/Guestbook.vue'
</script>

<style>
body {
  background: #f9f9f9;
  font-family: 'Segoe UI', Arial, sans-serif;
  margin: 0;
}
#app {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}
.profile {
  text-align: center;
  margin-bottom: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #eee;
  padding: 2rem;
}
.avatar {
  width: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
}
@media (max-width: 600px) {
  #app, .profile { padding: 1rem; }
  .avatar { width: 80px; }
}
</style>