const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: String,
    status: String,
    content: String,
    timeStart: Date,
    timeFinish: Date,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  },
);

// Nếu muốn collection là "tasks" thì bỏ tham số thứ 3: mongoose.model("Task", taskSchema)
const Task = mongoose.model("Task", taskSchema, "task");

module.exports = Task;
