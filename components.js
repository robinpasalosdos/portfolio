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
					{ type: "visit", url: "https://barangay-system-website.vercel.app" },
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
       description: "A 3D two-player Unity game inspired by rock-paper-scissors, featuring animated battles in stylized arenas and strategic gameplay elements.",
       tools: ["Unity", "Unity3d"],
       links: [
         { type: "github", url: "https://github.com/robinpasalosdos/projects/tree/main/Janken%20Wars" }
       ]
     },
     {
       id: "dialog-box-5",
       type: "image",
       mediaSrc: "./assets/mt.png",
       title: "Module Tracker",
       description: "A simple tracking system for educators to manage and verify the distribution of academic modules to students.",
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
       description: "A student service queueing system built for the Polytechnic University of the Philippines. Helps organize enrollment, cashier, and registrar processes with real-time updates.",
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
       description: "Created additional pages using WordPress + Elementor. Fixed QA issues and aligned layout with company branding.",
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
       description: "A full-featured desktop and web app for managing residents, certificates, and document requests across multiple barangays. Built with authentication and a scalable structure for local LGU deployment.",
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
         mediaContent = `<video loop controls class=\"dialog_video\"${project.id === 'dialog-box-3' || project.id === 'dialog-box-4' ? ' muted' : ''}><source src=\"${project.mediaSrc}\"></video>`;
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
