<template>
  <body class="antialiase">
    <div
      class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300"
    >
      <h1 class="text-4xl font-medium">Register</h1>
      <p class="text-slate-500">Bienvenue 👋</p>

      <div class="my-10">
        <div class="flex flex-col space-y-5">
          <label for="email">
            <p class="font-medium text-slate-700 pb-2">Email</p>
            <input
              id="email"
              name="email"
              type="email"
              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              v-model="email"
              placeholder="Entrer votre adresse mail"
            />
            <p class="text-red-600">{{ email_error }}</p>
          </label>
          <label for="password">
            <p class="font-medium text-slate-700 pb-2">Password</p>
            <input
              id="password"
              name="password"
              type="password"
              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              v-model="password"
              placeholder="Entrer votre mot de passe"
            />
            <p class="text-red-600">{{ password_error }}</p>
          </label>
          <label for="prenom">
            <p class="font-medium text-slate-700 pb-2">Prenom</p>
            <input
              id="prenom"
              name="prenom"
              type="text"
              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              v-model="firstName"
              placeholder="Entrer votre prenom"
            />
            <p class="text-red-600">{{ firstName_error }}</p>
          </label>
          <label for="nom">
            <p class="font-medium text-slate-700 pb-2">Nom</p>
            <input
              id="nom"
              name="nom"
              type="text"
              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              v-model="lastName"
              placeholder="Entrer votre nom"
            />
            <p class="text-red-600">{{ lastName_error }}</p>
          </label>
          <label for="number">
            <p class="font-medium text-slate-700 pb-2">Numéro</p>
            <input
              id="number"
              name="number"
              type="text"
              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              v-model="number"
              placeholder="Entrer votre numéro"
            />
            <p class="text-red-600">{{ number_error }}</p>
          </label>
          <label for="dateofbirth">
            <p class="font-medium text-slate-700 pb-2">Date de naissance</p>
            <input
              id="dateofbirth"
              name="dateofbirth"
              type="date"
              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              v-model="dateofbirth"
              placeholder="Entrer votre date de naissance"
            />
            <p class="text-red-600">{{ dateofbirth_error }}</p>
          </label>
          <label for="city">
            <p class="font-medium text-slate-700 pb-2">Ville</p>
            <input
              id="city"
              name="city"
              type="city"
              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              v-model="city"
              placeholder="Entrer votre ville"
            />
            <p class="text-red-600">{{ city_error }}</p>
          </label>
          <p class="text-red-600">{{ error }}</p>
          <button
            class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            @click="submit()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span>Register</span>
          </button>
          <p class="text-center">
            Se connecter ?
            <a
              href="/login"
              class="text-indigo-600 font-medium inline-flex space-x-1 items-center"
              ><span>Login</span
              ><span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  /></svg></span
            ></a>
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import validator from "validator";
import moment from "moment";
export default {
  data() {
    return {
      email: "",
      email_error: "",
      password: "",
      password_error: "",
      firstName: "",
      firstName_error: "",
      lastName: "",
      lastName_error: "",
      number: "",
      number_error: "",
      dateofbirth: "",
      dateofbirth_error: "",
      city: "",
      city_error: "",
      role: "User",
      error: "",
    };
  },
  methods: {
    signUpValidate() {
      let { email, password, firstName, lastName, number, dateofbirth, city } =
        this;

      //reset error
      this.email_error = "";
      this.password_error = "";
      this.firstName_error = "";
      this.lastName_error = "";
      this.number_error = "";
      this.dateofbirth_error = "";
      this.city_error = "";
      this.error = ""

      if (!validator.isEmail(email)) {
        this.email_error = "L'email n'est pas valide";
        this.email = "";
        return false;
      }
      if (!validator.isStrongPassword(password)) {
        this.password_error =
          "Le mot de passe doit contenir 8 caractères, 1 majuscule,1 minuscule et 1 caracatére spéciale";
        this.password = "";
        return false;
      }

      if (validator.isEmpty(firstName)) {
        this.firstName_error = "Il faut ecrire un prenom";
        this.firstName = "";
        return false;
      }

      if (validator.isEmpty(lastName)) {
        this.lastName_error = "Il faut ecrire un nom";
        this.lastName = "";
        return false;
      }
      var frenchphone =
        /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
      if (!frenchphone.test(number)) {
        console.log(number);
        this.number_error = "Il faut ecrire un numéro français valide";
        this.number = "";
        return false;
      }
      dateofbirth = moment().format("D/M/Y");
      if (validator.isDate(dateofbirth)) {
        console.log(dateofbirth);
        this.dateofbirth_error = "Il faut ecrire une date de naissance valide";
        this.dateofbirth = "";
        return false;
      }

      if (validator.isEmpty(city)) {
        this.city_error = "Il faut ecrire une ville";
        this.city = "";
        return false;
      }

      return true;
    },
    submit() {
      if (!this.signUpValidate()) {
        return false;
      }
      const option = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          number: this.number,
          dateofbirth: this.dateofbirth,
          city: this.city,
          role: this.role,
        }),
        credentials: "include",
      };
      fetch("http://localhost:9000/users/register", option)
        .then((response) => response.json())
        .catch((error) => {
          console.error("There was an error!", error);
        })
        .then((data) => {
          console.log(data.message);
          if (data.message == "User register in successfully") {
            localStorage.setItem("token", data.user["token"]);
            this.$router.push("/");
          } else {
            this.error = data.message;
          }
        });
    },
  },
};
</script>

<style></style>
