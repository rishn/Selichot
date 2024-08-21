# Selichot: The Bene Israeli Tradition

A web application to assist users in learning the Selichot prayers in the traditional Bene-Israeli form. The app features a modern UI with routes for various functionalities including login, signup, and content browsing.

## Project Structure

- **`/components`**: Contains React components for the application, including layout, header, footer, and pages.
- **`/data`**: Contains data and configuration files such as Firebase configuration and private route logic.
- **`/hooks`**: Contains custom React hooks such as `useTitle` for managing document titles.
- **`/styles.css`**: Global CSS styles for the application.
- **`index.js`**: Entry point of the application.
- **`App.js`**: Main application component that defines routing and layout.

## Features

- **Login and Signup:** Secure authentication using Firebase.
- **Dashboard:** Main page for logged-in users.
- **History:** Detailed information about Selichot traditions.
- **About Us:** Information about authors and contributors.
- **Calendar:** Calendar view for selecting dates and viewing content.
- **Responsive Design:** Modern UI with Ant Design components.

## Usage

- **Login:** Navigate to `/login` to access the login form.
- **Signup:** Navigate to `/signup` to create a new account.
- **Dashboard:** After logging in, access the dashboard at `/`.
- **History:** View Selichot traditions at `/history`.
- **About Us:** Learn about the team at `/about_us`.
- **Calendar:** Select dates and view content at `/calendar`.

## Notes

- **Authentication:** The site uses Firebase for authentication. Users need to be logged in to access certain routes.
- **Routing:** Ensure routes are protected properly to prevent unauthorized access.

---
