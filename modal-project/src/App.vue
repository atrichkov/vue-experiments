<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <teleport to=".modals" v-if="showModal">
    <Modal :header="header" :text="text" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">log in</a>
      </template>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Duis euismod orci mi, eget ultrices neque condimentum quis. Curabitur et vestibulum nisl.</p>
    </Modal>
  </teleport>
  <button @click.shift="toggleModal">
    <span v-if="showModal">hide modal</span>
    <span v-else>show modal (shift)</span>
  </button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      header: 'Sign up for the Giveaway!',
      title: 'My Vue App (:',
      text: 'Lorem ipsum..',
      showModal: false
    }
  },
  methods: {
    handleClick() {
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;;
  padding-bottom: 10px;
}
</style>
