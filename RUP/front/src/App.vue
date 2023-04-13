<template lang="pug">
  v-app
    v-app-bar(app dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg")
      v-app-bar-nav-icon(@click="$router.push('/')")
      v-toolbar-title Gymfit
      v-spacer
      v-btn(icon)
        v-icon mdi-export
    v-main
      router-view
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
