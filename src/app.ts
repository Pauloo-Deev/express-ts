import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello, Express!");
});

app.post("/api/product", (req, res) => {
	console.log(req.body);

	return res.send("Product received");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
