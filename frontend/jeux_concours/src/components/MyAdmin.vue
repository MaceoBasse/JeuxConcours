<template>
  <div class="min-w-screen min-h-screen bg-gray-200">
    <div class="flex justify-center px-5 py-5">
      <div class="w-full max-w-3xl">
        <h1 class="text-center text-3xl my-3">Admin</h1>
        <div class="-mx-2 md:flex">
          <div class="w-full md:w-1/3 px-2">
            <div class="rounded-lg shadow-sm mb-4">
              <div
                class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
              >
                <div class="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 class="text-sm uppercase text-gray-500 leading-tight">
                    Users
                  </h4>
                  <h3
                    class="text-3xl text-gray-700 font-semibold leading-tight my-3"
                  >
                    3,682
                  </h3>
                  <p class="text-xs text-green-500 leading-tight">▲ 57.1%</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2">
            <div class="rounded-lg shadow-sm mb-4">
              <div
                class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
              >
                <div class="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 class="text-sm uppercase text-gray-500 leading-tight">
                    Users win
                  </h4>
                  <h3
                    class="text-3xl text-gray-700 font-semibold leading-tight my-3"
                  >
                    {{ this.userWin.length }}
                  </h3>
                  <p class="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2">
            <div class="rounded-lg shadow-sm mb-4">
              <div
                class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
              >
                <div class="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 class="text-sm uppercase text-gray-500 leading-tight">
                    User play
                  </h4>
                  <h3
                    class="text-3xl text-gray-700 font-semibold leading-tight my-3"
                  >
                    200
                  </h3>
                  <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex space-x-2 mt-5 justify-center">
      <button
        class="bg-white hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
        @click="draw()"
      >
        <svg width="32" height="32" viewBox="0 0 256 256">
          <g fill="currentColor" fill-rule="evenodd">
            <path
              d="M47.895 88.097c.001-4.416 3.064-9.837 6.854-12.117l66.257-39.858c3.785-2.277 9.915-2.277 13.707.008l66.28 39.934c3.786 2.28 6.853 7.703 6.852 12.138l-.028 79.603c-.001 4.423-3.069 9.865-6.848 12.154l-66.4 40.205c-3.781 2.29-9.903 2.289-13.69-.01l-66.167-40.185c-3.78-2.295-6.842-7.733-6.84-12.151l.023-79.72zm13.936-6.474l65.834 36.759l62.766-36.278l-62.872-36.918L61.83 81.623zM57.585 93.52c0 1.628-1.065 71.86-1.065 71.86c-.034 2.206 1.467 4.917 3.367 6.064l61.612 37.182l.567-77.413s-64.48-39.322-64.48-37.693zm76.107 114.938l60.912-38.66c2.332-1.48 4.223-4.915 4.223-7.679V93.125l-65.135 37.513v77.82z"
            />
            <path
              d="M77.76 132.287c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm32 21c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm-32 16c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm32 21c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm78.238-78.052c-4.783-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.623 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zm-16.238 29c-4.782-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.622 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zm-17 28c-4.782-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.622 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zM128.5 69c-6.351 0-11.5 4.925-11.5 11s5.149 11 11.5 11S140 86.075 140 80s-5.149-11-11.5-11z"
            />
          </g>
        </svg>
        <span>Tirage au sort</span>
      </button>
    </div>
    <div class="flex flex-wrap -mx-2 justify-center overflow-hidden px-5">
      <div
        class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:w-1/4"
        v-for="(user, index) in winners"
        :key="index"
      >
        <div class="p-8 bg-white rounded shadow-md">
          <h2 class="text-2xl font-bold text-gray-800">
            {{ user.firstName }} {{ user.lastName }}
          </h2>
          <p class="text-gray-600">
            {{ user.email }}
          </p>
          <p class="text-gray-600">Tel: {{ user.number }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userWin: [],
      answers: [],
      winners: [],
    };
  },
  created() {
    this.getAllAnswers();
  },
  methods: {
    getAllAnswers() {
      const token = "Bearer " + localStorage.getItem("token");
      const option = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
        credentials: "include",
      };
      fetch("http://localhost:9000/game", option)
        .then((response) => response.json())
        .catch((error) => {
          console.error("There was an error!", error);
        })
        .then((data) => {
          console.log(data[0]);
          this.userWin = data[0].usersWin;
          console.log(this.userWin.length);
        });
    },
    draw() {
      const token = "Bearer " + localStorage.getItem("token");
      const option = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
        credentials: "include",
      };
      fetch("http://localhost:9000/game/draw", option)
        .then((response) => response.json())
        .catch((error) => {
          console.error("There was an error!", error);
        })
        .then((data) => {
          console.log(data);
          this.winners = data;
        });
    },
  },
};
</script>

<style></style>
