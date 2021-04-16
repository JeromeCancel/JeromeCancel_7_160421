<template>
	<v-col cols="6" xs="12" md="2" class="indigo lighten-4">
		<v-row class="justify-space-around my-3">
			<v-avatar size="82">
				<v-icon size="82">
					mdi-account-circle
				</v-icon>
			</v-avatar>
		</v-row>
		<v-row class="mb-3">
			<span class="font-weight-bold title black--text text-truncate pl-5">
				Bienvenue {{ $store.state.user.firstName }}</span
			>
		</v-row>
		<v-divider></v-divider>
		<v-list nav dense class="indigo lighten-4 my-5">
			<v-list-item-group v-model="selectedItem" color="indigo">
				<v-list-item v-for="(item, i) in items" :key="i" :href="item.routeUrl">
					<v-list-item-icon>
						<v-icon v-text="item.icon"></v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title v-text="item.text"></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
		<v-divider></v-divider>
		<v-list nav dense class="indigo lighten-4 my-5">
			<span class="font-weight-bold">MES AMIS</span>
			<v-list-item-group
				v-model="selectedFriends"
				color="indigo"
				class="mt-5 black--text"
			>
				<v-list-item v-for="(friend, i) in friends" :key="i">
					<v-list-item-icon>
						<v-avatar size="32">
							<v-icon size="32">
								mdi-account-circle
							</v-icon>
						</v-avatar>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title
							class="text-truncate"
							v-text="friend.text"
						></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
		<v-divider class="mb-5"></v-divider>
		<v-row class="justify-center mt-12">
			<v-dialog v-model="dialog" persistent max-width="600px">
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						depressed
						color="green lighten-1"
						dark
						v-if="$route.name === 'newsfeed'"
						v-bind="attrs"
						v-on="on"
					>
						Publier
					</v-btn>
				</template>
				<v-form ref="postForm" v-model="valid">
					<v-card>
						<v-card-title>
							<span class="headline">Créez votre article</span>
						</v-card-title>
						<v-card-text>
							<v-container>
								<v-row>
									<v-col cols="12">
										<v-text-field
											label="Titre*"
											type="text"
											required
											v-model="title"
											:rules="titleRules"
										></v-text-field>
									</v-col>
									<v-col cols="12">
										<v-textarea
											label="Contenu*"
											required
											auto-grow
											v-model="content"
											:rules="contentRules"
										></v-textarea>
									</v-col>
									<v-col cols="12">
										<v-file-input
											label="Image"
											v-model="image"
											type="file"
											show-size
											accept="image/png, image/jpeg"
										></v-file-input>
									</v-col>
								</v-row>
							</v-container>
							<small>*indique les champs requis</small>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="red darken-2" text @click="dialog = false">
								Fermer
							</v-btn>
							<v-btn color="orange lighten-1" text @click="reset">
								Réiniatiliser
							</v-btn>
							<v-btn color="green darken-2" text @click="send">
								Publier
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-form>
			</v-dialog>
		</v-row>
	</v-col>
</template>

<script>
import PostService from "@/services/PostService";

export default {
	name: "Sidebar",
	data() {
		return {
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
			posts: [],
			error: null,
			dialog: false,

			selectedItem: null,
			selectedFriends: null,
			items: [
				{ text: "Mon profil", icon: "mdi-account", routeUrl: "/profil" },
				{ text: "Mes paramètres", icon: "mdi-folder" },
			],
			friends: [{ text: "John Doe" }, { text: "Joe Doe" }],
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
	},
};
</script>

<style></style>
