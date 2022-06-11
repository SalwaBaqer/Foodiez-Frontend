import "./App.css";
import CategoryList from "./components/category/CategoryList";
import SignupModal from "./components/signup/SingupModal";
//import authStore from "./stores/authStore";
import { observer } from "mobx-react";

//components

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="title">Foodiez</h1>
      <CategoryList />
      <SignupModal />
    </div>
  );
}

export default observer(App);
