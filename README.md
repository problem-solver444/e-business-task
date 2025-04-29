
# E-Business API Project

## 📋 Overview
This project is a simple **RESTful API** built with **Node.js**, **Express.js**, and **MongoDB Atlas**, designed for managing students and doctors' data online.  
The project was created for the **E-Business** course assignment.

## 🚀 Features
- Add a hardcoded student.
- Add multiple students from request body.
- Retrieve all students.
- Add multiple doctors.
- Retrieve all doctors.
- Delete a student by name.
- Update a doctor's name.
- Retrieve all data (students and doctors).
- Delete all students.
- Delete all doctors.

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## 📂 Installation

```bash
# 1. Clone the repository
git clone <repository-url>

# 2. Navigate to the project directory
cd project-folder

# 3. Install dependencies
npm install

# 4. Run the server
node index.js
```

The server will run at:  
`http://localhost:3000`

## 📚 API Endpoints

| Method | Endpoint                                     | Description                    |
|:------:|:---------------------------------------------|:-------------------------------|
| POST   | `/addStudentHardcoded`                       | Add a hardcoded student.       |
| POST   | `/addStudents`                               | Add multiple students.         |
| GET    | `/getstudents`                               | Retrieve all students.         |
| POST   | `/addDoctors`                                | Add multiple doctors.          |
| GET    | `/getDoctor`                                 | Retrieve all doctors.          |
| DELETE | `/deleteStudent?name=studentName`             | Delete a student by name.      |
| PUT    | `/updateDoctor?oldName=xxx&newName=yyy`       | Update a doctor's name.        |
| GET    | `/allData`                                   | Retrieve all students and doctors. |
| DELETE | `/deleteAllStudents`                         | Delete all students.           |
| DELETE | `/deleteAllDoctors`                          | Delete all doctors.            |

## 🧑‍💻 Contributors
- Ahmed Ashraf
- Ahmed Osama
- Ahmed Fouad
- Abdelrahman Abdallah
- Ahmed Eldeep
- Ahmed Ramadan
- Ahmed Darawish
- Ahmed Islam

## 📌 Notes
- Ensure you have a stable internet connection to connect to **MongoDB Atlas**.
- Make sure the MongoDB URI is valid and updated in the code.
- You can use tools like **Postman** or **Thunder Client** to test the API endpoints easily.
