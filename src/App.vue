<template>
  <div id="app">
    <section class="profile">
      <img src="https://your-image-url.com/robin-avatar.png" alt="Robin Inspired Avatar" class="avatar" />
      <h1>Robin</h1>
      <p>Mystical traveler of the stars, seeker of knowledge and wisdom.</p>
      <a href="mailto:robin@example.com">Contact Me</a>
    </section>
    <Guestbook />
  </div>
</template>

<script setup>
import Guestbook from './components/Guestbook.vue'
</script>

<style>
body {
  background: linear-gradient(135deg, #2A1A4D, #4B367C);
  color: #F0F0F5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  min-height: 100vh;
}

#app {
  position: relative;
  min-height: 100vh;
  background: url('https://upload-os-bbs.hoyolab.com/upload/2024/04/30/248389737/137a1ce59bd64c0142af04ff5fa10d2e_8606599350309523716.gif') no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;
  color: white; /* Adjust text color for contrast */
}

.profile {
  text-align: center;
  margin-bottom: 3rem;
}

.avatar {
  width: 140px;
  border-radius: 50%;
  border: 3px solid #D9A9E3;
  box-shadow: 0 0 15px #D9A9E3;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px #F0F0F5;
}

h1 {
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
  color: #D9A9E3;
  text-shadow: 0 0 8px #BFA6E8;
}

p {
  font-size: 1.2rem;
  color: #E6D9F7;
  margin-bottom: 1rem;
}

a {
  color: #D9A9E3;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease;
}

a:hover {
  border-color: #F0F0F5;
  color: #F0F0F5;
}

.guestbook {
  background: rgba(42, 26, 77, 0.9);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 15px #BFA6E8;
}

form input,
form textarea {
  background: #3B2A6D;
  border: 1px solid #6E57A4;
  color: #F0F0F5;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;
}

form input:focus,
form textarea:focus {
  border-color: #D9A9E3;
  outline: none;
  box-shadow: 0 0 8px #D9A9E3;
}

button {
  background: #D9A9E3;
  color: #2A1A4D;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #BFA6E8;
  color: #fff;
}

ul li {
  border-bottom: 1px solid #6E57A4;
  padding: 0.5rem 0;
  color: #E6D9F7;
}
</style>