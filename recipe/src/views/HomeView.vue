<template>
  <v-container>
    <v-alert close-text="Close Alert" color="green accent-4" dark
    dismissible v-if="this.$route.params.message">
      {{ this.$route.params.message }}
    </v-alert>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="recipe in recipes" :key="recipe._id">
      <v-card class="pa-1" :to="{ name: 'recipe', params: { id: recipe._id }}">
        <v-img height="250" :src="`${recipe.image}`"></v-img>
        <v-btn class="ml-4 mt-3" small outlined color="indigo">
          {{recipe.preparationTime}} hours
        </v-btn>
        <v-card-title>
          {{recipe.nameRecipe}}
        </v-card-title>
        <v-card-text class="py-0">
          <p>{{ recipe.steps.substring(0, 90)}}...</p>
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import API from '../api'
  export default {
    name: 'Home',
    data() {
      return {
        recipes: []
      }
    },
    async created() {
      this.recipes = await API.getAllRecipes()
    }
  }
</script>
