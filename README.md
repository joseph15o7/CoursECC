# CoursEcc 📚

**CoursEcc** is a student-focused platform designed to facilitate learning and engagement in programming and other courses. The platform provides an intuitive interface and a range of features to help students explore, learn, and interact seamlessly.


![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Features ⭐

- Registration, logging in and logging out
- Editing profile
- Adding programming courses with lessons
- Enrollment in other courses
- Viewing profiles of other users
- Watching video lessons


## API Testing with Postman ✅

All API endpoint tests were conducted by **Zaynab Raounak** using [Postman], a powerful tool for testing and exploring REST APIs.  

### Details of the tests performed:

- **User Creation (`POST /register`)**: Zaynab Raounak verified user registration with both valid and invalid data.
- **Login (`POST /login`)**: Tested login scenarios, including correct and incorrect credentials.
- **Adding Courses (`POST /courses`)**: Validated permissions and the format of the data sent.
- **Course Enrollment (`POST /enroll`)**: Verified the proper functioning of enrollments.
- **Profile Display (`GET /users/<id>`)**: Tested retrieval of user data for different profiles.

The tests conducted by **Zaynab Raounak** confirmed that the API responds correctly in various use cases (success, validation errors, insufficient permissions). These tests helped identify and resolve several areas for improvement.



## Backend Setup 🚀

```bash
  $ cd BackEnd
```

Install requirements:
```bash
  $ pip install -r requirements.txt
```

Set the FLASK_APP variable:
```bash
  $ set FLASK_APP=rest_api_run.py
```

Run backend:
```bash
  $ python rest_api_run.py
```



## Frontend Setup 🚀

Use node JS version 16-18
```bash
    $ nvm use 18
```
```bash
    $ export NODE_OPTIONS=--openssl-legacy-provider
```


Start the React frontend:
```bash
  $ cd FrontEnd
```
```bash
  $ npm install
```
Run frontend:
```bash
  $ npm start
```

