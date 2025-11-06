#  Movie App with Dummy Authentication

A simple React application that displays trending movies from TMDB API and includes a dummy login & register system using `localStorage` for token storage.

---

##  Features

-  Dummy **Login** and **Register** pages  
-  Token-based route protection using `localStorage`  
-  Fetches **Trending Movies** from TMDB API  
-  Interactive movie **details modal**  
-  Pagination for movies  
-  Built with **Tailwind CSS** for styling  

---

##  Tech Stack

- **React 18+**
- **React Router v6**
- **Tailwind CSS**
- **TMDB API**

---

##  Project Setup


```bash
git@github.com:JAPH254/Tech-leap-Movie-Explorer.git
cd movie-app
```
install the dependencies
```
npm install
```
Create .env on the project root and add the following
```
VITE_TMDB_API_KEY=tmdb_api_key
```
If you don’t have one, sign up at https://www.themoviedb.org/
 run the app
 ```
npm run dev
```
view it using
http://localhost:5173