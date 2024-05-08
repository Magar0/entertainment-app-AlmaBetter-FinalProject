# `Entertainment App using MERN stack`

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [API Endpoints](#api-endpoints)

## General info
<img src="https://github.com/Magar0/entertainment-app-AlmaBetter-FinalProject/assets/35245789/bcb6ba7f-b403-4439-8d3f-ea51392d7cec" height="350" >

* Developed a feature-rich entertainment platform for browsing videos using the MERN stack (MongoDB, Express.js, React.js, Node.js)
* Developed a responsive platform accross all devices including mobiles & tablets.
* Implemented secure user authentication and authorization using Firebase.
* Enabled extensive user interaction with adding and removing bookmark.
* Leveraged Node.js, Express.js, Firebase, and other technologies for a robust and scalable backend foundation.
* Employed Redux Toolkit for efficient state management and data flow.

## Technologies
* MERN stack
* React JS
* Redux Toolkit, React Router.
* Node JS., Express JS.
* Firebase
* Mongo DB.
	
## Setup
1. Set up environment variables:
   - Create a `.env` file in the `client` directory.
   - Add the following variables to the `.env` file, replacing the placeholder values with your actual credentials:
     ```
      VITE_API_URL= https://entertainment-backend.vercel.app
      VITE_TMDB_API_KEY=c01301f87746b51bb0da256c5d3f59d0

      VITE_FIREBASE_API_KEY=  your firebase api key
      VITE_FIREBASE_AUTH_DOMAIN= your firebase auth domain
      VITE_FIREBASE_PROJECT_ID=  your firebase project id
      VITE_FIREBASE_STORAGE_BUCKET = your firebase storage bucket
      VITE_FIREBASE_MESSAGING_SENDER_ID=  your firebase messaging sender id
      VITE_FIREBASE_APP_ID=  your firebase app id
      VITE_FIREBASE_MEASUREMENT_ID =  your firebase measurement id
     ```

   - Create a `.env` file in the `server` directory.
   - Add the following variables to the `.env` file, replacing the placeholder values with your actual credentials:
     ```
       FIREBASE_ADMIN_SDK_KEY_PATH= "path to the firebase service key file"
       MONGO_URI= "Your Mongo DB URI"
     ```
2. Install dependencies and run server:
#### Frontend
```
 cd ../client
 npm install
 npm start
```
#### Backend
```
cd ../server
npm install
npm start
```

## API Endpoints
| Endpoint | Description | Method | Request Body | Response Format (Example) | Authentication |
|---|---|---|---|---|---|
| `/` | Get server status | GET | None | "Server is now Listening"  | None |
| `/movies` | Get trending or searched movies (paginated) | GET | Query parameters: <br> * `page` (optional): Page number (default: 1) <br> * `limit` (optional): Number of movies per page (default: 8) <br> * `search` (optional): Search query string  | JSON (`{ movies: [], totalPages: number, totalDocuments: number, currentPage: number }`) | None |
| `/movies/details/:id` | Get details of a specific movie | GET | Path parameter: `id` | JSON (`{ details: {...}, cast: [...] }`) | None |
| `/tvseries` | Get trending or searched TV series (paginated) | GET | Query parameters: <br> * `page` (optional): Page number (default: 1) <br> * `limit` (optional): Number of TV series per page (default: 8) <br> * `search` (optional): Search query string  | JSON (`{ tvSeries: [], totalPages: number, totalDocuments: number, currentPage: number }`) | None |
| `/tvseries/details/:id` | Get details of a specific TV series | GET | Path parameter: `id` | JSON (`{ details: {...}, cast: [...] }`) | None |
| `/bookmark` | Get user bookmarks (requires authentication) | GET | None | JSON (`[{ id: number, mediatype: string }, ...]`) | JWT token in authorization header |
| `/bookmark/add` | Add a movie or TV series to user bookmarks (requires authentication) | POST | Body parameters: <br> * `movieId`: ID of the movie or TV series <br> * `mediaType`: "movies" or "tvseries" | JSON (`{ message: "Added bookmark Successfully" }` or `{ message: "Bookmark already exists" }`) | JWT token in authorization header |
| `/bookmark/remove` | Remove a movie or TV series from user bookmarks (requires authentication) | POST | Body parameters: <br> * `movieId`: ID of the movie or TV series <br> * `mediaType`: "movies" or "tvseries" | JSON (`{ message: "Removed bookmark Successfully" }`) | JWT token in authorization header |

**Notes:**

* All endpoints support JSON responses.
* Authentication is required for `/bookmark` endpoints using a JWT token in the authorization header.
* Some endpoints support optional query parameters for pagination and search.
* Specific details about the response format (data types, properties) for movie and TV series data can be found in the corresponding models (e.g., `Movie`, `TvSeriesDetails`).

# `Entertainment App using MERN stack`

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [API Endpoints](#api-endpoints)

## General info

* Developed a feature-rich entertainment platform for browsing videos using the MERN stack (MongoDB, Express.js, React.js, Node.js)
* Developed a responsive platform accross all devices including mobiles & tablets.
* Implemented secure user authentication and authorization using Firebase.
* Enabled extensive user interaction with adding and removing bookmark.
* Leveraged Node.js, Express.js, Firebase, and other technologies for a robust and scalable backend foundation.
* Employed Redux Toolkit for efficient state management and data flow.

## Technologies
* MERN stack
* React JS
* Redux Toolkit, React Router.
* Node JS., Express JS.
* Firebase
* Mongo DB.
	
## Setup
1. Set up environment variables:
   - Create a `.env` file in the `client` directory.
   - Add the following variables to the `.env` file, replacing the placeholder values with your actual credentials:
     ```
      VITE_API_URL= https://entertainment-backend.vercel.app
      VITE_TMDB_API_KEY=c01301f87746b51bb0da256c5d3f59d0

      VITE_FIREBASE_API_KEY=  your firebase api key
      VITE_FIREBASE_AUTH_DOMAIN= your firebase auth domain
      VITE_FIREBASE_PROJECT_ID=  your firebase project id
      VITE_FIREBASE_STORAGE_BUCKET = your firebase storage bucket
      VITE_FIREBASE_MESSAGING_SENDER_ID=  your firebase messaging sender id
      VITE_FIREBASE_APP_ID=  your firebase app id
      VITE_FIREBASE_MEASUREMENT_ID =  your firebase measurement id
     ```

   - Create a `.env` file in the `server` directory.
   - Add the following variables to the `.env` file, replacing the placeholder values with your actual credentials:
     ```
       FIREBASE_ADMIN_SDK_KEY_PATH= "path to your firebase service key file"
       MONGO_URI= "your Mongo Db URI"
     ```
2. Install dependencies and run server:
#### Frontend
```
 cd ../client
 npm install
 npm start
```
#### Backend
```
cd ../server
npm install
npm start
```

## API Endpoints
| Endpoint | Description | Method | Request Body | Response Format (Example) | Authentication |
|---|---|---|---|---|---|
| `/` | Get server status | GET | None | "Server is now Listening"  | None |
| `/movies` | Get trending or searched movies (paginated) | GET | Query parameters: <br> * `page` (optional): Page number (default: 1) <br> * `limit` (optional): Number of movies per page (default: 8) <br> * `search` (optional): Search query string  | JSON (`{ movies: [], totalPages: number, totalDocuments: number, currentPage: number }`) | None |
| `/movies/details/:id` | Get details of a specific movie | GET | Path parameter: `id` | JSON (`{ details: {...}, cast: [...] }`) | None |
| `/tvseries` | Get trending or searched TV series (paginated) | GET | Query parameters: <br> * `page` (optional): Page number (default: 1) <br> * `limit` (optional): Number of TV series per page (default: 8) <br> * `search` (optional): Search query string  | JSON (`{ tvSeries: [], totalPages: number, totalDocuments: number, currentPage: number }`) | None |
| `/tvseries/details/:id` | Get details of a specific TV series | GET | Path parameter: `id` | JSON (`{ details: {...}, cast: [...] }`) | None |
| `/bookmark` | Get user bookmarks (requires authentication) | GET | None | JSON (`[{ id: number, mediatype: string }, ...]`) | JWT token in authorization header |
| `/bookmark/add` | Add a movie or TV series to user bookmarks (requires authentication) | POST | Body parameters: <br> * `movieId`: ID of the movie or TV series <br> * `mediaType`: "movies" or "tvseries" | JSON (`{ message: "Added bookmark Successfully" }` or `{ message: "Bookmark already exists" }`) | JWT token in authorization header |
| `/bookmark/remove` | Remove a movie or TV series from user bookmarks (requires authentication) | POST | Body parameters: <br> * `movieId`: ID of the movie or TV series <br> * `mediaType`: "movies" or "tvseries" | JSON (`{ message: "Removed bookmark Successfully" }`) | JWT token in authorization header |

**Notes:**

* All endpoints support JSON responses.
* Authentication is required for `/bookmark` endpoints using a Firebase token in the authorization header.
* Some endpoints support optional query parameters for pagination and search.


