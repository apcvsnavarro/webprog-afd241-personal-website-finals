<template>
  <div class="guestbook">
    <h2>Guestbook</h2>
    <form @submit.prevent="addComment">
      <input v-model="name" placeholder="Your name" required />
      <textarea v-model="message" placeholder="Your message" required></textarea>
      <button type="submit">Sign Guestbook</button>
    </form>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}</strong>: {{ comment.message }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const name = ref('')
const message = ref('')
const comments = ref([])

const fetchComments = async () => {
  let { data } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false })
  comments.value = data || []
}

const addComment = async () => {
  if (!name.value || !message.value) return
  await supabase.from('guestbook').insert([{ name: name.value, message: message.value }])
  name.value = ''
  message.value = ''
  fetchComments()
}

onMounted(fetchComments)
</script>

<style scoped>
.guestbook { max-width: 500px; margin: 2rem auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #eee; padding: 2rem; }
form { display: flex; flex-direction: column; gap: 10px; }
input, textarea { padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
button { align-self: flex-end; background: #0070f3; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; }
ul { list-style: none; padding: 0; }
li { margin: 10px 0; }
@media (max-width: 600px) {
  .guestbook { padding: 1rem; }
}
</style>