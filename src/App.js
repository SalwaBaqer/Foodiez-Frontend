import "./App.css";
import CategoryList from "./components/category/CategoryList";
import SignupModal from "./components/signup/SingupModal";
import "react-toastify/dist/ReactToastify.css";
//import authStore from "./stores/authStore";
import { observer } from "mobx-react";
import authStore from "./stores/authStore";
import SigninModal from "./components/signup/SigninModal";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="title">Foodiez</h1>
      <h2>Welcome {authStore.user?.username}</h2>
      <CategoryList />
      <SignupModal />
      <SigninModal />
    </div>
  );
}

export default observer(App);
