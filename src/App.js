import "./App.css";
import CategoryList from "./components/category/CategoryList";
import SignupModal from "./components/signup/SingupModal";

//components

function App() {
  return (
    <div>
      <h1>Welcome to our Foodiez Project!</h1>
      <CategoryList />
      <SignupModal />
    </div>
  );
}

export default App;
