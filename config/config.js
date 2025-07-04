var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "Jingxuan (Justin) Zhang",
    sex: "Male",
    age: "23",
    phone: "6028129097",
    email: "justinzhangsaw@gmail.com",
    address: "Phoenix, AZ, USA",
    qq: "209323100",
    log: "JingxuanZhang",
    excpect_work: "Web Developer / IT Support",

    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Stay Curious, Keep Learning.",
        "Code Is Like Humor. When You Have to Explain It, It’s Bad.",
        "The best way to predict the future is to invent it.",
        "天道酬勤。"
    ],

    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "<h2>Hello! I'm Jingxuan (Justin) Zhang</h2><br>" +
             "<p>Computer Science Student at Grand Canyon University</p>",

    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫张景宣（Justin），目前在Grand Canyon University攻读计算机科学学士学位，预计于2026年4月毕业。</p>" +
           "<p>我拥有Web开发和IT支持方面的实践经验，包括在Antioch Grace Church设计并维护网站，以及在Grand Canyon Education提供技术支持。</p>" +
           "<p>我擅长Python、Java、C++、JavaScript和SQL，并熟悉AWS、Docker、Git等技术。具备团队协作与独立解决问题的能力，期待与您合作与联系！</p>",

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
        "<li>熟练掌握Python、Java、C++、JavaScript和SQL编程。</li>" +
        "<li>熟悉HTML5、CSS3及相关前端技术。</li>" +
        "<li>具备WordPress网站开发经验。</li>" +
        "<li>熟悉AWS云服务部署与管理。</li>" +
        "<li>了解Docker容器化和MongoDB数据库。</li>" +
        "<li>熟悉Linux环境及Git版本控制。</li>" +
        "<li>具备MATLAB和硬件组装技能。</li>" +
        "<li>英语（流利）和普通话（母语）。</li>" +
    "</ul>",

    /**
     * 这里填写你的个人作品展示
     * ["img","url", "ProjectName", "brief"]
     */
    portfolio: [
        ["./images/whispergui.png", "https://github.com/TBSKBJustin/WhisperGUI", "WhisperGUI", "跨平台桌面应用，基于Python和Whisper实现音视频转录，并集成自动安装。"],
        ["./images/zepheria.png", "#", "Zepheria VR Game", "团队项目：角色扮演VR游戏，优化战斗系统并提升响应速度。"]
    ],

    /**
     * 这里填写您的工作经历
     * ["日期", "工作", "介绍"]
     */
    work: [
        ["Aug 2024 — Present", "Web Developer, Antioch Grace Church",
            "<p>Designed and built the church website (agc-az.org) from the ground up on AWS.</p>" +
            "<p>Manage and update website content weekly to ensure functionality and relevance.</p>" +
            "<p>Maintain server performance and security on AWS.</p>"
        ],
        ["Sep 2023 — May 2025", "IT Helpdesk Support, Grand Canyon Education",
            "<p>Provided technical support via chat, phone, and in-person for faculty, staff, and students.</p>" +
            "<p>Resolved 50+ issues per week, including network troubleshooting and hardware/software repairs.</p>" +
            "<p>Assisted with Audio-Visual setups for classrooms and events.</p>" +
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
        ["./svg/github.svg", "https://github.com/TBSKBJustin", "我的 GitHub"],
        ["./svg/LinkedIn.svg", "https://www.linkedin.com/in/justin-zhang-jingxuan", "我的 LinkedIn"]
    ],

    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        "./images/intro-bg.jpg",
        "./images/avatar.jpg",
        "./images/work-bk.png",
        "./images/others-bk.png"
    ]
};
