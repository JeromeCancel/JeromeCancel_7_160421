<template>
    <v-container mt-16 pt-16>
        <v-row class="justify-center align-center">
            <v-col sm='6' dark class="indigo text-center elevation-2 pa-5">
                <span class="white--text font-weight-bold">CONNECTION</span>
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
            <v-col sm="6">
              <p class="text-center font-italic red--text" id="error">{{error}}</p>
            </v-col>
          </v-row>
          <v-row class="justify-center align-center">
            <v-col sm='6' class=" d-flex justify-space-around border-bottom">
                <v-btn
                dark
                class="green darken-2"
                @click="login">
                Se connecter
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
  name: 'Login',
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
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
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