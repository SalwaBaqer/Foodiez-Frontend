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
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      const response = await instance.post("/categories", formData);
      this.categories.push(response.data);
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
