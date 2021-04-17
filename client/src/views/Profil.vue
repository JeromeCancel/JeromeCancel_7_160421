<template>
	<v-container fluid fill-height class="pa-0">
		<v-layout>
			<Sidebar></Sidebar>
			<v-col cols="12" md="10" class="grey lighten-3">
				<v-row class="justify-center mt-8">
					<v-avatar size="125">
						<v-icon size="125">
							mdi-account-circle
						</v-icon>
					</v-avatar>
				</v-row>
				<v-row class="justify-center mb-15">
					<h5>Modifier ma photo de profil</h5>
				</v-row>
				<v-row class="justify-center text-center mt-8">
					<v-flex>
						<h3>{{ $store.state.user.firstName }}</h3>
					</v-flex>
					<v-flex>
						<h3>{{ $store.state.user.lastName }}</h3>
					</v-flex>
				</v-row>
				<v-row class="justify-center text-center mt-3 mb-15">
					<v-flex>
						<h5>Modifier mon prénom</h5>
					</v-flex>
					<v-flex>
						<h5>Modifier mon nom</h5>
					</v-flex>
				</v-row>
				<v-row class="justify-center">
					<h3>{{ $store.state.user.email }}</h3>
				</v-row>
				<v-row class="justify-center">
					<h5>Modifier mon adresse mail</h5>
				</v-row>
				<v-divider vertical class="divider"></v-divider>
				<v-row class="justify-center text-center mt-12">
					<v-flex>
						<v-btn @click="deleteUser(profilId)">Supprimer mon compte</v-btn>
					</v-flex>
					<v-flex>
						<v-btn @click="navigateTo">RETOUR</v-btn>
					</v-flex>
				</v-row>
			</v-col>
		</v-layout>
	</v-container>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar";
import UserService from "../services/UserService";
export default {
	name: "Profil",
	components: {
		Sidebar,
	},
	data() {
		return {
			user: {},
			error: null,
			profilId: this.$store.state.user.id,
		};
	},
	methods: {
		navigateTo() {
			this.$router.push("/newsfeed");
		},
		async deleteUser() {
			try {
				console.log(this.$store.state.user.id);
				await UserService.deleteUser(this.$store.state.user.id);
				this.$store.dispatch("setToken", null);
				this.$store.dispatch("setUser", null);
				this.$router.push("/login");
			} catch (error) {
				this.error = console.log(this.error);
			}
		},
	},
	async mounted() {
		//console.log(this.$store.state.user.id);
		//this.user = (await UserService.getUser(this.$store.state.user.id)).data;
	},
};
</script>

<style scoped>
.divider {
	height: 200px !important;
	max-height: none;
	min-height: 0%;
	border: none;
}
</style>
