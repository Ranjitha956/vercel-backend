const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes'); // Make sure this path is correct

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection using Atlas (remote DB)
mongoose.connect('mongodb+srv://admin:MyStrongPassword123%40@cluster0.uepasp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection failed:", err));

// Routes
app.use('/api/students', studentRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
