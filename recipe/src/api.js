import axios from 'axios'
const url = "/api/"

export default class API{
  static async getAllRecipes() {
    const res  = await axios.get(url);
    return res.data;
  }

  static async getRecipeByID(id) {
    const res = await axios.get(`${url}/${id}`)
    return res.data;
  }

  static async addRecipe(recipe) {
    const res  = await axios.post(url, {
      nameRecipe: recipe.get('nameRecipe'),
      preparationTime: recipe.get('preparationTime'),
      steps: recipe.get('steps'),
      image: recipe.get('image')
    });
    return res.data;
  }

  static async updateRecipe(id, recipe) {
    const res = await axios.put(`${url}/${id}`, {
      nameRecipe: recipe.get('nameRecipe'),
      preparationTime: recipe.get('preparationTime'),
      steps: recipe.get('steps'),
      image: recipe.get('image')
    })
    return res.data;
  }

  static async deleteRecipe(id) {
    const res = await axios.delete(`${url}/${id}`)
    return res.data;
  }
}