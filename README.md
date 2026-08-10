# Task Tracker

A lightweight and efficient task management application built with **TypeScript**. The application allows users to create, manage, and organize tasks by priority while providing real-time statistics to help improve productivity.

## Project Demo (doesnot work)

The demo below showcases the Task Tracker application, including task management, priority assignment, and real-time productivity statistics.

![Task Tracker Demo](/project.gif)

## Features

* **Task Management**: Add, update, complete, and remove tasks easily.
* **Priority Levels**: Assign **High**, **Medium**, or **Low** priority to keep important tasks organized.
* **Task Analytics & Statistics**: View total tasks, active tasks, completed tasks, completion rates, and task breakdown by priority.
* **Real-Time Data**: See task status and productivity statistics update immediately as tasks are modified.
* **TypeScript**: Uses TypeScript with strict type checking for safer and more maintainable code.

## Tech Stack

* **Language**: TypeScript
* **Frontend**: HTML, CSS, TypeScript
* **JavaScript Target**: ES2022
* **Module System**: ES Modules
* **Compiler**: TypeScript (`tsc`)
* **Development Server**: VS Code Live Server

## Project Structure

```text
task-tracker/
├── dist/                # Compiled JavaScript output
│   └── main.js
├── src/                 # TypeScript source code
│   └── main.ts
├── images/              # Project images and demo GIF
│   └── task-tracker-demo.gif
├── index.html           # Main HTML entry point
├── package.json         # Project configuration and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Development

Install the project dependencies:

```bash
npm install
```

Compile the TypeScript files:

```bash
npx tsc
```

Or use watch mode during development:

```bash
npm run watch
```

Then open `index.html` using the **Live Server** extension in VS Code.

## TypeScript to Browser Workflow

```text
src/main.ts
     │
     │ TypeScript compiler (tsc)
     ▼
dist/main.js
     │
     │ loaded by
     ▼
index.html
     │
     ▼
Web Browser
```

The browser runs the compiled JavaScript generated from the TypeScript source files.
## Project Preview

![Task Tracker Project Preview](/project.png)





# Task Tracker: Project Setup & Initialization

This repository contains the foundational setup for a multi-day TypeScript Task Tracker application.

## Project Overview

The objective of this project is to establish a clean development environment using **Node.js**, **npm**, and the **TypeScript compiler (`tsc`)**, configured to use **ES2022 modules**.

The application runs in the browser using an HTML entry point and the JavaScript generated from the TypeScript source files.

## Prerequisites

Before getting started, make sure you have:

* **Node.js** (LTS version recommended)
* **npm** (included with Node.js)
* **Visual Studio Code**
* **Live Server** extension for VS Code

## Quick Start

### 1. Check Node.js and npm

Open a terminal and verify that Node.js and npm are installed:

```bash
node -v
npm -v
```

### 2. Clone the repository

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/ashahsana/task-tracker.git
cd task-tracker
```

### 3. Install dependencies

Install the project dependencies:

```bash
npm install
```

### 4. Compile TypeScript

Compile the TypeScript source files:

```bash
npx tsc
```

This generates the compiled JavaScript files inside the `dist` directory.

### 5. Run the application

Because this is a browser-based application, open `index.html` using **Live Server** in VS Code.

1. Open the project in VS Code.
2. Open `index.html`.
3. Right-click the file.
4. Select **Open with Live Server**.
5. The application will open in your browser.

---

# Manual Setup

If you are building the project from scratch instead of cloning the repository, follow these steps.

## 1. Initialize the project

Create a new project directory and initialize npm:

```bash
npm init -y
```

## 2. Install TypeScript

Install TypeScript as a development dependency:

```bash
npm install --save-dev typescript
```

## 3. Generate the TypeScript configuration

Create the TypeScript configuration file:

```bash
npx tsc --init
```

## Project Configuration

### `tsconfig.json`

Configure TypeScript as follows:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  },
  "include": ["src/**/*.ts"]
}
```

### Configuration Explanation

* `target: "ES2022"` — Compiles TypeScript to ES2022 JavaScript.
* `module: "ES2022"` — Uses modern ES modules.
* `rootDir: "./src"` — Specifies the TypeScript source directory.
* `outDir: "./dist"` — Specifies where compiled JavaScript files are generated.
* `strict: true` — Enables strict TypeScript type checking.
* `include` — Tells TypeScript to compile `.ts` files inside the `src` directory.

## `package.json`

Configure `package.json` with `"type": "module"` and a TypeScript watch script:

```json
{
  "name": "task-tracker",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "watch": "tsc --watch"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

> **Note:** The `npm run dev` command is not used in this setup because no `dev` script is defined in `package.json`. Use `npm run watch` instead.

---

# Project Structure

After setup, the project should have a structure similar to:

```text
task-tracker/
├── dist/                # Compiled JavaScript output
│   └── main.js
├── src/                 # TypeScript source files
│   └── main.ts
├── index.html           # Main HTML entry point
├── package.json         # npm configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

> **Note:** The `dist/` directory and compiled JavaScript files are generated by the TypeScript compiler.

---

# Running the Application

## Option 1: Compile TypeScript Once

To compile the TypeScript files once, run:

```bash
npx tsc
```

For example:

```text
src/main.ts
      │
      │ TypeScript compiler
      ▼
dist/main.js
```

## Option 2: Watch Mode

During development, it is recommended to use TypeScript's watch mode:

```bash
npm run watch
```

The compiler will monitor your TypeScript files and automatically recompile them whenever changes are detected.

Keep this terminal running while developing.

---

# Running the Application in the Browser

This project is designed to run in a web browser.

## Using Live Server

1. Install the **Live Server** extension in VS Code.
2. Start TypeScript watch mode:

```bash
npm run watch
```

3. Open `index.html` in VS Code.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. The application will open in your default browser.

---

# Connecting TypeScript to HTML

The browser should load the **compiled JavaScript file**, not the TypeScript source file.

In `index.html`, use:

```html
<script type="module" src="./dist/main.js"></script>
```

Do **not** use:

```html
<script type="module" src="./src/main.ts"></script>
```

The application flow is:

```text
src/main.ts
     │
     │ TypeScript compiler
     ▼
dist/main.js
     │
     │ loaded by
     ▼
index.html
     │
     ▼
Web Browser
```

---

# Development Workflow

For normal development, use the following workflow:

### Terminal

Start the TypeScript compiler in watch mode:

```bash
npm run watch
```

### VS Code

Open `index.html` with **Live Server**.

### When you modify TypeScript

Edit files inside:

```text
src/
```

For example:

```text
src/main.ts
```

TypeScript will automatically compile the changes into:

```text
dist/main.js
```

Refresh the browser to see the changes.

---

# Summary

The main development commands are:

```bash
# Install dependencies
npm install

# Compile TypeScript once
npx tsc

# Automatically compile TypeScript while developing
npm run watch
```

Then open `index.html` using **Live Server**.

> **Important:** This project uses TypeScript for development, but the browser executes the compiled JavaScript in `dist/`. The `.ts` files should not be loaded directly by the browser.
