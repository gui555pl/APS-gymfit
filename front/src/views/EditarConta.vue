<template lang="pug">
v-container
  v-row(justify="center")
    v-col(cols=12)
      .text-h4 Editar Conta
  v-row(justify="center")
    v-col
      .text-subtitle-2 Nome 
      .text-h6 {{ student.name }}
  v-row(justify="end")
    v-col(cols=12)
      v-text-field(:loading="loading" label="Nome", v-model="name" filled)
    v-col(cols='auto')
      v-btn(@click="changeAluno" :loading="loading" color="primary") Salvar
</template>

<script>
// @ is an alias to /src

export default {
  name: "TreinosPage",
  components: {},
  data() {
    return {
      student: null,
      name: '',
      loading: false
    };
  },
  methods: {
    changeAluno() {
      this.loading = true
      // TODO: mudar nome aluno passando o objeto de conta
      setTimeout(() => {
        const student = { id: 2, name: this.name }
        this.student = student
        this.loading = false
      }, 2000);
    },
  },
  mounted() {
    this.student = { id: 2, name: "Igor" }
    this.name = this.student.name
  },
};
</script>
