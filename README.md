# express-ts

A minimal and professional boilerplate for building APIs with **Express** and **TypeScript**.

---

## 🚀 Features

- TypeScript with strict configuration
- Express.js for building REST APIs
- Automatic server restart with `ts-node-dev`
- Environment variables support via `.env`
- Structured project layout
- 404 fallback handler

---

## 📁 Project Structure

```
src/
 ├── app.ts        # Application entry point
 └── routes/       # (Optional) Place your routes here
```

````

---

## 🛠️ Prerequisites

Make sure you have installed:

- **Node.js** (v18 or later recommended)
- **npm** or **yarn**

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
cd express-ts
````

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the project

Start the development server:

```bash
npm run dev
```

The server will be available at:

```
http://localhost:3000
```

---

## 🔧 Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Runs the app in development mode      |
| `npm run build` | Compiles TypeScript to JavaScript     |
| `npm start`     | Runs the compiled app (if configured) |

---

## 📌 Example Endpoint

```ts
app.get("/", (req, res) => {
	res.send("Hello, Express + TypeScript!");
});
```

---

## 🧪 Error Handling

Any undefined route will return a proper **404 response**, handled by a fallback middleware at the end of `app.ts`.

---

## 📝 License

This project is open source and available under the MIT License.
