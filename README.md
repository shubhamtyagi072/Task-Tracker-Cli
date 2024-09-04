# Task CLI

A simple command-line interface (CLI) tool to manage tasks. This tool allows you to add, update, delete, and list tasks, as well as mark them as "in-progress" or "done."

with taken from [https://roadmap.sh/projects/task-tracker](https://roadmap.sh/projects/task-tracker)

## Features

- Add tasks
- Update tasks
- Delete tasks
- Mark tasks as in-progress or done
- List tasks based on their status (todo, in-progress, done)
- Store tasks in a JSON file

## Requirements

- Node.js (v12 or higher)
- zsh or any Unix-like shell (bash, zsh, etc.)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/shubhamtyagi072/Task-Tracker-Cli
cd task-cli
```

### 2. Make the Script Executable

```bash
chmod +x task-cli.js
```

### 3. Global Installation with npm link

```bash
npm link
```

### 4. Manual PATH Setup (Alternative)

```bash
sudo cp task-cli.js /usr/local/bin/task-cli
```

```bash
sudo ln -s /path/to/your/task-cli.js /usr/local/bin/task-cli
```

```bash
echo $PATH
```

If not, add it by editing your .zshrc or .bashrc file:

```bash
export PATH="/usr/local/bin:$PATH"
```

Source your profile:

```bash
source ~/.zshrc
```
