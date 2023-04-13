<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="auto")
        v-btn(@click="$router.push(`/editar-conta/${2}`)") Editar conta
      v-col(cols="auto")
        v-btn(@click="$router.push('/treinos')") Treinos
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomePage',
  components: {}
}
</script>
