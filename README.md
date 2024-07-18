#My Portfolio Website
Introduction
This is a personal portfolio website created using React and JavaScript. The website is styled using component-level styling with styled-components, without the use of separate CSS files. The portfolio includes sections such as About, Contact, Education, Hero Section, Navbar, Projects, and Skills.

Features
Dynamic Bio and Skills: The bio and skills information is dynamically updated through the data/constants.js file.
Project Details: Projects, including descriptions, start and end dates, technologies used, and images, are detailed in data/projects.js.
Component-Level Styling: All components are styled within their respective JavaScript files using styled-components.
Image Management: Images for projects, hero section, and personal use can be uploaded to the src/images directory.
Folder Structure
src/components/ - Contains all the main components of the portfolio.
About/
ContactUs/
Education/
HeroSection/
Navbar/
Projects/
Skills/
src/data/ - Contains data files for dynamic content.
constants.js
projects.js
src/images/ - Directory for image assets.
src/utils/ - Contains utility files.
Themes.js - Contains the basic theme applied to the project.
Getting Started
Prerequisites
Make sure you have Node.js and npm installed on your machine.

Installation
Clone the repository:
sh
Copy code
git clone <repository-url>
Navigate to the project directory:
sh
Copy code
cd <project-directory>
Install the dependencies:
sh
Copy code
npm install
Running the Project
Start the development server:
sh
Copy code
npm start
The application will run on http://localhost:3000.
Customizing the Portfolio
Updating Bio and Skills
Bio and Skills: Modify src/data/constants.js to update your bio and skills. Changes made here will be dynamically reflected on the website.
Managing Projects
Projects: Edit src/data/projects.js to add or update project details such as title, description, start and end dates, technologies used, and images.
Adding Images
Images: Upload your images to the src/images directory. These can be used for project thumbnails, hero sections, or personal images.
Theme Customization
Theme: Customize the theme by editing src/utils/Themes.js. This file contains the styling theme for the entire project.
Technologies Used
React
JavaScript
styled-components for component-level styling
Contribution
Feel free to fork this repository, make modifications, and submit pull requests. All contributions are welcome!

License
This project is open-source and available under the MIT License.

