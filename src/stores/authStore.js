import { makeAutoObservable } from "mobx";
import instance from "./instance";
import jwt_decode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }
  signup = async (userData) => {
    try {
      const response = await instance.post("/users/signup", userData);
      const { token } = response.data;
      const decoded = jwt_decode(token);
      this.user = decoded;
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
}

const authStore = new AuthStore();
export default authStore;
