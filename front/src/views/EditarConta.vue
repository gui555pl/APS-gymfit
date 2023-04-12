<template lang="pug">
v-container
  v-row(justify="center")
    v-col(cols=12)
      .text-h4 Editar Conta
  v-row(justify="center")
    v-col
      .text-subtitle-2 Nome 
      .text-h6 {{ user.name }}
  v-row(justify="end")
    v-col(cols=12)
      v-text-field(:loading="loading" label="Nome", v-model="name" filled)
    v-col(cols='auto')
      v-btn(@click="changeUser" :loading="loading" color="primary") Salvar
</template>

<script>
// @ is an alias to /src

export default {
  name: "TreinosPage",
  components: {},
  data() {
    return {
      user: null,
      name: '',
      loading: false
    };
  },
  methods: {
    changeUser() {
      this.loading = true
      // TODO: mudar nome aluno passando o objeto de conta
      setTimeout(() => {
        const user = { id: 2, name: this.name }
        this.user = user
        this.loading = false
      }, 2000);
    },
  },
  mounted() {
    this.user = { id: 2, name: "Igor" }
    this.name = this.user.name
  },
};
</script>
