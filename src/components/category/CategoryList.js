import { observer } from "mobx-react";
import categoryStore from "../../stores/categoryStore";
//components
import AddButton from "../buttons/AddButton";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const categories = categoryStore.categories.map((category) => (
    <CategoryItem category={category} key={category._id} />
  ));
  return (
    <div>
      <AddButton />
      <div className="category-list-container">{categories}</div>
    </div>
  );
}

export default observer(CategoryList);
