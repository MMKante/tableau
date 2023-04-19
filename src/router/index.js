import { createRouter, createWebHistory } from 'vue-router'
import DefaultView from '../views/DefaultView'

const routes = [
{
	path: '/',
	name: 'home',
	component: DefaultView,
	meta: {
		title: 'Affichage par défaut'
	}
}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
	const title = to.meta.title
	// If the route has a title, set it as the page title of the document/page
	if (title) {
		document.title = title
	}
  // Continue resolving the route
	next()
})

export default router
