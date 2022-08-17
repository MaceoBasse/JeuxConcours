<!-- eslint-disable vue/no-parsing-error -->
<template>
  <body class="antialiased text-gray-700 bg-gray-100">
    <div id="app" class="flex w-full h-screen justify-center items-center">
      <div class="w-full max-w-xl p-3">
        <h1 class="font-bold text-5xl text-center text-indigo-700">
          Jeux concours
        </h1>
        <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
          <div v-if="idx < count">
            <p class="text-2xl font-bold">{{ questions[idx]["question"] }}</p>
            <label
              v-for="(answer, index) in questions[idx].answers"
              :key="index"
              :for="index"
              class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
              :class="
                ({ 'hover:bg-gray-200 cursor-pointer': selectedAnswer == '' },
                { 'bg-indigo-600 text-white': selectedAnswer == index })
              "
            >
              <input
                :id="index"
                type="radio"
                class="hidden"
                :value="index"
                @change="answered($event)"
                :disabled="selectedAnswer != ''"
              />
              {{ answer }}
            </label>
            <div class="mt-6 flow-root">
              <button
                @click="nextQuestion"
                v-show="selectedAnswer != '' && idx < count - 1"
                class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
              >
                Suivante &gt;
              </button>
              <button
                @click="showResults"
                v-show="selectedAnswer != '' && idx == count - 1"
                class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
              >
                Fin
              </button>
            </div>
          </div>
          <div v-else>
            <h2 class="text-bold text-3xl">Merci d'avoir participé</h2>
            <div class="flex justify-start space-x-4 mt-6">
              <p>
                Si vous gagnez le tirage au sort, vous recevrez bientôt un mail
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      idx: 0,
      selectedAnswer: "",
      result: [],
      count: 2,
      questions: [
        {
          question: "Quelle est la capitale de l'Espagne ?",
          answers: {
            Barcelone: "Barcelone",
            Madrid: "Madrid",
            Malaga: "Malaga",
          },
        },
        {
          question: "Qui est le roi d'Espagne ?",
          answers: {
            FelipeVI: "FelipeVI",
            FelipeV: "FelipeV",
            FelipeIII: "FelipeIII",
          },
        },
      ],
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      this.result.push(this.selectedAnswer);
    },
    nextQuestion() {
      this.idx++;
      this.selectedAnswer = "";
    },
    showResults() {
      this.idx++;
      const token = "Bearer " + localStorage.getItem("token");
      console.log(token);
      const option = {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
          answer1: this.result[0],
          answer2: this.result[1],
        }),
        credentials: "include",
      };
      fetch("http://localhost:9000/game/answer", option)
        .then((response) => response.json())
        .catch((error) => {
          console.error("There was an error!", error);
        })
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>

<style></style>
