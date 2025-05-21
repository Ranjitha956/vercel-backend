const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/students', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

const studentRoutes = require('../routes/studentRoutes');
app.use('/api/students', studentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
app.get("/", (req, res) => {
  res.send("Backend is working!");
});
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:Admin123@cluster0.uepasp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

