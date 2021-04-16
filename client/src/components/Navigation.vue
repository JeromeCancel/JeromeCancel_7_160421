<template>
	<span>
		<v-navigation-drawer
			app
			v-model="drawer"
			class="indigo"
			dark
			disable-resize-watcher
		>
			<v-list>
				<template v-for="(item, index) in items">
					<v-list-item :href="item.routeUrl" :key="index">
						<v-list-item-content>
							{{ item.title }}
						</v-list-item-content>
					</v-list-item>
					<v-divider :key="`divider-${index}`"></v-divider>
				</template>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar app color="indigo" dark>
			<v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer">
				<v-icon large>mdi-menu</v-icon>
			</v-app-bar-nav-icon>
			<v-spacer class="hidden-md-and-up"></v-spacer>
			<v-app-bar-title>
				<router-link to="/login">
					<v-img
						src="../assets/icon-left-font-monochrome-white.svg"
						height="50"
						contain
					></v-img>
				</router-link>
			</v-app-bar-title>
			<v-spacer class="hidden-sm-and-down"></v-spacer>
			<router-link to="/register">
				<v-btn
					text
					x-large
					class="hidden-sm-and-down"
					v-if="!$store.state.isUserLoggedIn && $route.name === 'login'"
					>S'INSCRIRE</v-btn
				>
			</router-link>
			<router-link to="/login">
				<v-btn
					text
					x-large
					class="hidden-sm-and-down"
					v-if="!$store.state.isUserLoggedIn && $route.name === 'register'"
					>SE CONNECTER</v-btn
				>
			</router-link>
			<v-btn
				text
				x-large
				class="hidden-sm-and-down"
				v-if="$store.state.isUserLoggedIn"
				@click="logout"
				>SE DECONNECTER</v-btn
			>
		</v-app-bar>
	</span>
</template>

<script>
export default {
	name: "Navigation",
	data() {
		return {
			appTitle: "GROUPOMANIA",
			drawer: false,
			items: [
				{ title: "S'inscrire", routeUrl: "/register" },
				{ title: "Se connecter", routeUrl: "/login" },
			],
		};
	},
	methods: {
		logout() {
			this.$store.dispatch("setToken", null),
				this.$store.dispatch("setUser", null),
				this.$router.push("/login");
		},
	},
};
</script>

<style scoped></style>
