<template>
    <v-container mt-16 pt-16>
        <v-row class="justify-center align-center">
            <v-col sm='6' dark class="indigo text-center elevation-2 pa-5">
                <span class="white--text font-weight-bold">ENREGISTREMENT</span>
            </v-col>
        </v-row>
        <v-form ref="form" v-model="valid">
          <v-row class="justify-center align-center">
            <v-col sm='6'>
                <v-text-field
                label="Email"
                v-model="email"
                type="email"
                :rules="emailRules"
                required
                ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="justify-center align-center">
            <v-col sm='6'>
                <v-text-field
                label="Mot de passe"
                v-model="password"
                type="password"
                :rules="passwordRules"
                :counter="8"
                required
                ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="justify-center align-center">
            <v-col sm='6'>
                <v-text-field
                label="Prénom"
                v-model="firstName"
                type="text"
                :rules="firstNameRules"
                required
                ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="justify-center align-center">
            <v-col sm='6'>
                <v-text-field
                label="Nom"
                v-model="lastName"
                type="text"
                :rules="lastNameRules"
                required
                ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="justify-center align-center">
            <v-col sm="6">
              <p class="text-center font-italic red--text" id="error">{{error}}</p>
            </v-col>
          </v-row>
          <v-row class="justify-center align-center">
            <v-col sm='6' class=" d-flex justify-space-around border-bottom">
                <v-btn
                dark
                class="green darken-2"
                @click="register">
                S'enregistrer
                </v-btn>
                <v-btn
                dark
                class="orange lighten-1"
                @click="reset">
                Reinitialiser
                </v-btn>
            </v-col>
          </v-row>
      </v-form>
  </v-container>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "Veuillez remplir ce champ",
        v => /.+@.+\..+/.test(v) || "L' e-mail doit être valide",
      ],
      password: "",
      passwordRules: [
        v => !!v || 'Veuillez remplir ce champ',
        v => (v && v.length >= 8) || 'le mot de passe doit contenir plus de 8 caractères',
      ],
      firstName: "",
      firstNameRules: [
        v => !!v || "Veuillez remplir ce champ"
      ],
      lastName: "",
      lastNameRules: [
        v => !!v || "Veuillez remplir ce champ"
      ],
      error: null
    }
  },
  methods: {
    validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'newsfeed'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>

.col {
    border-left: 1px solid black !important;
    border-right: 1px solid black !important;
}

.border-bottom {
    border-bottom: 1px solid black !important;
}

.v-form > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
 margin-top: 35px;
}


</style>