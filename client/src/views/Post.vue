<template>
	<v-container fluid fill-height class="pa-0">
		<v-layout>
			<Sidebar></Sidebar>
			<v-col cols="12" md="10" class="grey lighten-3">
				<v-row class="justify-center my-5 post">
					<v-card :post="post">
						<v-card-text class="py-2">
							<v-layout class="align-content-center">
								<v-flex xs1>
									<v-avatar size="54">
										<v-icon size="54">
											mdi-account-circle
										</v-icon>
									</v-avatar>
								</v-flex>
								<v-flex xs3 d-flex class="align-center">
									<h3>Nom Prénom</h3>
								</v-flex>
								<v-spacer></v-spacer>
								<v-flex xs2 d-flex class="align-center">
									<span class="caption">Publié le: {{ post.createdAt }}</span>
								</v-flex>
							</v-layout>
							<v-divider inset></v-divider>
							<v-card-title>
								<h4>{{ post.title }}</h4>
							</v-card-title>
						</v-card-text>
						<v-img src="../assets/Faika.jpeg" width="950" height="500"></v-img>
						<v-divider></v-divider>
						<v-card-subtitle>
							<h4>{{ post.content }}</h4>
						</v-card-subtitle>
						<v-divider></v-divider>
						<v-card-actions>
							<v-tooltip left>
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

							<v-dialog transition="dialog-bottom-transition" max-width="600">
								<template v-slot:activator="{ on, attrs }">
									<v-btn icon color="green lighten-1" v-bind="attrs" v-on="on">
										<v-icon size="40">mdi-plus-thick</v-icon>
									</v-btn>
								</template>
								<template v-slot:default="dialog">
									<v-card>
										<v-toolbar color="indigo" dark
											>Laissez un commentaire !</v-toolbar
										>
										<v-card-text>
											<div>
												<v-textarea
													label="Contenu"
													required
													auto-grow
													v-model="content"
												></v-textarea>
											</div>
										</v-card-text>
										<v-card-actions class="justify-end">
											<v-btn
												color="red darken-2"
												text
												@click="dialog.value = false"
												>Close</v-btn
											>
											<v-btn color="green darken-2" text @click="send">
												Publier
											</v-btn>
										</v-card-actions>
									</v-card>
								</template>
							</v-dialog>
							<v-spacer></v-spacer>
							<v-btn
								dark
								class=" indigo font-weight-bold mx-3"
								@click="navigateToNews"
								>RETOUR</v-btn
							>
						</v-card-actions>
					</v-card>
				</v-row>
				<v-row
					class="justify-center mb-5"
					v-for="comment in comments"
					:key="comment.id"
				>
					<v-col cols="1" class="pa-0 d-flex align-center">
						<div class="text-center">
							<v-chip class="ma-2" color="indigo" text-color="white">
								<v-avatar left>
									<v-icon>mdi-account-circle</v-icon>
								</v-avatar>
								John Doe
							</v-chip>
						</div>
					</v-col>
					<v-col cols="6" class="pa-0">
						<v-card flat>
							<v-card-text>{{ comment.content }} </v-card-text>
							<v-divider></v-divider>
							<v-card-actions class="justify-space-between">
								<span class="caption ml-3">Publié à :</span>
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
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-layout>
	</v-container>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar";
import CommentService from "../services/CommentService";

export default {
	name: "Comment",
	components: {
		Sidebar,
	},
	data() {
		return {
			comments: [],
			likes: [],
			error: null,
			content: "",
		};
	},
	/*async mounted() {
		const comments = await CommentService.findAllComment();
		this.comments = comments.data;
	},*/
	computed: {
		post() {
			return (
				this.$store.state.posts.find(
					(post) => post.id == this.$route.params.id
				) || {}
			);
		},
	},
	methods: {
		navigateToNews() {
			this.$router.push({ name: "newsfeed" });
		},
		async loadComment() {
			const comments = await CommentService.findAllComment();
			this.comments = comments.data;
		},
		async send() {
			try {
				await CommentService.send({
					content: this.content,
					postId: this.$route.params.id,
					userId: this.$store.state.user.id,
				});
			} catch (error) {
				this.error = error.response.data.error;
			}
		},
	},
	created() {
		this.loadComment();
	},
};
</script>

<style scoped>
.chip-comment {
	width: 200px;
	height: 100px;
	border-radius: 50%;
}
</style>
