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
- **`App.js`**: Main application component that defines routing and layout.

<br/><br/>
<p align="center">
  <img src="https://github.com/rishn/Selichot/blob/main/screenshots/dashboard.png?raw=true" alt="Selichot" />
</p>

## Demos
### Windows Opera Demo
<p align="center">
  <a href="https://drive.google.com/file/d/1hMvXM5y1YEM_rBOx1WZudoGyqd5i7wl1/view">
    <img src="https://github.com/user-attachments/assets/db04d91d-df11-4605-b60c-c911953e20ef" alt="Watch Windows Opera Demo" width="600">
  </a>
</p>


### Android Google Chrome Demo
<p align="center">
  <a href="https://drive.google.com/file/d/17f2OemNMUu8CeDQNkUrL1CB1Iy1j6tVd/view">
    <img src="https://github.com/user-attachments/assets/916afa0c-be75-499c-81a6-e30a21309305" alt="Watch Android Google Chrome Demo" width="600">
  </a>
</p>

## Screenshots
### Listen to Prayers
<p align="center">
  <img src="https://github.com/rishn/Selichot/blob/main/screenshots/prayers.png?raw=true" alt="Prayer Audio Player" />
</p>

### View Calendar
<p align="center">
  <img src="https://github.com/rishn/Selichot/blob/main/screenshots/calendar.png?raw=true" alt="Calendar View" />
</p>

## Features

- **Firebase Authentication:** Users can create accounts and securely sign in to personalize their experience.
- **Locked Routing:** Certain sections adapt based on authentication status, ensuring a tailored interaction.
- **Dashboard:** A dedicated space presenting curated content alongside relevant audio selections.
- **Calendar:** Displays Hebrew dates and Selichot schedules, allowing users to learn about Hebrew dates and when Selichot takes place.
- **Firebase Storage for Audio:** Prayers are dynamically retrieved and played based on the selected Hebrew date, maintaining a structured listening experience.
- **Firebase Realtime Database for Transcriptions:** Each prayer is accompanied by a structured transcription, presenting Hebrew text, its English meaning, and phonetic guidance to aid pronunciation.
- **Responsive Design:** A seamless interface that adjusts to different screen sizes while refining audio playback controls.
- **Polished UI:** A clean, modern design for an intuitive and immersive experience using AntDesign components.
- **Selichot History:** Detailed insights into the traditions and significance of Selichot.
- **Firebase Hosting:** Ensures smooth deployment and reliable access to the application.


## Usage

- **Login:** Navigate to `/login` to access the login form.
- **Signup:** Navigate to `/signup` to create a new account.
- **Dashboard:** After logging in, access the dashboard at `/`.
- **History:** View Selichot traditions at `/history`.
- **About Us:** Learn about the team at `/about_us`.
- **Calendar:** Understand Selichot prayer schedules and Hebrew dates at `/calendar`.

## Deployed URL

- **Visit the deployed application**: [Selichot App](https://selichot-app.web.app)

## Notes

- **Authentication:** The site uses Firebase for authentication. Users must be logged in to access certain routes.
- **Routing:** Routes are protected to prevent unauthorized access.
- **Hebrew Date Integration:** Selichot content and audio are based on traditional Hebrew dates.
- **Audio Files:** The current audio files are placeholders for demonstration purposes. Final audio files are expected from the client.
