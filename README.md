# 🏥 CuraNet - Hospital Management System

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![Angular](https://img.shields.io/badge/Angular-18-dd0031.svg) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2-6db33f.svg)

**CuraNet** is a modern, full-stack **Hospital Management System** designed to streamline healthcare operations. It bridges the gap between patients, doctors, and administrators through a secure, responsive, and intuitive digital platform.

---

## 🚀 Features

### 🔹 Patient Portal
- **Smart Dashboard:** View upcoming appointments, medical history, and prescriptions.
- **Appointment Booking:** Seamlessly book appointments with preferred doctors.
- **Emergency Card:** QR-code based digital health card for critical information.
- **Medical Records:** Secure cloud storage for reports and prescriptions.

### 🔹 Doctor Portal
- **Patient Queue:** Real-time view of waiting patients with urgency status.
- **Digital Prescriptions:** Create and manage prescriptions digitally.
- **Appointment Management:** Accept, reschedule, or cancel appointments.
- **Patient History:** Access complete patient medical history instantly.

### 🔹 Admin Dashboard
- **System Overview:** Monitor total patients, doctors, and appointments.
- **User Management:** Onboard new doctors and manage staff credentials.
- **Data Analytics:** (Future Scope) Insights into hospital performance.

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Angular 18, TypeScript, Bootstrap 5, FontAwesome |
| **Backend** | Java 17, Spring Boot 3.2, Spring Security (JWT) |
| **Database** | MySQL 8.0 |
| **Build Tools** | Maven, Angular CLI |
| **Security** | JWT Authentication, BCrypt Password Hashing |

---

## 📸 Screenshots

### 1. **Home Page**
*A premium landing page with immersive hero section and feature highlights.*
*(Add screenshot here)*

### 2. **Patient Dashboard**
*User-friendly dashboard for managing health records.*
*(Add screenshot here)*

### 3. **Admin Dashboard**
*Powerful control center for hospital administration.*
*(Add screenshot here)*

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** (v18+) & **npm**
- **Java JDK** (v17+)
- **MySQL Server**
- **Maven**

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/mukundjha-mj/Angular_SpringBoot-HospitalManagementSystem.git
cd Angular_SpringBoot-HospitalManagementSystem
```

### 2️⃣ Backend Setup
Navigate to the backend directory and configure the database.

1. Open `src/main/resources/application.properties`.
2. Update your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/hospital_db
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```
3. Run the application:
   ```bash
   cd HospitalManagementSystem-SpringBoot-Backend-Services
   mvn spring-boot:run
   ```
   *The backend will start on port `9090`.*

### 3️⃣ Frontend Setup
Navigate to the frontend directory.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open your browser and visit `http://localhost:4200`.

---

## 🔑 Default Credentials

| Role | Username | Password |
|------|----------|----------|
| **Admin** | `admin` | `admin123` |
| **Doctor** | `mukund` | `Mukund@3208` |

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/mukundjha-mj">Mukund Jha</a></sub>
</div>
