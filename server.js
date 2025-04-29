const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log("Successfully connected to MongoDB Atlas"))
.catch(err => console.error(" Connection failed:", err.message));


const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  level: { type: String, required: true },
  address: { type: String, required: true }
});

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true }
});

// Models
const Student = mongoose.model("Student", studentSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);


// 1. Add hardcoded student 
app.post('/addStudentHardcoded', async (req, res) => {
  const newStudent = new Student({
    name: "Ahmed Mohamed",
    age: 20,
    level: "Third Year",
    address: "Cairo, Egypt"
  });

  try {
    await newStudent.save();
    res.send("Hardcoded student added successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// 2. Add student from request body Add multiple students (Ahmed osama)
app.post('/addStudents', async (req, res) => {
  try {
    const students = await Student.insertMany(req.body);
    res.send("Students added successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});


// 3. Get all students(Ahmed Foud)
app.get('/getstudents', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// 4. Add doctor from request body(abdelrahman abdallah)
app.post('/addDoctors', async (req, res) => {
  try {
    const doctors = await Doctor.insertMany(req.body);
    res.send("Doctors added successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});


// 5. Get all doctors (Ahmed Eldeep)
app.get('/getDoctor', async (req, res) => {
  try {
    const doctors = await Doctor.find({ name: { $exists: true } }); 
    res.json(doctors);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// 6. Delete student(Ahmed Ramadan)
app.delete('/deleteStudent', async (req, res) => {
  const { name } = req.query;

  try {
    const result = await Student.deleteOne({ name });
    if (result.deletedCount === 0) {
      return res.status(404).send("Student not found");
    }
    res.send("Student deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// 7. Update doctor name(Ahmed Dararwish)
app.put('/updateDoctor', async (req, res) => {
  const { oldName, newName } = req.query;

  try {
    const result = await Doctor.updateOne(
      { name: oldName },
      { $set: { name: newName } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).send("Doctor not found or name unchanged");
    }
    res.send("Doctor name updated successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// 8. Get all data (students and doctors)(Ahmed islam)
app.get('/allData', async (req, res) => {
  try {
    const [students, doctors] = await Promise.all([
      Student.find(),
      Doctor.find({ name: { $exists: true } }) 
    ]);
    res.json({ students, doctors });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete('/deleteAllStudents', async (req, res) => { //Ahmed Darawish
  try {
    await Student.deleteMany({});
    res.send("All students deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete('/deleteAllDoctors', async (req, res) => {
  try {
    await Doctor.deleteMany({});
    res.send("All doctors deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
