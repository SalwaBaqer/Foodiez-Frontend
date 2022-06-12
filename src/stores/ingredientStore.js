import { makeAutoObservable } from "mobx";
import instance from "./instance";

class IngredientStore {
  ingredients = [];
  //constructor
  constructor() {
    makeAutoObservable(this);
  }

  //methods
  ingredientsFetch = async () => {
    try {
      const response = await instance.get("/ingredients");
      this.ingredients = response.data;
    } catch (error) {
      console.log(
        "🚀 ~ file: ingredientStore.js ~ line 17 ~ IngredientStore ~ ingredientsFetch= ~ error",
        error
      );
    }
  };
  ingredientCreate = async (newingredient) => {
    try {
      const formData = new FormData();
      for (const key in newingredient) formData.append(key, newingredient[key]);
      const response = await instance.post("/ingredients", formData);
      this.ingredients.push(response.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: ingredientStore.js ~ line 25 ~ IngredientStore ~ ingredientCreate= ~ error",
        error
      );
    }
  };
}

const ingredientStore = new IngredientStore();
ingredientStore.ingredientsFetch();
export default ingredientStore;
