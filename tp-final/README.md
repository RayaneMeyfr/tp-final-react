## TP Final : Application de Notes Sécurisées (React + Routing + JWT)

### 🎯 Objectif
Créer une **application React multi-pages** permettant à un utilisateur authentifié via **JWT** de gérer ses notes (**CRUD**) en communiquant avec un **backend Spring Boot sécurisé**.  
Ce projet aborde :
- le **routing**,
- les **routes protégées**,
- la **gestion d’un token JWT**,
- l’intégration d’un **backend externe**.

---

### 📋 Spécifications
- Projet réalisé en **React**
- Utilisation d’une **API Spring Boot** (hébergée dans un conteneur Docker) :  
  👉 [Image Docker Hub](https://hub.docker.com/r/christopheutp/note-backend)

---

### ⚙️ Prérequis
Avant de lancer le projet, il faut avoir installé :
- **Node.js** (gestionnaire de packages `npm`)
- **Docker** (pour exécuter l’API en local)

---

### 🚀 Mise en place

1. **Lancer l’API avec Docker**
   ```bash
   docker run -d -p 8080:8080 christopheutp/note-backend
