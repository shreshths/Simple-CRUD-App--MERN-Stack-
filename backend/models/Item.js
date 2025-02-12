import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model("Item", ItemSchema);
