# Listify App

## Technologies

- JavaScript
- Firebase
- HTML
- CSS

## Overview

Listify is a simple and intuitive to-do list application built using JavaScript and Firebase. The app allows users to add, view, and delete items in a list. It includes both a web version and a basic structure for mobile compatibility using Expo.

## Features

- **Add Items**: Users can add new items to their to-do list.
- **View Items**: Users can view the items in their to-do list.
- **Delete Items**: Users can delete items from their to-do list by double-clicking on them.
- **Firebase Integration**: All list items are stored in a Firebase real-time database, ensuring data persistence across sessions.
- **Responsive Design**: The app is designed to work on both web and mobile platforms.

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- Firebase account for real-time database

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Listify.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd Listify-App
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

### Running the Web App

1. **Navigate to the project directory**:
   ```bash
   cd Listify-App
   ```
2. **Open `index.html` in your preferred web browser**.

## Project Structure

```plaintext
Listify-App/
├── assets/
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── logo.png
├── Listify/
│   ├── .gitignore
│   ├── App.js
│   ├── app.json
│   ├── babel.config.js
│   ├── package-lock.json
│   ├── package.json
├── index.html
├── README.md
├── script.js
├── site.webmanifest
├── styles.css
```

## Acknowledgements

This project utilizes Firebase for the real-time database.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
