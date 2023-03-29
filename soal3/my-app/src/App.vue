<template>
  <v-app>
    <v-main>
      <InputPanel/>
    </v-main>
  </v-app>
</template>

<script>
import InputPanel from './components/InputPanel.vue'

export default {
  name: 'App',

  components: {
    InputPanel
  }
}
</script>
