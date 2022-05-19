<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Recipe</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="submitForm" class="pa-5"
            enctype="multipart/form-data">
            <v-text-field label="Recipe" v-model="recipe.nameRecipe" prepend-icon="mdi-note" :rules="rules">
            </v-text-field>
            <v-text-field label="Preparation Time" v-model="recipe.preparationTime" prepend-icon="mdi-clock" :rules="rules">
            </v-text-field>
            <v-textarea label="Steps" v-model="recipe.steps" prepend-icon="mdi-plus" :rules="rules">
            </v-textarea>
            <v-text-field label="Image" v-model="recipe.image" prepend-icon="mdi-camera-plus" :rules="rules">
            </v-text-field>
            <v-btn type="submit" class="mt-3" color="primary">add recipe</v-btn>
          </v-form>
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
        rules: [(value) => !! value || "This field is required"],
        recipe: {
          nameRecipe: '',
          preparationTime: '',
          steps: '',
          image: ''
        }
      }
    },
    methods: {
      async submitForm(){
        const formData = new FormData() 
        formData.append('nameRecipe', this.recipe.nameRecipe)
        formData.append('preparationTime', this.recipe.preparationTime)
        formData.append('steps', this.recipe.steps)
        formData.append('image', this.recipe.image)
        if(this.$refs.form.validate()) {
          const response = await API.addRecipe(formData)
          this.$router.push({ name: 'home', params: { message: response.message } })
        }
      }
    }
  }
</script>