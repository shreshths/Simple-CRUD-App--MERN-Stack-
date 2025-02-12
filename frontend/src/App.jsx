import { useState, useEffect } from "react";
import { getItems, createItem, updateItem, deleteItem } from "./api";
import "./App.css";

function App() {
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await getItems();
    setItem(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await updateItem(editing, name);
      setEditing(null);
    } else {
      await createItem(name);
    }
    setName("");
    fetchItems();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <form style={{ margin: "70px 0" }} onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
        />
        <button type="submit" style={{ marginLeft: "10px" }}>
          {editing ? "Update" : "Create"}
        </button>
      </form>
      <ul>
        {item.map((item) => (
          <li style={{ marginBottom: "10px" }} key={item._id}>
            {item.name}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                setEditing(item._id);
                setName(item.name);
              }}
            >
              Edit
            </button>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
