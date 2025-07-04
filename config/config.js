var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Jingxuan (Justin) Zhang",
    sex: "Male",
    age: "23",
    phone: "",
    email: "justinzhangsaw@gmail.com",
    address: "Phoenix, AZ, USA",
    qq: "",
    log: "JingxuanZhang",
    excpect_work: "Web Developer / IT Support",

    /*在这里配置首页的座右铭集合*/
    motto: [
        "Tomorrow isn't guaranteed to be better, but believe a better tomorrow is coming.",
        "There is always time and opportunity for what you want to do; excuses abound otherwise.",
        "Stay Curious, Keep Learning.",
        "Code Is Like Humor. When You Have to Explain It, It’s Bad.",
        "The best way to predict the future is to invent it.",
        "Hard work pays off."
    ],

    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "<h2>Hello! I'm Jingxuan (Justin) Zhang</h2><br>" +
             "<p>Computer Science Student at Grand Canyon University</p>",

    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>Hello! I'm Jingxuan (Justin) Zhang, currently pursuing a Bachelor of Science in Computer Science at Grand Canyon University, expected to graduate in April 2026.</p>" +
           "<p>I have hands-on experience in web development and IT support, including designing and maintaining the Antioch Grace Church website and providing technical support at Grand Canyon Education.</p>" +
           "<p>Proficient in Python, Java, C++, JavaScript, and SQL, and familiar with AWS, Docker, and Git. I thrive on collaboration and problem-solving—let’s connect and work together!</p>",

    /** 
     * 在这里配置你的技能点
     * ["技能点", 掌握程度, "技能条颜色"]
     */  
    skills: [
        ["Python", 85, "blue"],
        ["Java", 80, "#f1c40f"],
        ["C++", 75, "#2ecc71"],
        ["JavaScript", 70, "#e67e22"],
        ["SQL", 75, "#1abc9c"],
        ["HTML5", 70, "#e74c3c"],
        ["AWS", 65, "#ff9900"]
    ],

    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "<li>Proficient in Python, Java, C++, JavaScript, and SQL programming.</li>" +
        "<li>Familiar with HTML5, CSS3, and related front-end technologies.</li>" +
        "<li>Experience in WordPress website development.</li>" +
        "<li>Skilled in deploying and managing AWS cloud services.</li>" +
        "<li>Knowledgeable in Docker containerization and MongoDB databases.</li>" +
        "<li>Comfortable in Linux environments and Git version control.</li>" +
        "<li>Hands-on experience with MATLAB and hardware assembly.</li>" +
        "<li>Languages: English (fluent) and Mandarin (native).</li>" +
    "</ul>",

    /**
     * 这里填写你的个人作品展示
     * ["img","url", "ProjectName", "brief"]
     */
    portfolio: [
        ["./images/whispergui.png", "https://github.com/TBSKBJustin/WhisperGUI", "WhisperGUI", "Cross-platform desktop application for audio/video transcription using Python and Whisper, with automated installation integration."],
        ["./images/zepheria.png", "#", "Zepheria VR Game", "Team project: VR role-playing game with optimized combat system and improved responsiveness."]
    ],

    /**
     * 这里填写您的工作经历
     * ["日期", "工作", "介绍"]
     */
    work: [
        ["Aug 2024 — Present", "Web Developer, Antioch Grace Church",
            "<p>Designed and built the church website (agc-az.org) from the ground up on AWS.</p>" +
            "<p>Managed and updated website content weekly to ensure functionality and relevance.</p>" +
            "<p>Maintained server performance and security on AWS.</p>"
        ],
        ["Sep 2023 — May 2025", "IT Helpdesk Support, Grand Canyon Education",
            "<p>Provided technical support via chat, phone, and in-person for faculty, staff, and students.</p>" +
            "<p>Resolved 50+ issues per week, including network troubleshooting and hardware/software repairs.</p>" +
            "<p>Assisted with audio-visual setups for classrooms and events.</p>" +
            "<p>Improved system performance through regular hardware/software optimizations.</p>"
        ],
        ["Aug 2022 — Jul 2023", "CargoWise Assistant, T-Link",
            "<p>Managed SQL queries and assisted in CargoWise system operations.</p>"
        ]
    ],

    /**
     * 这里填写你的其他经历
     * ["日期", "经历", "介绍"]
     */
    others: [
        ["May 2022 — Present", "Media Manager/Translator, Antioch Grace Church",
            "<p>Managed AV systems and YouTube content for 100+ weekly viewers, ensuring high-quality streaming.</p>" +
            "<p>Responsible for real-time sermon translation from Chinese to English.</p>"
        ],
        ["Aug 2018 — May 2021", "Team Leader, Arizona STEM MESA Competition",
            "<p>Led coding team to 4th place in AZ 2019 competition.</p>" +
            "<p>Led team of 5 to design iOS medication management app, winning 1st place in AZ 2021.</p>"
        ]
    ],

    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     */
    icon: [
        ["./svg/github.svg", "https://github.com/TBSKBJustin", "My GitHub"],
        ["./svg/LinkedIn.svg", "https://www.linkedin.com/in/justin-zhang-jingxuan", "My LinkedIn"]
    ],

    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        "./images/intro-bg.jpg",
        "./images/avatar.jpg",
        "./images/work-bk.png",
        "./images/others-bk.png"
    ]
};
