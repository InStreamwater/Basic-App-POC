import React, { useState } from "react";
import axios from "axios";

const AddItemForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/items`, { name });
      setName(""); // Reset form
      alert("Item added successfully!");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;