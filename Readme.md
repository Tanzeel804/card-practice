# 🚀 Tanzeel Ahmed - Project Portfolio

![Project Banner](https://img.shields.io/badge/Portfolio-Showcase-blue)
![Version](https://img.shields.io/badge/Version-2.0-green)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-Active-success)

> A professional project showcase portfolio website featuring detailed project cards with individual pages, built with modern web technologies.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Live Demo](#-live-demo)
- [🛠️ Technologies Used](#️-technologies-used)
- [📁 Project Structure](#-project-structure)
- [⚙️ Setup & Installation](#️-setup--installation)
- [🎯 Usage](#-usage)
- [📱 Project Pages](#-project-pages)
- [🎨 Customization](#-customization)
- [🤝 Contributing](#-contributing)
- [📞 Contact](#-contact)
- [📜 License](#-license)

## ✨ Features

### 🎯 **Core Features**

- **Project Showcase Grid**: Beautifully designed project cards with filtering capabilities
- **Individual Project Pages**: Each card links to a detailed project page
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes for better viewing experience
- **Interactive Navigation**: Smooth scrolling and dropdown menus

### 🛠️ **Technical Features**

- **Project Filtering**: Filter projects by category (Frontend, Backend, Full Stack, Tools)
- **Animated Elements**: CSS animations and transitions for better UX
- **Progress Bars**: Animated skill bars with percentages
- **Mobile-First Design**: Optimized for all screen sizes
- **SEO Friendly**: Proper meta tags and semantic HTML

### 📊 **Developer Features**

- **Separate Files**: Clean separation of HTML, CSS, and JavaScript
- **Modular Structure**: Easy to add new projects and features
- **Commented Code**: Well-documented code for easy understanding
- **Bootstrap Integration**: Responsive grid system and components

## 🚀 Live Demo

🔗 **Main Portfolio**: [https://tanzeel804.github.io/portfolio-main/](https://tanzeel804.github.io/portfolio-main/)

> _Note: Replace with your actual deployment link_

## 🛠️ Technologies Used

### **Frontend**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

### **Tools & Libraries**

![Remix Icons](https://img.shields.io/badge/Remix_Icons-000000?style=for-the-badge&logo=remix&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## 📁 Project Structure

```
portfolio-showcase/
│
├── index.html              # Main landing page with project cards
├── style.css              # Main stylesheet
├── script.js              # Main JavaScript functionality
│
├── images/                # Project images and assets
│   ├── techstore.jpg
│   ├── portfolio-showcase.jpg
│   ├── weather-app.jpg
│   ├── news-hub.jpg
│   ├── temp-converter.jpg
│   └── profile.jpg
│
├── projects/              # Individual project detail pages
│   ├── techstore.html
│   ├── portfolio.html
│   ├── weather-app.html
│   ├── news-hub.html
│   └── temp-converter.html
│
└── README.md             # This documentation file
```

## ⚙️ Setup & Installation

### **Prerequisites**

- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, Atom)
- Basic knowledge of HTML, CSS, JavaScript

### **Installation Steps**

1. **Clone the repository**

   ```bash
   git clone https://github.com/Tanzeel804/portfolio-showcase.git
   cd portfolio-showcase
   ```

2. **Open in browser**

   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **For development**
   ```bash
   # No build process required - edit files directly
   # All dependencies are loaded via CDN
   ```

## 🎯 Usage

### **Adding New Projects**

1. Add project images to `images/` folder
2. Create new HTML file in `projects/` folder
3. Add project card to `index.html`:
   ```html
   <div class="col-lg-4 col-md-6" data-category="fullstack">
     <div class="project-card">
       <!-- Card content -->
     </div>
   </div>
   ```

### **Updating Project Information**

1. Edit project details in respective HTML files
2. Update skills in `index.html` skills section
3. Modify contact information in footer

### **Customizing Styles**

1. Edit `style.css` for visual changes
2. Modify color variables at the top of CSS file:
   ```css
   :root {
     --primary-color: #4361ee;
     --secondary-color: #3a0ca3;
     --accent-color: #f72585;
   }
   ```

## 📱 Project Pages

### **Featured Projects**

| Project                   | Category   | Technologies              | Status      |
| ------------------------- | ---------- | ------------------------- | ----------- |
| **TechStore E-commerce**  | Full Stack | React, Node.js, MongoDB   | ✅ Complete |
| **Portfolio Website**     | Frontend   | HTML, CSS, JavaScript     | ✅ Complete |
| **Weather App**           | Frontend   | React, API Integration    | ✅ Complete |
| **News Hub**              | Full Stack | Next.js, Node.js, MongoDB | ✅ Complete |
| **Temperature Converter** | Tools      | JavaScript, CSS           | ✅ Complete |

### **Project Card Features**

- **Badge System**: Category badges for quick identification
- **Technology Tags**: Tech stack used in each project
- **Statistics**: Lines of code, development time, GitHub stars
- **Live Links**: Direct links to demo and source code
- **Hover Effects**: Interactive animations on hover

## 🎨 Customization

### **Changing Colors**

Edit the CSS variables in `style.css`:

```css
:root {
  --primary-color: #4361ee; /* Main brand color */
  --secondary-color: #3a0ca3; /* Secondary color */
  --accent-color: #f72585; /* Accent color */
  --dark-color: #14213d; /* Dark theme color */
  --light-color: #f8f9fa; /* Light theme color */
}
```

### **Adding Your Projects**

1. **Prepare project assets** (images, screenshots)
2. **Create project page** in `projects/` folder
3. **Add project card** to main page with appropriate category
4. **Update navigation** if adding new categories

### **SEO Optimization**

- Update meta tags in all HTML files
- Add alt text to all images
- Ensure semantic HTML structure
- Add sitemap.xml if deploying

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### **Guidelines**

- Follow existing code style
- Add comments for complex logic
- Update documentation accordingly
- Test changes on multiple devices

## 📞 Contact

### **Tanzeel Ahmed**

- **Email**: tanzeel.ahmed.se@gmail.com
- **Portfolio**: https://tanzeel804.github.io/portfolio-main/
- **GitHub**: https://github.com/Tanzeel804
- **LinkedIn**: https://linkedin.com/in/tanzeel-ahmed-b21288397

### **Availability**

- ✅ Open for freelance projects
- ✅ Available for collaborations
- ✅ Accepting mentorship requests
- ✅ Open to job opportunities
- ✅ Willing to contribute to open source

**Response Time**: Within 24 hours  
**Timezone**: UTC+5 (Pakistan Standard Time)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Tanzeel Ahmed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">
  
### ⭐ **If you like this project, give it a star on GitHub!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/Tanzeel804/portfolio-showcase?style=social)](https://github.com/Tanzeel804)
[![GitHub forks](https://img.shields.io/github/forks/Tanzeel804/portfolio-showcase?style=social)](https://github.com/Tanzeel804)

**Made with ❤️ by [Tanzeel Ahmed](https://github.com/Tanzeel804)**

</div>

---

## 🔄 Changelog

### **Version 2.0** (Current)

- Complete redesign with project cards system
- Individual project pages for each card
- Dark/light theme toggle
- Project filtering by category
- Enhanced animations and transitions

### **Version 1.0**

- Basic portfolio layout
- Simple project display
- Responsive design
- Contact form integration

## 🐛 Troubleshooting

### **Common Issues & Solutions**

| Issue                | Solution                   |
| -------------------- | -------------------------- |
| Images not loading   | Check file paths in HTML   |
| CSS not applying     | Clear browser cache        |
| JavaScript errors    | Check browser console      |
| Mobile layout issues | Test with responsive tools |

### **Browser Compatibility**

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)

---

**Last Updated**: December 2024  
**Maintained by**: Tanzeel Ahmed
