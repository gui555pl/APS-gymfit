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
  v-row(v-if="typeof treinos != typeof undefined || loading", justify="start")
    v-col(cols="auto")
      v-btn(
        @click="openDialog('create')",
        color="secondary",
        small,
        :disabled="loading"
      )
        | Criar treino
        v-icon(small) mdi-plus
    v-col(cols=12)
      v-data-table.elevation-1(
        v-if="!loading",
        :headers="headers",
        :items="treinos",
        :items-per-page="5"
      )
        template(v-slot:no-data)
          v-btn.ma-4(color="secondary", small, @click="openDialog('create')")
            | Criar treino
            v-icon(small) mdi-plus
        template(v-slot:item.actions="{ item }")
          v-icon.mr-2(@click="openDialog('edit', item)") mdi-pencil
          v-icon(@click="apagarTreino(item)", color="red") mdi-delete
      v-skeleton-loader(v-else, elevation="2", type="table")
  v-dialog(v-model="dialog", max-width="500px")
    v-card
      v-card-title {{ dialogType === "edit" ? "Editar" : "Criar" }} Treino
      v-card-text
        v-row(justify="center")
          v-col(cols=6)
            v-text-field(type="number" v-model="treinoSelected.idConta" label="ID da Conta" filled :disabled="dialogType === 'edit'")
          v-col(cols=6)
            v-text-field(v-model="treinoSelected.tipo" label="Tipo" filled :disabled="dialogType === 'edit'")
          v-col(cols=12)
            v-text-field(
              :key="i",
              v-for="(n, i) in treinoSelected.exercicios",
              v-model="treinoSelected.exercicios[i]",
              :label="`Exercício ${i + 1}`",
              filled
            )
      v-card-actions
        v-btn(@click="closeDialog", text) Cancelar
        v-spacer
        v-btn(v-if="dialogType === 'edit'", @click="editarTreino" color="primary") Salvar
        v-btn(v-else, @click="criarTreino" color="primary") Criar
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

axios.create({
  baseURL: ``,
})

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
        {
          text: "Ações",
          value: "actions",
          sortable: false,
        },
      ],
      treinos: undefined,
      // edit / create dialog
      dialog: false,
      dialogType: "",
      treinoSelected: {
        idConta: null,
        tipo: null,
        exercicios: [""],
      },
    };
  },
  methods: {
    openDialog(type, item) {
      this.dialogType = type;
      if (type === "edit") {
        this.treinoSelected = item;
      } else {
        this.treinoSelected = {
          idConta: null,
          tipo: null,
          exercicios: [""],
        };
      }

      this.dialog = true;
    },
    closeDialog() {
      this.treinoSelected = {
        idConta: null,
        tipo: null,
        exercicios: [""],
      };
      this.dialog = false;
    },
    async consultarTreino() {
      this.loading = true;
      // TODO: listar treinos usando filtro "this.student" que é o id do aluno
      const response = await axios.get('http://localhost:3333/treinos', {
        'idConta': this.student
      })
      const treinos = response.data
      this.treinos = treinos
      // setTimeout(() => {
      //   this.treinos = [
      //     {
      //       idConta: 1,
      //       tipo: "A",
      //       exercicios: ["Supino: 4x10", "Fly: 3x12", "Tríceps polia: 4x12"],
      //     },
      //     {
      //       idConta: 1,
      //       tipo: "B",
      //       exercicios: ["Puxada: 4x10", "Remada: 4x10", "Rosca direta: 4x12"],
      //     },
      //     {
      //       idConta: 1,
      //       tipo: "C",
      //       exercicios: [
      //         "Agachamento: 5x8",
      //         "Flexão de Perna: 4x12",
      //         "Panturrilha sentado: 5x12",
      //       ],
      //     },
      //   ];
      //   this.loading = false;
      // }, 1000);
    },
    async apagarTreino(treino) {
      // TODO: apagar treino da lista de treinos via API usando o "treino" recebido como param
      const response = await axios.post('http://localhost:3333/treino/delete', {
        'idConta': treino.idConta,
        'tipo': treino.tipo
      })
      console.log(response.status)
      // this.treinos.forEach((t, i) => {
      //   if (t.idConta === treino.idConta && t.tipo === treino.tipo) {
      //     this.treinos.splice(i, 1);
      //   }
      // });
    },
    async editarTreino() {
      // TODO: editar treino da lista de treinos via API usando o this.treinoSelected
      const response = await axios.post('http://localhost:3333/treino/edit', {
        'idConta': this.treinoSelected.idConta,
        'tipo': this.treinoSelected.tipo,
        'exercicios': this.treinoSelected.exercicios
      })
      console.log(response.status)
  
      // this.treinos.forEach((t, i) => {
      //   if (
      //     t.idConta === this.treinoSelected.idConta &&
      //     t.tipo === this.treinoSelected.tipo
      //   ) {
      //     this.treinos[i] = JSON.parse(JSON.stringify(this.treinoSelected));
      //   }
      // });

      this.closeDialog()
    },
    async criarTreino() {
      // TODO: add treino na lista de treinos via API usando this.treinoSelected
      const response = await axios.post('http://localhost:3333/treino/create', {
        'idConta': this.treinoSelected.idConta,
        'tipo': this.treinoSelected.tipo,
        'exercicios': this.treinoSelected.exercicios
      })
      console.log(response.status)

      this.closeDialog()
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
