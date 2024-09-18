# Selichot: The Bene Israeli Tradition

<p align="center">
  <img src="https://github.com/rishn/Selichot/blob/main/assets/Selichot.png?raw=true" alt="Selichot" />
</p>

A web application to assist users in learning the Selichot prayers in the traditional Bene-Israeli form. The app features a modern UI with routes for various functionalities including login, signup, and content browsing.

## Project Structure

- **`/assets`**: Contains image assets like Selichot banners and icons.
- **`/audio`**: Contains the audio player component and its associated styles.
- **`/components`**: Contains React components for the application, including layout, header, footer, and pages such as `Dashboard`, `History`, and `Calendar`.
- **`/data`**: Contains data and configuration files such as Firebase configuration, authentication context, and file list logic.
- **`/hooks`**: Contains custom React hooks such as `useTitle` for managing document titles.
- **`/routes`**: Contains route-related components such as private route handling and 404 error pages.
- **`styles.css`**: Global CSS styles for the application.
- **`index.js`**: Entry point of the application.
- **`App.js`**: Main application component that defines

<br/><br/>
<p align="center">
  <img src="https://github.com/rishn/Selichot/blob/main/screenshots/dashboard.png?raw=true" alt="Selichot" />
</p>

## Features

- **Login and Signup:** Secure authentication using Firebase.
- **Locked Routing:** Access to specific routes is restricted based on authentication status.
- **Dashboard:** Main page for logged-in users, displaying relevant content and audio.
- **Calendar:** View Hebrew dates, Selichot schedules, and select dates to access corresponding prayers.
- **Dynamic Content:** Audio files are loaded based on the selected Hebrew date.
- **Responsive Design:** The app is optimized for various devices, with features like dynamic audio player control on date changes.
- **Polished UI:** Professional and clean interface using Ant Design components.
- **History:** Detailed information about Selichot traditions.
- **About Us:** Learn about the team behind this project.

## Usage

- **Login:** Navigate to `/login` to access the login form.
- **Signup:** Navigate to `/signup` to create a new account.
- **Dashboard:** After logging in, access the dashboard at `/`.
- **History:** View Selichot traditions at `/history`.
- **About Us:** Learn about the team at `/about_us`.
- **Calendar:** Select dates and view Selichot content at `/calendar`.

## Deployed URL

- **Visit the deployed application**: [Selichot App](https://selichot-app.web.app)

## Notes

- **Authentication:** The site uses Firebase for authentication. Users need to be logged in to access certain routes.
- **Routing:** Routes are protected to prevent unauthorized access.
- **Hebrew Date Integration:** Selichot content and audio are presented based on traditional Hebrew dates.
