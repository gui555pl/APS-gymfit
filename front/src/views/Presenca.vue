<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols=12)
        .text-h4 Presença
      v-col(cols=12)  
        v-stepper(v-model="step")
          v-stepper-header
            v-stepper-step(:complete="step > 1" step="1") Aluno
            v-divider
            v-stepper-step(:complete="step > 2" step="2") Data
          v-stepper-items
            v-stepper-content(step="1")
              v-row(justify="end")
                v-col(cols=12)
                  v-autocomplete(v-model="student" :items="students" label="Selecionar aluno" item-text="name" item-value="id")
                v-col(cols='auto')
                  v-btn(@click="step = 2" color="primary") Próximo
            v-stepper-content(step="2")
              v-row(justify="space-between")
                v-col(cols=12)
                  v-date-picker.px-12(v-model="date" locale="pt-br" scrollable full-width)
                v-col(cols='auto')
                  v-btn.ml-12(@click="step--" color="secondary") Voltar
                v-col(cols='auto')
                  v-btn.mr-12(@click="presenceRegister" color="primary") Registrar presença
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomePage',
  data() {
    return {
      step: 1,
      student: null,
      students: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Susan' },
        { id: 4, name: 'Chris' },
        { id: 5, name: 'Dan' }
      ],
      date: null
    }
  },
  methods: {
    presenceRegister() {
      alert(this.student)
      alert(this.date)
    }
  }
}
</script>
