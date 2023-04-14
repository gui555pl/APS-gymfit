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
import axios from "axios";
axios.create({
  baseURL: ``,
})

export default {
  name: "TreinosPage",
  components: {},
  data() {
    return {
      axios: {},
      user: null,
      name: '',
      loading: false
    };
  },
  methods: {
    async changeUser() {
      this.loading = true
      // TODO: mudar nome aluno passando o objeto de conta
      const user = { idConta: 2, nome: this.name }
      const response = await axios.put('http://localhost:3334/conta/editar', user)

      this.user = {
        id: response.data.idConta,
        name: response.data.nome
      }
      this.loading = false

    },
  },
  mounted() {
    this.user = { id: 2, name: "Igor" }
    this.name = this.user.name
  },
};
</script>
