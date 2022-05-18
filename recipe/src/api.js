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

  static async addRecipe(post) {
    const res  = await axios.post(url, post);
    return res.data;
  }

  static async updateRecipe(id, post) {
    const res = await axios.put(`${url}/${id}`, post)
    return res.data;
  }

  static async deleteRecipe(id) {
    const res = await axios.delete(`${url}/${id}`)
    return res.data;
  }
}