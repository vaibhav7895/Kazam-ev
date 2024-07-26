const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://assignment_user:HCgEj5zv8Hxwa4xO@testcluster.6f94f5o.mongodb.net/assignment', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ItemSchema = new mongoose.Schema({
    text: String,
});

const Item = mongoose.model('Item_vaibhav', ItemSchema);

// Add new item
app.post('/add', async (req, res) => {
    const newItem = new Item({ text: req.body.text });
    await newItem.save();
    res.status(201).send(newItem);
});

// Fetch all items
app.get('/fetchAllTasks', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
