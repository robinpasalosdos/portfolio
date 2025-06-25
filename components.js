document.addEventListener("DOMContentLoaded", function () {
	const skillsData = {
		Languages: [
			{ src: "./assets/js.png", skill: "JavaScript", level: "Experienced" },
			{ src: "./assets/php.png", skill: "PHP", level: "Experienced" },
			{ src: "./assets/python.png", skill: "Python", level: "Experienced" },
			{ src: "./assets/csharp.png", skill: "C#", level: "Experienced" },
			{ src: "./assets/cplusplus.png", skill: "C++", level: "Experienced" },
			{ src: "./assets/kotlin.png", skill: "Kotlin", level: "Experienced" }
		],
		Frameworks: [
			{ src: "./assets/react.png", skill: "VueJs", level: "Intermediate" },
			{ src: "./assets/quasar.svg", skill: "Quasar", level: "Intermediate" },
			{ src: "./assets/bootstrap.png", skill: "Bootstrap", level: "Intermediate" },
			{ src: "./assets/tailwind.png", skill: "Tailwind", level: "Intermediate" },
			{ src: "./assets/laravel.png", skill: "Laravel", level: "Intermediate" },
			{ src: "./assets/d0tnet.png", skill: "ASP.NET", level: "Intermediate" },
			{ src: "./assets/react.png", skill: "React", level: "Intermediate" },
			{ src: "./assets/electron.svg", skill: "Electron", level: "Intermediate" },
			{ src: "./assets/nodejs.png", skill: "NodeJS", level: "Intermediate" },
		],
		WebTools: [
			{ src: "./assets/wp.png", skill: "WordPress", level: "Intermediate" },
			{ src: "./assets/mysql.png", skill: "MySQL", level: "Intermediate" },
			{ src: "./assets/html.png", skill: "HTML", level: "Experienced" },
			{ src: "./assets/css.png", skill: "CSS", level: "Experienced" },
			{ src: "./assets/jquery.png", skill: "JQuery", level: "Intermediate" }
		],
		DataAnalytics: [
			{ src: "./assets/sql.png", skill: "SQL", level: "Intermediate" },
			{ src: "./assets/mysql.png", skill: "MySQL", level: "Intermediate" },
			{ src: "./assets/excel.png", skill: "Excel", level: "Experienced" },
			{ src: "./assets/tableau.svg", skill: "Tableau", level: "Intermediate" }
		],
		OtherTools: [
			{ src: "./assets/ms.png", skill: "MS Office", level: "Experienced" },
			{ src: "./assets/pygame.png", skill: "Github", level: "Experienced" },
			{ src: "./assets/autocad.png", skill: "AutoCad", level: "Experienced" },
			{ src: "./assets/unity.png", skill: "Unity", level: "Intermediate" },
			{ src: "./assets/as.png", skill: "Android Stu.", level: "Intermediate" },
			{ src: "./assets/firebase.png", skill: "Firebase", level: "Intermediate" },
			{ src: "./assets/visualStudio.png", skill: "Visual Studio", level: "Intermediate" },
			{ src: "./assets/sketchup.webp", skill: "Sketchup", level: "Intermediate" },
			{ src: "./assets/pygame.png", skill: "Pygame", level: "Intermediate" }
		]
    };

    const projects = {
		web: [
      {
				title: "Barangay System",
				image: "./assets/brgy.png",
				hoverImage: "./assets/eye_dark.png",
				dialog: "dialog-box-8",
				tools: ["React", "Electron"],
        links: [
					{ type: "github", url: "https://barangay-system-website.vercel.app" },
				],
			},
			{
				title: "Sustek",
				image: "./assets/sustek.png",
				hoverImage: "./assets/eye_dark.png",
				dialog: "dialog-box-7",
				tools: ["WordPress", "Elementor"],
        links: [
					{ type: "visit", url: "https://beta.sustek.ai" },
				],
			},
			{
				title: "PUP Clinic",
				image: "./assets/pupclinic.jpg",
				hoverImage: "./assets/eye_dark.png",
				dialog: "dialog-box-1",
				tools: ["PHP", "Python", "Raspi"],
				links: [
					{ type: "visit", url: "http://pupclinic.rf.gd" },
					{ type: "github", url: "https://github.com/robinpasalosdos/pupclinic" },
				],
			},
			{
				title: "PUP QS",
				image: "./assets/pupqs.png",
				hoverImage: "./assets/eye_dark.png",
				dialog: "dialog-box-6",
				tools: ["PHP", "JQuery"],
				links: [
					{ type: "visit", url: "https://robinpasalosdos.vercel.app/projects/pupqs/" },
					{ type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Queueing%20System" },
				],
			},
			{
				title: "Login and User Management",
				image: "./assets/login.png",
				hoverImage: "./assets/eye_dark.png",
				dialog: "dialog-box-3",
				tools: ["Quasar", "VueJS"],
				links: [
					{ type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Login" }
				]
				},
				{
				title: "Eflood",
				image: "./assets/eflood.png",
				hoverImage: "./assets/eye_dark.png",
				dialog: "dialog-box-4",
				tools: ["PHP", "JQuery", "Bootstrap"],
				links: [
					{ type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Eflood" }
				]
				}
		],
		games: [
			{
				title: "Janken Wars",
				image: "./assets/janken2.png",
				hoverImage: "./assets/eye_dark.png",
				dialog: "dialog-box-2",
				tools: ["Unity", "Unity3d"],
				links: [
					{ type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Janken%20Wars" },
				],
			},
		],
		mobile: [
			{
				title: "Module Tracker",
				image: "./assets/module_tracker_pic.jpg",
				hoverImage: "./assets/eye_dark.png",
				dialog: "dialog-box-5",
				tools: ["Android Stu.", "Firebase"],
				links: [
					{ type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Module%20Tracker" },
				],
			},
		]
  	};

	const experiences = [
  {
		year: "2025",
		position: "Freelance Software Developer",
		company: "Self-employed",
		tasks: [
		"Developed a comprehensive barangay information management system designed to streamline resident records, document issuance, and administrative processes for local government units.",
		],
		tools: ["React", "Electron"]
	},
	{
		year: "2024",
		position: "Software Engineer Intern",
		company: "Elinnov Technologies",
		tasks: [
		"Contributed to a company project, developing a website using WordPress with Elementor plugin.",
		"Assisted in creating a privacy policy page for the Ploom Heat project using ASP.NET."
		],
		tools: ["WordPress", "ASP.NET"]
	},
	{
		year: "2022",
		position: "Full Stack Developer Intern",
		company: "Melham Construction Corporation",
		tasks: [
		"Designed and developed an event booking website with fullstack functionalities.",
		"Ensured mobile responsiveness and cross-browser compatibility."
		],
		tools: ["PHP", "MySQL"]
	},
	{
		year: "2021",
		position: "Full Stack Developer Intern",
		company: "Pixel8 Web Solutions Inc.",
		tasks: [
		"Developed a secure login and user management system using Vue.js and Quasar Framework.",
		"Completed my first full website project, delivering a major task during the internship.",
		"Demonstrated strong problem-solving skills and web development potential."
		],
		tools: ["PHP", "VueJS", "Quasar", "MySQL"]
	},
	{
		year: "2019",
		position: "AutoCAD Operator",
		company: "Betonbau Phil. Inc.",
		tasks: [
		"Drafted structural designs for prefabricated buildings.",
		"Managed project files and hardcopy documents for the team."
		],
		tools: ["AutoCAD"]
	}
	];
	
	const education = [
	{
		year: "2024",
		degree: "Bachelor of Science in Computer Engineering",
		school: "Polytechnic University of the Philippines",
		achievements: ["President lister"]
	},
	{
		year: "2019",
		degree: "Senior High School",
		school: "Victorious Christian Montessori College",
		achievements: ["Salutatorian"]
	}
	];
    
    const container = document.querySelector('.skill_all');
    container.innerHTML = '';
    
    Object.keys(skillsData).forEach(category => {
        const skillSection = document.createElement('div');
        skillSection.classList.add('skills');
        skillSection.setAttribute('data-aos', 'zoom-in-down');
        skillSection.setAttribute('data-aos-delay', '100');
        skillSection.innerHTML = `<h4>${category.replace(/([A-Z])/g, ' $1').trim()}</h4>`;
        
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
    
        skillsData[category].forEach(skill => {
            const article = document.createElement('article');
            article.innerHTML = `
                <img src="${skill.src}" alt="Experience icon" class="icon" />
                <div>
                    <h3>${skill.skill}</h3>
                    <p>${skill.level}</p>
                </div>
            `;
            skillDiv.appendChild(article);
        });
        
        skillSection.appendChild(skillDiv);
        container.appendChild(skillSection);
    });
    
    const homePic = document.getElementById("home_pic");
    
    if (homePic) {
        homePic.innerHTML = `
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="231.235697pt" height="303.450160pt" viewBox="0 0 231.235697 303.450160"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(-403.287634,667.508692) scale(0.100000,-0.100000)"
            stroke="none">
            <path d="M4920 6666 c-149 -32 -244 -83 -410 -219 -8 -7 -48 -39 -88 -71 -75
            -61 -118 -114 -142 -176 -7 -19 -28 -55 -45 -80 -93 -131 -174 -345 -195 -512
            -11 -86 -10 -110 9 -230 11 -73 23 -158 27 -188 6 -61 30 -145 50 -175 7 -11
            26 -59 43 -107 29 -86 54 -131 87 -159 16 -13 17 -12 11 11 -3 14 -9 50 -12
            80 l-7 55 30 -60 c16 -34 35 -67 43 -75 61 -64 108 -136 119 -185 l7 -30 17
            37 c9 22 16 65 17 105 l0 68 25 -55 c14 -30 30 -88 36 -128 9 -61 13 -71 21
            -56 6 10 21 30 34 44 34 36 92 157 101 210 l7 45 32 -55 c17 -30 45 -68 62
            -84 l31 -30 0 40 c0 22 -7 67 -16 99 -40 143 -12 271 77 369 53 59 118 98 269
            165 252 112 406 195 470 252 40 36 19 27 -65 -26 -84 -54 -194 -110 -330 -170
            -168 -74 -250 -116 -302 -154 -54 -39 -116 -123 -137 -185 -22 -67 -20 -176 4
            -261 27 -95 25 -107 -11 -65 -42 50 -90 144 -110 220 -17 60 -18 62 -14 19 2
            -25 9 -59 15 -75 24 -62 -33 -245 -93 -302 l-24 -23 -7 51 c-4 27 -27 91 -51
            142 -30 60 -45 105 -46 132 0 23 -5 50 -10 61 -6 14 -7 -1 -4 -45 3 -36 8
            -117 11 -180 l6 -115 -39 60 c-22 33 -54 76 -71 95 -42 46 -89 142 -103 209
            -10 49 -8 185 5 311 4 37 2 33 -14 -25 -26 -99 -24 -331 5 -455 4 -15 -4 -7
            -18 20 -34 63 -77 240 -77 318 0 36 5 93 11 126 40 216 111 353 258 494 93 90
            98 110 8 34 -164 -139 -269 -347 -287 -572 -5 -58 -5 -125 0 -150 5 -25 7 -46
            5 -48 -8 -9 -45 114 -45 151 0 23 -7 74 -15 112 -30 143 -39 257 -26 342 16
            110 60 243 121 368 60 122 104 179 186 238 48 36 72 46 133 57 101 17 271 64
            307 84 17 10 21 15 9 12 -11 -3 -63 -16 -115 -30 -80 -21 -174 -42 -277 -62
            -13 -2 -47 -25 -78 -49 -30 -25 -55 -41 -55 -36 0 23 87 116 176 187 185 151
            250 193 356 230 119 42 186 46 368 24 36 -4 116 -3 179 2 135 11 183 6 248
            -28 66 -35 96 -65 159 -161 30 -45 58 -84 63 -88 5 -3 47 -10 92 -16 99 -12
            157 -40 226 -108 123 -121 201 -406 157 -569 -8 -31 -16 -61 -17 -67 -2 -5 -5
            -14 -9 -20 -13 -22 -48 -149 -47 -174 0 -31 0 -33 54 116 47 130 59 221 44
            336 -23 181 -84 322 -176 407 -69 63 -128 89 -231 101 -48 6 -87 12 -88 12
            -16 40 -107 167 -140 196 -93 82 -177 101 -355 82 -76 -8 -120 -9 -153 -1 -79
            18 -206 20 -276 6z"/>
            <path d="M4985 6536 c-86 -18 -205 -67 -281 -116 -35 -24 -62 -45 -60 -48 3
            -2 36 13 73 36 200 118 355 142 605 93 181 -34 242 -43 288 -39 66 5 50 22
            -18 19 -31 -1 -118 10 -192 25 -239 47 -307 52 -415 30z"/>
            <path d="M5700 6378 c-54 -15 -96 -18 -255 -16 l-190 3 -90 -33 c-117 -42
            -263 -82 -456 -126 -181 -40 -269 -78 -334 -142 -51 -52 -103 -136 -129 -209
            -20 -59 -43 -190 -38 -223 6 -39 22 -13 22 37 0 78 17 147 58 234 68 143 184
            233 342 267 235 50 371 86 530 142 l95 33 177 -2 c174 -3 307 12 332 37 17 17
            2 17 -64 -2z"/>
            <path d="M5780 6331 c0 -5 -18 -24 -40 -41 -30 -24 -55 -34 -107 -41 -165 -23
            -204 -32 -308 -69 -162 -56 -520 -210 -600 -257 -72 -42 -195 -147 -195 -165
            0 -10 82 50 105 77 34 39 232 145 380 203 28 11 95 39 150 62 161 67 301 110
            392 121 47 5 103 13 125 18 48 11 108 56 108 82 0 10 -2 19 -5 19 -3 0 -5 -4
            -5 -9z"/>
            <path d="M5856 6278 c-32 -111 -107 -229 -213 -335 -119 -120 -229 -193 -408
            -270 -27 -12 -76 -33 -107 -47 -138 -60 -289 -183 -356 -289 -37 -60 -82 -179
            -82 -215 1 -16 1 -16 10 0 6 9 19 45 30 81 53 173 230 338 463 432 252 101
            393 200 538 375 76 91 161 261 138 275 -5 4 -11 0 -13 -7z"/>
            <path d="M6020 6205 c0 -3 22 -33 49 -65 103 -124 161 -266 161 -396 0 -59 3
            -74 15 -74 13 0 14 13 10 80 -6 107 -21 161 -66 250 -47 90 -135 210 -155 210
            -8 0 -14 -2 -14 -5z"/>
            <path d="M5603 6135 c-29 -19 -57 -35 -62 -35 -5 0 -11 -3 -13 -8 -1 -4 -22
            -22 -46 -40 -23 -19 -88 -74 -145 -124 -150 -132 -194 -159 -474 -290 -48 -22
            -54 -29 -20 -21 95 23 396 184 437 234 24 30 270 229 322 262 61 38 81 57 60
            57 -4 0 -31 -16 -59 -35z"/>
            <path d="M6008 6165 c-3 -3 3 -33 13 -66 23 -75 25 -215 4 -285 -18 -58 -18
            -64 -5 -64 19 0 43 114 44 205 0 104 -34 232 -56 210z"/>
            <path d="M5065 5916 c-44 -45 -132 -121 -195 -168 -217 -160 -311 -290 -356
            -488 -18 -79 -16 -240 4 -290 7 -17 8 12 5 96 -7 143 10 233 61 340 39 82 137
            206 197 252 177 132 236 180 303 247 69 68 90 97 69 94 -5 -1 -44 -38 -88 -83z"/>
            <path d="M5846 5891 c-25 -38 -65 -87 -89 -110 -49 -49 -158 -124 -240 -166
            -31 -17 -51 -31 -43 -33 37 -8 233 117 313 200 57 60 81 96 103 153 15 40 5
            30 -44 -44z"/>
            <path d="M5956 5718 c-3 -62 -9 -128 -12 -145 -8 -40 11 -45 20 -5 12 53 19
            262 9 262 -6 0 -13 -48 -17 -112z"/>
            <path d="M6125 5602 c0 -143 -3 -179 -23 -252 -36 -132 -71 -229 -108 -300
            -36 -68 -40 -80 -25 -80 13 0 73 123 105 214 56 164 69 240 70 408 1 92 -3
            161 -9 167 -7 7 -10 -46 -10 -157z"/>
            <path d="M5745 5551 c-121 -164 -197 -212 -385 -241 -63 -10 -137 -25 -165
            -34 -59 -21 -154 -66 -162 -79 -11 -18 6 -17 39 3 63 36 193 78 279 89 146 19
            197 38 282 105 38 31 151 167 175 213 30 56 0 29 -63 -56z"/>
            <path d="M5867 5553 c-9 -15 12 -203 33 -306 16 -74 21 -133 20 -212 -2 -127
            -2 -137 9 -110 17 41 12 209 -10 320 -11 61 -25 154 -29 209 -9 96 -13 116
            -23 99z"/>
            <path d="M5980 5455 c0 -85 10 -175 20 -175 10 0 -1 223 -11 235 -5 5 -9 -19
            -9 -60z"/>
            <path d="M5023 5483 c-59 -28 -131 -88 -165 -136 -20 -28 -20 -30 -3 -18 11 8
            38 32 60 52 42 39 147 109 164 109 5 0 13 5 16 10 10 17 -17 10 -72 -17z"/>
            <path d="M5757 5503 c-8 -12 32 -175 45 -188 11 -11 11 -9 -16 114 -18 79 -21
            88 -29 74z"/>
            <path d="M4431 5452 c-18 -28 -46 -86 -63 -129 -54 -138 -49 -339 11 -458 l20
            -40 -6 35 c-3 19 -11 49 -19 67 -20 51 -36 180 -29 236 10 78 43 172 87 249
            47 82 46 113 -1 40z"/>
            <path d="M6251 5330 c-1 -19 8 -64 20 -100 12 -40 20 -93 20 -139 0 -74 0 -75
            -55 -155 -78 -113 -109 -144 -154 -152 -60 -11 -74 -26 -20 -21 60 6 87 24
            138 90 22 28 45 58 51 65 26 31 60 116 65 159 4 36 -4 78 -30 168 -25 85 -35
            110 -35 85z"/>
            <path d="M6184 5322 c-37 -30 -61 -74 -99 -182 -20 -58 -61 -148 -91 -201 -30
            -52 -54 -104 -54 -115 1 -13 6 -9 19 16 10 19 36 67 58 105 22 39 61 125 87
            192 32 81 60 135 82 160 19 20 34 38 34 40 0 8 -17 1 -36 -15z"/>
            <path d="M6197 5243 c-3 -4 6 -35 20 -68 44 -105 33 -146 -57 -211 -45 -33
            -62 -54 -42 -54 18 0 124 94 133 118 13 34 7 104 -15 162 -19 50 -31 66 -39
            53z"/>
            <path d="M4601 5057 c-12 -69 -13 -184 -2 -232 4 -18 9 27 13 115 3 80 9 153
            13 163 4 9 3 17 -3 17 -5 0 -15 -28 -21 -63z"/>
            <path d="M5037 5000 c-6 -14 -29 -248 -42 -427 -3 -45 -1 -84 3 -87 5 -3 12
            43 16 102 4 59 14 164 22 235 15 123 15 209 1 177z"/>
            <path d="M5991 4686 c-6 -25 -11 -82 -11 -128 0 -46 -3 -120 -6 -164 l-7 -82
            -195 -178 c-108 -99 -258 -240 -335 -314 -76 -74 -150 -141 -165 -149 -31 -17
            -265 -11 -299 7 -12 7 -42 45 -67 84 -47 77 -316 549 -373 657 -42 79 -64 113
            -70 107 -6 -5 44 -104 122 -241 111 -195 157 -279 182 -325 13 -25 42 -74 63
            -110 22 -36 54 -89 71 -118 44 -75 69 -85 220 -90 154 -5 166 -1 276 106 147
            144 511 483 547 510 19 15 38 34 40 42 11 32 32 430 23 430 -2 0 -10 -20 -16
            -44z"/>
            <path d="M4892 4518 c-28 -28 -14 -57 56 -108 37 -27 76 -50 87 -50 24 0 134
            72 118 77 -6 2 -36 -12 -67 -33 l-55 -36 -31 26 c-18 14 -35 26 -38 26 -4 0
            -22 14 -40 31 -26 24 -30 34 -22 45 16 18 9 39 -8 22z"/>
            <path d="M5115 4490 c-4 -6 6 -10 24 -10 61 0 83 -32 40 -58 -28 -18 -19 -25
            15 -13 31 12 36 56 9 77 -21 16 -79 18 -88 4z"/>
            <path d="M5095 4220 c-11 -5 -45 -6 -76 -3 -55 5 -59 4 -111 -36 -30 -22 -59
            -41 -65 -41 -6 0 -16 -7 -23 -15 -25 -31 20 -15 83 27 59 41 66 43 142 45 44
            1 87 3 97 3 9 1 33 -9 55 -23 41 -25 155 -67 185 -67 36 0 17 19 -30 29 -49
            10 -111 36 -172 71 -37 22 -54 23 -85 10z"/>
            <path d="M4885 4093 c2 -10 4 -21 4 -25 1 -5 17 -26 37 -48 41 -45 82 -60 170
            -60 49 0 69 5 100 26 58 39 104 86 104 106 0 23 -34 24 -146 3 -73 -14 -89
            -14 -155 0 -98 20 -118 20 -114 -2z m144 -24 c51 -9 75 -8 127 5 35 9 78 16
            96 16 l33 -1 -52 -48 c-57 -53 -102 -66 -190 -54 -59 7 -95 27 -117 63 -22 38
            -20 43 12 36 15 -3 56 -11 91 -17z"/>
            </g>
        
        </svg>
        `;
    }
    
    function renderProjects() {
        const container = document.getElementById("card_list");
        container.innerHTML = "";
    
        Object.keys(projects).forEach(category => {
            projects[category].forEach(project => {
                const article = document.createElement("article");
                article.classList.add("card", category, "show_card");
                
                article.innerHTML = `
                    <div class="project_img_card">
                        <img class="project_img" src="${project.image}" onclick="showDialog('${project.dialog}')">
                        <img class="hover-text" src="${project.hoverImage}" onclick="showDialog('${project.dialog}')">
                    </div>
                    <header class="card-header">
                        <h2>${project.title}</h2>
                    </header>
                    <div class="tags">
                        <div class="tools">
                            ${project.tools.map(tool => `<a>${tool}</a>`).join('')}
                        </div>
                        <div class="proj_links">
                            ${project.links?.map(link => `<img class="${link.type}_icon" src="./assets/${link.type === 'github' ? 'github_dark.png' : 'link.svg'}" alt="" onclick="window.open('${link.url}', '_blank')">`).join('') || ''}
                        </div>
                    </div>
                `;
                container.appendChild(article);
            });
        });
    }
    
    renderProjects();
      
      function renderQualifications() {
        const qualificationDiv = document.getElementById("qualification");
      
        qualificationDiv.innerHTML = `
          <div class="exp">
            <h1 class="section_title" data-aos="fade-up">Experience</h1>
            <div class="exp_con" data-aos="fade-up" data-aos-offset="135" data-aos-easing="ease-in-sine">
              ${experiences.map(exp => `
                <article class="exp_details">
                  <h1>${exp.year}</h1>
                  <h2>${exp.position}</h2>
                  <h2 class="company">${exp.company}</h2>
                  <ul>
                    ${exp.tasks.map(task => `<li>${task}</li>`).join("")}
                  </ul>
                  <div class="tags exp_tags">
                    <div class="exp_tools">
                      ${exp.tools.map(tool => `<a>${tool}</a>`).join("")}
                    </div>
                  </div>
                </article>
              `).join("")}
            </div>
          </div>
      
          <div class="educ">
            <h1 class="section_title" data-aos="fade-up">Education</h1>
            <div class="exp_con" data-aos="fade-up" data-aos-offset="135" data-aos-easing="ease-in-sine">
              ${education.map(edu => `
                <article class="exp_details">
                  <h1>${edu.year}</h1>
                  <h2>${edu.degree}</h2>
                  <h2 class="company">${edu.school}</h2>
                  <ul>
                    ${edu.achievements.map(ach => `<li>${ach}</li>`).join("")}
                  </ul>
                </article>
              `).join("")}
            </div>
          </div>
        `;
      }
      
      // Render qualifications on page load
      renderQualifications();

   // Dialog data for all projects
   const dialogProjects = [
     {
       id: "dialog-box-1",
       type: "video",
       mediaSrc: "./assets/pupclinic.mp4",
       title: "PUP Clinic",
       description: "A thesis project that integrates electronic health records to streamline recording and assessing vital signs, improving the efficiency of measuring blood pressure, heart rate, temperature, oxygen, height, and weight.",
       tools: ["PHP", "Python", "Raspi"],
       links: [
         { type: "visit", url: "http://pupclinic.rf.gd" },
         { type: "github", url: "https://github.com/robinpasalosdos/pupclinic" }
       ]
     },
     {
       id: "dialog-box-2",
       type: "video",
       mediaSrc: "./assets/janken.mp4",
       title: "Janken Wars",
       description: "This Unity-based 3D game is inspired by the classic rock, paper, and scissors game. In this 2 player game, each player engages in battles in janken battlefields, adding a strategic twist to this classic showdown.",
       tools: ["Unity", "Unity3d"],
       links: [
         { type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Janken%20Wars" }
       ]
     },
     {
       id: "dialog-box-3",
       type: "video",
       mediaSrc: "./assets/user_management.mp4",
       title: "Login and User Management",
       description: "Develop a web-based task management application with an interface designed for both user-friendliness and administrative ease, allowing users to effortlessly organize and track their todos.",
       tools: ["Quasar", "VueJS"],
       links: [
         { type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Login" }
       ]
     },
     {
       id: "dialog-box-4",
       type: "video",
       mediaSrc: "./assets/Eflood.mp4",
       title: "Eflood",
       description: "Develop a website for a selected barangay with the primary goal of issuing timely flood warnings to residents, enhancing community preparedness and safety.",
       tools: ["PHP", "JQuery", "Bootstrap"],
       links: [
         { type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Eflood" }
       ]
     },
     {
       id: "dialog-box-5",
       type: "image",
       mediaSrc: "./assets/mt.png",
       title: "Module Tracker",
       description: "This app streamlines the module distribution process, making it easier for educators to ensure that students receive the materials they need for their studies.",
       tools: ["Android Stu.", "Firebase"],
       links: [
         { type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Module%20Tracker" }
       ]
     },
     {
       id: "dialog-box-6",
       type: "image",
       mediaSrc: "./assets/pupqs.png",
       title: "PUP QS",
       description: "PUP QS is a website for the Polytechnic University of the Philippines, streamlining queues for various services, including enrollment and cashier service, to save time and enhance efficiency for students and staff.",
       tools: ["PHP", "JQuery"],
       links: [
         { type: "visit", url: "https://robinpasalosdos.vercel.app/projects/pupqs/" },
         { type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Queueing%20System" }
       ]
     },
     {
       id: "dialog-box-7",
       type: "image",
       mediaSrc: "./assets/sustek_detailed.png",
       title: "Sustek",
       description: "Developed additional pages for the Sustek company website using WordPress and Elementor, ensuring alignment with branding guidelines. Resolved QA issues to improve the site's functionality, user experience, and visual appeal.",
       tools: ["WordPress", "Elementor"],
       links: [
         { type: "visit", url: "https://beta.sustek.ai" }
       ]
     },
     {
       id: "dialog-box-8",
       type: "image",
       mediaSrc: "./assets/brgy.png",
       title: "Brgy Hub",
       description: "A desktop and web-based system designed for barangay staff and residents. It handles resident registration, barangay clearances, certificates, document printing, and appointment scheduling. The system includes authentication, fingerprint capture, and admin tools. Built for scalability, supporting multiple barangays with secure data separation.",
       tools: ["React", "Electron"],
       links: [
         { type: "visit", url: "https://barangay-system-website.vercel.app" }
       ]
     },
   ];
   
   function generateDialogs() {
     const container = document.getElementById("dialog_container");
     if (!container) return;
     container.innerHTML = "";
     dialogProjects.forEach(project => {
       let mediaContent = "";
       if (project.type === "video") {
         mediaContent = `<video loop autoplay controls class="dialog_video"${project.id === 'dialog-box-3' || project.id === 'dialog-box-4' ? ' muted' : ''}><source src="${project.mediaSrc}"></video>`;
       } else {
         mediaContent = `<img src="${project.mediaSrc}" alt="" class="mt">`;
       }
       let links = project.links.map(link => {
         let icon = link.type === "github" ? "github_dark.png" : "link.svg";
         let className = link.type === "github" ? "github_icon" : "visit_link";
         return `<img class="${className}" src="./assets/${icon}" alt="" onclick="window.open('${link.url}', '_blank')">`;
       }).join("");
       container.innerHTML += `
         <div class="dialog-box${project.type === 'video' ? ' dialog_videos' : ''}" id="${project.id}">
           <img src="assets/x.png" class="dialog_x" data-dialog="${project.id}">
           ${mediaContent}
           <header class="card-header"><h2>${project.title}</h2></header>
           <p>${project.description}</p>
           <div class="tags">
             <div class="tools">${project.tools.map(tool => `<a>${tool}</a>`).join("")}</div>
             <div class="proj_links">${links}</div>
           </div>
         </div>
       `;
     });
   }
   
   generateDialogs();
});
