import { makeAutoObservable } from "mobx";
import instance from "./instance";
import jwt_decode from "jwt-decode";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
}

signup = async (userData) => {
  try {
    await instance.post("/signup", userData);
  } catch (error) {
    console.log("AuthStore -> signup -> error", error);
  }
};

const authStore = new AuthStore();
export default authStore;
