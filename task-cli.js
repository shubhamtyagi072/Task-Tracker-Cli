#!/usr/bin/env node

const fs = require("fs");

function loadTasks() {
  if (!fs.existsSync("tasks.json")) {
    return [];
  }
  const data = fs.readFileSync("tasks.json");
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
}

function addTask(description) {
  const tasks = loadTasks();
  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  const newTask = {
    id,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`Task added successfully (ID: ${id})`);
}

function updateTask(id, newDescription) {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }
  task.description = newDescription;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log(`Task ${id} updated successfully.`);
}

function deleteTask(id) {
  let tasks = loadTasks();
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks(tasks);
  console.log(`Task ${id} deleted successfully.`);
}

function markTask(id, status) {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    console.log(`Task with ID ${id} not found.`);
    return;
  }
  task.status = status;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log(`Task ${id} marked as ${status}.`);
}

function listTasks(filter) {
  const tasks = loadTasks();
  const filteredTasks = filter
    ? tasks.filter((t) => t.status === filter)
    : tasks;
  if (filteredTasks.length === 0) {
    console.log(`No tasks found.`);
    return;
  }
  filteredTasks.forEach((task) => {
    console.log(
      `ID: ${task.id}\nDescription: ${task.description}\nStatus: ${task.status}\nCreated At: ${task.createdAt}\nUpdated At: ${task.updatedAt}\n`
    );
  });
}

const args = process.argv;
const command = args[0];
const param1 = args[1];
const param2 = args[2];
console.log(`args`, "hello");
switch (command) {
  case "add":
    addTask(param1);
    break;
  case "update":
    updateTask(parseInt(param1), param2);
    break;
  case "delete":
    deleteTask(parseInt(param1));
    break;
  case "mark-in-progress":
    markTask(parseInt(param1), "in-progress");
    break;
  case "mark-done":
    markTask(parseInt(param1), "done");
    break;
  case "list":
    listTasks(param1);
    break;
  default:
    console.log("Unknown command");
}
