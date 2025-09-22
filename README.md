# 🎓 Django Student Portal

A **simple student portal** built with Django.  
👉 *Currently, only the **homepage** is working and serves as a demo layout for the full portal.*

---

## ✨ Features

- 🏠 **Homepage** with announcements, courses, grades, and upcoming schedule  
- 🎨 **Responsive and clean web interface**  
- 📂 **Static CSS and JavaScript support**  

> 💡 More features such as authentication, dynamic data, and user dashboards are **planned for future development**.

---

## ⚙️ Installation

1. **Clone the repository**

2. **Create virtual environment**  
   python -m venv env

3. **Activate environment**

Linux/Mac:
source env/bin/activate

Windows:
env\Scripts\activate

4. **Install requirements**
pip install -r requirements.txt

5. **Run migrations**
python manage.py migrate

6. **Run server**
python manage.py runserver

7. **Open in browser**
http://127.0.0.1:8000/


📂 Project Structure
student_portal/
├── announcements/
│   ├── static/announcements/
│   │   ├── styles.css
│   │   └── script.js
│   └── templates/announcements/
│       └── home.html
├── manage.py
└── requirements.txt


🛠️ Technology Stack
Django

SQLite (default, can be configured for other databases)

HTML / CSS / JavaScript
