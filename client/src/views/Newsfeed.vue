<template>
	<v-container fluid fill-height class="pa-0">
		<v-layout>
			<Sidebar></Sidebar>
			<v-col cols="12" md="10" class="grey lighten-3">
				<v-row class="justify-center my-5">
					<v-card
						v-for="post in posts"
						:key="post.id"
						class="mx-3 my-3"
						width="375px"
					>
						<v-card-text class="py-2">
							<v-layout class="align-content-center justify-space-around">
								<v-flex xs1>
									<v-avatar size="54" class="ml-n7">
										<v-icon size="54">
											mdi-account-circle
										</v-icon>
									</v-avatar>
								</v-flex>
								<v-flex xs3 d-flex class="align-center">
									<h3>Nom Prénom</h3>
								</v-flex>
								<v-flex xs2 d-flex class="align-center">
									<span class="caption">Publié à :</span>
								</v-flex>
							</v-layout>
							<v-divider inset></v-divider>
							<v-card-title>
								<h4>{{ post.title }}</h4>
							</v-card-title>
						</v-card-text>
						<v-img src="../assets/Faika.jpeg" width="400" height="150"></v-img>
						<v-divider></v-divider>
						<v-card-actions>
							<v-tooltip bottom>
								<template v-slot:activator="{ on, attrs }">
									<v-btn icon color="pink" v-bind="attrs" v-on="on">
										<v-icon>mdi-heart</v-icon>
									</v-btn>
									<span class="mr-7">0</span>
								</template>
								<span>Aimer l'article</span>
							</v-tooltip>
							<v-tooltip bottom>
								<template v-slot:activator="{ on, attrs }">
									<v-btn icon color="indigo" v-bind="attrs" v-on="on">
										<v-icon>mdi-comment-text</v-icon>
									</v-btn>
								</template>
								<span>Nombre de commentaire</span>
							</v-tooltip>
							<span>0</span>
							<v-spacer></v-spacer>
							<v-tooltip bottom>
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										icon
										color="orange lighten-1"
										class="ml-3"
										v-bind="attrs"
										v-on="on"
									>
										<v-icon dense>mdi-file-edit</v-icon>
									</v-btn>
								</template>
								<span>Modifier l'article</span>
							</v-tooltip>
							<v-tooltip bottom>
								<template v-slot:activator="{ on, attrs }">
									<v-btn icon color="red" v-bind="attrs" v-on="on">
										<v-icon dense>mdi-trash-can</v-icon>
									</v-btn>
								</template>
								<span>Supprimer l'article</span>
							</v-tooltip>
							<v-spacer></v-spacer>
							<v-btn
								dark
								small
								depressed
								class="green lighten-1 font-weight-bold mx-3"
								@click="navigateToPost(post.id)"
								>COMMENTER</v-btn
							>
						</v-card-actions>
					</v-card>
				</v-row>
				<div class="text-center mb-5">
					<v-pagination v-model="page" :length="6"></v-pagination>
				</div>
			</v-col>
		</v-layout>
	</v-container>
</template>

<script>
import PostService from "../services/PostService";
import Sidebar from "@/components/Sidebar/Sidebar";

export default {
	name: "Newsfeeds",
	components: {
		Sidebar,
	},
	data() {
		return {
			page: 1,
			valid: true,
			title: "",
			titleRules: [
				(v) => !!v || "Veuillez remplir ce champ",
				(v) => v && v.length >= 3,
			],
			content: "",
			contentRules: [
				(v) => !!v || "Veuillez remplir ce champ",
				(v) => v && v.length >= 3,
			],
			image: [],
			posts: {},
			error: null,
			dialog: false,
			selectedItem: null,
			selectedFriends: null,
			items: [
				{ text: "Mon profil", icon: "mdi-account" },
				{ text: "Mes paramètres", icon: "mdi-folder" },
			],
			friends: [{ text: "John Doe" }, { text: "Joe Doe" }],
			userId: this.$store.state.user.id,
		};
	},
	methods: {
		validate() {
			this.$refs.postForm.validate();
		},
		reset() {
			this.$refs.postForm.reset();
		},
		async send() {
			try {
				const response = await PostService.send({
					title: this.title,
					content: this.content,
				});
				this.$store.dispatch("setToken", response.data.token);
				this.$store.dispatch("setUser", response.data.user);
			} catch (error) {
				this.error = error.response.data.error;
			}
		},

		navigateToPost(id) {
			this.$router.push({ name: "post", params: { id } });
		},
	},
	async mounted() {
		this.posts = (await PostService.findAllPost()).data;
	},
};
</script>

<style></style>
