<template lang="pug">
  v-app
    v-content
      search
      body-h
</template>

<script>
import search from "./components/search";
import bodyH from "./components/body";
export default {
  name: "App",

  components: {
    search,
    bodyH
  }
};
</script>
