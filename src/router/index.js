import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "list",
			component: () => import("../views/ListView.vue")
		},
		{
			path: "/form",
			name: "form",
			component: () => import("../views/FormView.vue")
		}
	]
});

export default router;
