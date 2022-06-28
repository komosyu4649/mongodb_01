const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercalse: true,
  },
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("マイナスカロリー");
      }
    },
  },
});
const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
