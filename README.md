

# ECC-e-learning platform 👨‍💻
Flask + React web application that allows you to add courses and participate in them 🎓👨‍🎓

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
## Tests API avec Postman ✅

Tous les tests des endpoints de l'API ont été réalisés par **Zaynab Raounak** à l'aide de [Postman], un outil performant pour tester et explorer les API REST.  

### Détails des tests effectués :

- **Création d'utilisateur (`POST /register`)** : Zaynab Raounak a vérifié l'enregistrement des utilisateurs avec des données valides et invalides.
- **Connexion (`POST /login`)** : Tests des scénarios de connexion, incluant des identifiants corrects et erronés.
- **Ajout de cours (`POST /courses`)** : Validation des autorisations et des formats de données envoyées.
- **Inscription à un cours (`POST /enroll`)** : Vérification du bon fonctionnement des inscriptions.
- **Affichage des profils (`GET /users/<id>`)** : Tests de récupération des données utilisateur pour différents profils.


Les tests réalisés par **Zaynab Raounak** ont confirmé que l'API répond correctement dans divers cas d'utilisation (succès, erreurs de validation, permissions insuffisantes). Ces tests ont permis d'identifier et de résoudre plusieurs points d'amélioration.



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

