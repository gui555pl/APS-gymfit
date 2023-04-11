<template lang="pug">
v-container
  v-row(justify="center")
    v-col(cols=12)
      .text-h4 Treino
  v-row(justify="center")
    v-col
      v-select(
        v-model="student",
        :items="students",
        label="Selecionar aluno",
        item-text="name",
        item-value="id"
      )
    v-col(cols="auto")
      v-btn(@click="consultarTreino", color="primary") Consultar
  v-row(v-if="treinos.length || loading", justify="center")
    v-col(cols=12)
      v-data-table.elevation-1(
        v-if="!loading",
        :headers="headers",
        :items="treinos",
        :items-per-page="5"
      )

      v-skeleton-loader(v-else, elevation="2", type="table")
</template>

<script>
// @ is an alias to /src

export default {
  name: "TreinosPage",
  components: {},
  data() {
    return {
      loading: false,
      student: null,
      students: [],
      headers: [
        {
          text: "ID da Conta",
          value: "idConta",
        },
        {
          text: "Tipo",
          value: "tipo",
        },
        {
          text: "Exercícios",
          sortable: false,
          value: "exercicios",
        },
      ],
      treinos: [],
    };
  },
  methods: {
    consultarTreino() {
      this.loading = true;
      // TODO: listar treinos usando filtro "this.student" que é o id do aluno
      setTimeout(() => {
        this.treinos = [
          {
            idConta: 1,
            tipo: "A",
            exercicios: ["Supino: 4x10", "Fly: 3x12", "Tríceps polia: 4x12"],
          },
          {
            idConta: 1,
            tipo: "B",
            exercicios: ["Puxada: 4x10", "Remada: 4x10", "Rosca direta: 4x12"],
          },
          {
            idConta: 1,
            tipo: "C",
            exercicios: [
              "Agachamento: 5x8",
              "Flexão de Perna: 4x12",
              "Panturrilha sentado: 5x12",
            ],
          },
        ];
        this.loading = false;
      }, 2000);
    },
  },
  mounted() {
    // TODO: listar alunos chamando a API
    this.students = [
      { id: 1, name: "Guilherme" },
      { id: 2, name: "Igor" },
      { id: 3, name: "Vinícius" },
      { id: 4, name: "Rogério" },
    ];
  },
};
</script>
