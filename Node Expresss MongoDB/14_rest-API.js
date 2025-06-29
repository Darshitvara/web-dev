// // JSON rest api.
const express = require("express");
const fs = require("fs");
let user_data = require("./MOCK_DATA.json"); // Use 'let' for mutability

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET all users
app.get("/users", (req, res) => {
    return res.json(user_data);
});

// GET user by ID
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = user_data.find((user) => user.user_id === id);

    if (!data) {
        return res.status(404).json({ message: "User not found." });
    }

    return res.json(data);
});

// POST a new user
app.post("/api/users", (req, res) => {
    const body = req.body;
    const newUser = { ...body, user_id: user_data.length + 1 };
    user_data.push(newUser);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(user_data, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return res.status(500).json({ message: "Failed to save user." });
        }

        return res.status(201).json({ message: "User added successfully.", data: newUser });
    });
});

// DELETE a user by ID
app.delete("/api/users", (req, res) => {
    const id = Number(req.body.id);
    const updated_user = user_data.filter((user) => user.user_id !== id);

    if (updated_user.length === user_data.length) {
        return res.status(404).json({ message: "User not found." });
    }

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updated_user, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return res.status(500).json({ message: "Failed to delete user." });
        }

        user_data = updated_user; // Update in-memory data
        return res.json({ message: `User with id ${id} successfully deleted.` });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on Port : ${PORT}`);
});

