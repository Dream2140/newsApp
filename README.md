
# MERN Stack News Application

This is a MERN stack news app with news line, acticle pages with comments list, admin and user profile pages.

<b>Note:</b> The appearance of the application has not been the primary focus of this project, hence no CSS code has been written yet.

## Technologies Used 

# News App: MERN Stack News Application

This is a MERN stack news app with news line, acticle pages with comments list, admin and user profile pages.

<b>Note:</b> The appearance of the application has not been the primary focus of this project, hence no CSS code has been written yet.

## Backend

The backend is built with Node.js and Express, and uses MongoDB as the database. It follows the controller-service-repository pattern, and uses Mongoose as an object data modeling (ODM) tool. It also uses Joi validator to validate the input data and handle errors. The backend exposes RESTful APIs for CRUD operations on news, users and comments.

## Frontend

The frontend is built with React and Redux, and uses Redux Thunk as a middleware for asynchronous actions. It also uses Axios as an HTTP client to communicate with the backend. The frontend uses Material UI 5 as a component library for the user interface. The frontend does not focus on the appearance of the application, and does not use CSS code.

## Future Updates

Some possible improvements for the future are:
- Add CSS code to style the frontend and improve the user experience.
- Add like/dislike functionality for news articles and comments.
- Add function of update news by admin.
- Add Redis cache to improve the performance and scalability of the backend.

## Live Version

The live version of this application is available at https://dream2140.github.io/newsApp/. You can explore the application and test its features.

## How to run

To run this project locally, you need to have Node.js, MongoDB and npm installed on your machine. Then follow these steps:

- Clone this repository to your local machine.
- In the root folder, run npm install to install the dependencies for the backend.
- In the client folder, run npm install to install the dependencies for the frontend.
- In the root folder, create a .env file and add your MongoDB connection string and JWT secret key as environment variables.
- In the root folder, run npm run dev to start the backend and the frontend concurrently.
- Open your browser and go to http://localhost:3000 to see the application.


