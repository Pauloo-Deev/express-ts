import express, { Request, Response } from "express";
import { get } from "node:http";

const app = express();

function showPath(req: Request, res: Response, next: Function) {
	console.log(`Requested Path: ${req.path}`);
	next();
}

app.use(showPath);

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello, Express!");
});

app.post("/api/product", (req, res) => {
	console.log(req.body);

	return res.send("Product received");
});

app.get("/error", (req: Request, res: Response) => {
	try {
		throw new Error("This is a test error");
	} catch (error) {
		console.error(error);
		return res.status(500).send("Internal Server Error");
	}
});

app.get("/api/data", (req: Request, res: Response) => {
	return res.json({ name: "Shirt", price: 19.99, inStock: false });
});

app.get("/api/product/:id", (req: Request, res: Response) => {
	const { id } = req.params;
	return res.send(`Product ID requested: ${id}`);
});

app.get(
	"/api/product/:category/:subcategory",
	(req: Request, res: Response) => {
		const { category, subcategory } = req.params;
		return res.send(`Category: ${category}, Subcategory: ${subcategory}`);
	},
);

app.get("/api/user/:userId", getUserHandler);

function getUserHandler(req: Request, res: Response) {
	const { userId } = req.params;
	return res.send(`User ID requested: ${userId}`);
}

function checkAdmin(req: Request, res: Response, next: Function) {
	const isID = req.params.userId === "123";
	if (!isID) {
		return res.status(403).send("Access denied. Admins only.");
	}
	next();
}

app.get(
	"/api/user/:userId/access",
	checkAdmin,
	(req: Request, res: Response) => {
		const { userId } = req.params;
		return res.send(`Admin access granted to user ID: ${userId}`);
	},
);

app.get(
	"/api/user/:userId/details/:name",
	(
		req: Request<{ userId: string; name: string }>,
		res: Response<{ status: boolean }>,
	) => {
		const { userId, name } = req.params;
		console.log(`UserID: ${userId}, Name: ${name}`);
		return res.json({ status: true });
	},
);

app.use((req, res) => {
	if (req.method === "POST") {
		return res.status(404).send("API route not found");
	} else if (req.method === "GET") {
		return res.status(404).send("Page not found");
	}

	return res.status(404).send("Route not found");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
