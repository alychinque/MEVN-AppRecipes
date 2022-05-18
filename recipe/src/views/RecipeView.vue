<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="pa-4 mx-auto">
        <v-card class="pa-2">
          <v-img :src="`${recipe.image}`"></v-img>
          <v-card-actions class="pb-0">
            <v-row class="mt-1 mx-1">
              <v-col sm="2">
                <v-card-title small outlined color="primary">
                  <font-awesome-icon icon="fa-solid fa-clock" class="pa-2" />
                  {{recipe.preparationTime}}
                </v-card-title>
              </v-col>
              <v-col sm="10" class="d-flex justify-end">
                <v-btn color="success" text>Edit</v-btn>
                <v-btn color="red" text>Delete</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-title>
            <h3>{{ recipe.nameRecipe}}</h3>
          </v-card-title>
          <v-card-text class="grey--text">
            <p>{{recipe.steps}}</p>
            <p>{{recipe.created}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from '../api'
export default {
  data() {
    return {
      recipe: {}
    }
  },
  async created() {
    const response = await API.getRecipeByID(this.$route.params.id)
    this.recipe = response
  }
}
</script>