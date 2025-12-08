# Jingxuan (Justin) Zhang - Personal Resume Website

## About

A responsive and elegant personal resume website designed for Jingxuan (Justin) Zhang. This pure front-end project is built with HTML, CSS, and JavaScript, optimized for desktop, tablet, and mobile devices. The website showcases professional experience, skills, projects, and contact information.

## Live Demo

View the live website at: [Your Deployed URL]

Compatible with all modern browsers and devices.

## Project Structure

```
MyResume/
├── index.html              # Main entry point
├── README.md               # Project documentation
├── config/
│   └── config.js          # Configuration file (personal info, skills, projects, etc.)
├── CSS/
│   ├── personal-info-main.css      # Main styling
│   ├── personal-info-animate.css   # Animation styles
│   ├── bootstrap.min.css           # Bootstrap framework
│   ├── aos.css                     # AOS animation library
│   └── ...                         # Other CSS libraries
├── JS/
│   ├── personal-info-main.js       # Main JavaScript logic
│   ├── particles.min.js            # Particle background effect
│   ├── aos.js                      # Scroll animations
│   ├── jquery-3.6.0.js            # jQuery library
│   └── ...                         # Other JS libraries
├── images/                         # Image assets
└── svg/                           # Social media icons
```

## Features

- ✨ **Responsive Design** - Works seamlessly across all devices
- 🎨 **Modern UI/UX** - Clean and professional interface
- ⚡ **Fast Loading** - Pure front-end, no backend required
- 🎭 **Smooth Animations** - AOS scroll animations and particle effects
- 🔧 **Easy Configuration** - Update content via single config file
- 📱 **Mobile Optimized** - Touch-friendly navigation

## Configuration

All personal information is managed through the `./config/config.js` file. Simply update this file to customize the website with your own information.

### Basic Configuration Example

```javascript
var config = {
    // Basic Information
    name: "Jingxuan (Justin) Zhang",
    sex: "Male",
    age: "23",
    phone: "(480)788-0595",
    email: "justinzhangsaw@gmail.com",
    address: "Phoenix, AZ, USA",
    qq: "",
    log: "JingxuanZhang",
    excpect_work: "Web/App Developer / AI Platform",

    // Homepage Mottos (randomly displayed)
    motto: [
        "Tomorrow isn't guaranteed to be better, but believe a better tomorrow is coming.",
        "Stay Curious, Keep Learning.",
        "The best way to predict the future is to invent it."
    ],

    // Welcome Message (supports HTML tags)
    welcome: "<h2>Hello! I'm Jingxuan (Justin) Zhang</h2><br>" +
             "<p>Bachelor of Science in Computer Science, Grand Canyon University</p>",

    // About Me Section (supports HTML tags)
    about: "<p>Hello! I'm Jingxuan (Justin) Zhang...</p>",

    // Skills Configuration
    // Format: ["Skill Name", Proficiency (0-100), "Color"]
    skills: [
        ["Python", 85, "blue"],
        ["Java", 80, "#f1c40f"],
        ["C++", 75, "#2ecc71"],
        ["JavaScript", 70, "#e67e22"]
    ],

    // Skills Description (supports HTML)
    skills_description: "<ul>" +
        "<li>Proficient in Python, Java, C++, JavaScript, and SQL programming.</li>" +
        "<li>Experience in WordPress website development.</li>" +
        "<li>Skilled in AWS cloud services deployment.</li>" +
    "</ul>" +
        "     <li>熟悉Go语言开发基本知识。</li>" +
        "     <li>熟悉SQL语句编写以及调优。</li>" +
        "     <li>熟悉基本Linux命令操作。</li>" +
        "     <li>熟悉Spring、ibatis、struts等框架的使用，了解其原理与机制。</li>" +
        "     <li>熟悉缓存、消息等机制。</li>" +
        "     <li>了解分布式系统的设计与应用。</li>" +
    // Portfolio Projects
    // Format: ["image_path", "project_url", "Project Name", "Brief description"]
    portfolio: [
        ["./images/whispergui.png", "https://github.com/TBSKBJustin/WhisperGUI", "WhisperGUI", "Cross-platform desktop application for audio/video transcription using Python and Whisper"],
        ["./images/zepheria.png", "https://github.com/TBSKBJustin/Zepheria_Beta", "Zepheria VR Game", "Team project: VR role-playing game with optimized combat system"],
        ["./images/agcweb.png", "https://agc-az.org", "Church Website", "Dynamic, multilingual website with sermon archives and YouTube integration"]
    ],

    // Work Experience
    // Format: ["Date Range", "Job Title", "Description (HTML supported)"]
    work: [
        ["Aug 2024 — Present", "Web Developer, Antioch Grace Church",
            "<p>Designed and built the church website (agc-az.org) from the ground up on AWS.</p>" +
            "<p>Managed and updated website content weekly to ensure functionality and relevance.</p>" +
            "<p>Maintained server performance and security on AWS.</p>"
        ],
        ["Sep 2023 — May 2025", "IT Helpdesk Support Services, Grand Canyon Education",
            "<p>Maintained and upgraded systems for optimal performance.</p>" +
            "<p>Resolved 50+ technical support requests per week for faculty, staff, and students.</p>" +
            "<p>Provided remote and in-person support with audio-visual setups.</p>"
        ]
    ],

    // Other Experience
    // Format: ["Date", "Experience Title", "Description"]
    others: [
        ["May 2022 — Present", "Media Manager/Translator, Antioch Grace Church",
            "Managed AV systems and YouTube content for 100+ weekly viewers. Responsible for real-time sermon translation from Chinese to English."],
        ["May 2021", "1st Place, Arizona STEM MESA Competition",
            "Team Leader: Led team of 5 to design iOS medication management app, winning 1st place in Arizona 2021."],
        ["May 2019", "4th Place, Arizona STEM MESA Competition",
            "Team Leader: Led coding team to 4th place in Arizona 2019 competition."]
    ],

    // Social Media Icons
    // Format: ["icon_path", "url", "description"]
    // Available icons in ./svg: github.svg, LinkedIn.svg, FaceBook.svg, LeetCode.svg, etc.
    icon: [
        ["./svg/github.svg", "https://github.com/TBSKBJustin", "My GitHub"],
        ["./svg/LinkedIn.svg", "https://www.linkedin.com/in/justin-zhang-jingxuan", "My LinkedIn"]
    ],

    // Image URLs
    // [background_image, profile_photo, portfolio_background, experience_background]
    url: [
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]
};
```

### Configuration Guidelines

- **Follow JavaScript object syntax**: Don't miss commas between properties, and don't add trailing commas
- **All data should be strings**: Wrap values in quotes
- **HTML tags are supported**: Use `<br>`, `<p>`, `<strong>`, etc. for formatting
- **Colors can be**: Named colors (`"red"`, `"blue"`), hex codes (`"#1abc9c"`), or rgba values
- **Keep descriptions concise**: Especially for portfolio and work sections

## How to Use

1. **Clone or download** this repository
2. **Open** `config/config.js` in a text editor
3. **Update** all personal information, skills, projects, and experience
4. **Replace images** in the `./images/` folder with your own
5. **Open** `index.html` in a web browser to preview
6. **Deploy** to your hosting service (GitHub Pages, Netlify, AWS S3, etc.)

## Deployment Options

### GitHub Pages (Free)
```bash
# Push to GitHub and enable GitHub Pages in repository settings
git add .
git commit -m "Update resume"
git push origin main
```

### Local Testing
Simply open `index.html` in any modern web browser.

### Custom Domain
After deployment, you can configure a custom domain in your hosting settings.

## Technologies Used

- **Frontend Framework**: Bootstrap 4
- **JavaScript Libraries**: jQuery 3.6.0, Particles.js, AOS (Animate On Scroll)
- **Animation**: CSS3 animations + Animate.css
- **Icons**: SVG vector icons
- **Responsive**: Mobile-first design approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

This project is built upon the original template by [happysnaker](https://github.com/happysnaker/Resume-Web-Page) and customized for Jingxuan (Justin) Zhang.

### Libraries & Resources

- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [AOS](http://michalsnik.github.io/aos/) - Animate On Scroll Library
- [jQuery](https://jquery.com/) - JavaScript Library
- [Particles.js](https://github.com/VincentGarreau/particles.js) - Particle Background Effect
- [Animate.css](https://animate.style/) - CSS Animation Library

## License

This project is open source and available for personal use.

## Contact

- **Email**: justinzhangsaw@gmail.com
- **GitHub**: [@TBSKBJustin](https://github.com/TBSKBJustin)
- **LinkedIn**: [Justin Zhang](https://www.linkedin.com/in/justin-zhang-jingxuan)

---

© 2025 Jingxuan (Justin) Zhang. All Rights Reserved.


