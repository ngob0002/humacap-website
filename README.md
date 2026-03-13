# Humacap Website

This is the front-end repository for the Humacap website. Humacap is the leading preparatory provider for Canadian pharmacy exams, specializing in helping International Pharmacy Graduates (IPGs) and Pharmacy Technicians navigate the licensure process.

## Technology Stack

This application is built using:
- **React**: The core framework for the user interface.
- **Vite**: The build tool and development server for fast module replacement.
- **Tailwind CSS**: Utility-first CSS framework used for all styling.
- **Framer Motion**: Used for smooth page transitions and component animations.
- **Lucide React**: The icon library.

## Getting Started

To get the project running locally on your machine, follow these steps:

### Prerequisites

You will need **Node.js** installed on your system. 

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/ngob0002/humacap-website.git
   ```

2. Navigate into the project directory:
   ```bash
   cd humacap-website
   ```

3. Install the required Node dependencies:
   ```bash
   npm install
   ```

### Development Server

To start the local development server, run:
```bash
npm run dev
```
The application will be accessible in your web browser, typically at `http://localhost:5173`. Any changes you make to the code will automatically reflect in the browser.

## Project Structure

- `src/App.jsx`: The main application component containing all routing logic, page components, and interactive React state.
- `src/App.css`: Custom CSS styles that supplement Tailwind.
- `src/index.css`: The root CSS file where Tailwind directives are imported.
- `src/main.jsx`: The React entry point that renders the `App` component into the DOM.

## Key Features

- **Dynamic Routing**: Single-page application navigation between Home, Courses (Pharmacist OSCE, Technician OSCE, Math Prep), About, and Resources.
- **Stripe Integration**: Checkout functionality linking directly to Stripe Payment Links.
- **Contact Form**: Integrated with formsubmit.co for capturing user inquiries.
