import React from "react";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Item Manager</h1>
      <AddItemForm />
      <ItemList />
    </div>
  );
}

export default App;