import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddRecipeView from '../views/AddRecipeView.vue'
import RecipeView from '../views/RecipeView.vue'
import EditRecipeView from '../views/EditRecipeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-recipe',
    name: 'add-recipe',
    component: AddRecipeView
  },
  {
    path: '/edit-recipe/:id',
    name: 'edit-recipe',
    component: EditRecipeView
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: RecipeView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
