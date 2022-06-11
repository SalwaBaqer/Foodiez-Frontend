import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  categories = [];
  //constructor
  constructor() {
    makeAutoObservable(this);
  }

  //methods
  categoriesFetch = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
    } catch (error) {
      console.log(
        "🚀 ~ file: categoryStore.js ~ line 17 ~ CategoryStore ~ categoriesList= ~ error",
        error
      );
    }
  };
  categoryCreate = async (newCategory) => {
    try {
      const response = await instance.get("/categories", newCategory);
      this.categories.push(response.date);
    } catch (error) {
      console.log(
        "🚀 ~ file: categoryStore.js ~ line 17 ~ CategoryStore ~ categoriesList= ~ error",
        error
      );
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.categoriesFetch();
export default categoryStore;
