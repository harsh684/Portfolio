import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    sql,
    // jenkins,
    docker,
    java,
    hexaware,
    ltimindtree,
    altmobility,
    medisearch,
    bootstrap,
    aws,
    // threejs,
    github,
    springboot,
    angular,
    mysql,
    // todo,
    careercrafter
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React / Angular",
      icon: mobile,
    },
    {
      title: "Spring Boot",
      icon: backend,
    },
    {
      title: "GitHub",
      icon: github,
    },
    {
      title: "SQL / NoSQL",
      icon: sql,
    },
    {
      title: "CI/CD",
      icon: docker,
    },
    {
      title: "AWS",
      icon: aws,
    }
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React TS",
      icon: reactjs,
    },
    {
      name: "Angular 16",
      icon: angular,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "AWS",
      icon: aws,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    // {
    //   name: "jenkins",
    //   icon: jenkins,
    // },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Hexaware Technologies",
      icon: hexaware,
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Developing and maintaining web applications using Java Full Stack Technologies like Spring Boot, React.ts, Angular, AWS, Docker, Jenkins",
        "Implemented RAG & OCR model using Gen AI framework Langchain",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "ALT Mobility",
      icon: altmobility,
      iconBg: "#383E56",
      date: "Mar 2024 - May 2024",
      points: [
        "Developed and maintained critical web modules using React, Bootstrap and other related technologies.",
        "Implemented UI design and frontend-based features.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
    {
      title: "Graduate Engineer Trainee",
      company_name: "LTIMindtree",
      icon: ltimindtree,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Apr 2023",
      points: [
        "Trained with LTIMindtree on Java full-stack Technologies.",
        "This training covered technologies like Java, SQL, NoSQL, MongoDB, HTML, CSS, JavaScript API, ReactJs, Typescript, web services etc.",
      ],
    },
  ];
  
  const testimonials = [
  {
    testimonial:
      "Harsh brought both creativity and reliability to our web development efforts. He translated complex requirements into a clean, responsive UI that really impressed our stakeholders.",
    name: "Ayush Kumar",
    designation: "Former Product Manager",
    company: "Alt Mobility",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGdbHThPdWi9A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731513692461?e=1759968000&v=beta&t=4Cl6AM-I77XvJSv2ybuOCMuboLYBj076kGLoDr4o2u4",
  },
  {
    testimonial:
      "Working with Harsh has been a pleasure. He’s not only skilled in full-stack development but also has a great sense of collaboration and attention to detail, which made team projects smooth and efficient.",
    name: "Sreeram Rachakonda",
    designation: "Software Engineer",
    company: "Hexaware Technologies",
    image:
      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
  },
];
    
    const projects = [
      {
        name: "Career Crafter",
        description:
          "A Job portal which allows recruiters to post job listing & hire candidates. It allows Job Seekers to create or upload their resume, browse & apply for job listings",
        tags: [
          {
            name: "Angular 16",
            color: "bg-[#DD0031] text-transparent bg-clip-text",
          },
          {
            name: "Spring Boot",
            color: "bg-[#6DB33F] text-transparent bg-clip-text",
          },
          {
            name: "MySQL",
            color: "bg-[#00758F] text-transparent bg-clip-text",
          },
          {
            name: "JWT Auth",
            color: "bg-[#EA580C] text-transparent bg-clip-text",
          },
          {
            name: "TypeScript",
            color: "bg-[#409EFF] text-transparent bg-clip-text",
          },
        ],
        image: careercrafter,
        source_code_link: "https://github.com/harsh684/CareerCrafter",
      },
      {
        name: "Medical Search Engine",
        description:
          "A Web-based application that allows you to search for any disease or any medical related term.",
        tags: [
          {
            name: "HTML",
            color: "bg-[#E44D26] text-transparent bg-clip-text",
          },
          {
            name: "SASS",
            color: "bg-[#264DE4] text-transparent bg-clip-text",
          },
          {
            name: "Javascript",
            color: "bg-[#F7DF1E] text-transparent bg-clip-text",
          },
          {
            name: "Wikipedia API",
            color: "bg-[#3B82F6] text-transparent bg-clip-text",
          },
          
        ],
        image: medisearch,
        source_code_link: "https://github.com/harsh684/Search_Engine",
      },
      {
        name: "ToDo App",
        description:
          "A Web-based ToDo list application.",
        tags: [
          {
            name: "Angular16",
            color: "bg-[#DD0031] text-transparent bg-clip-text",
          },
          {
            name: "Spring Boot",
            color: "bg-[#6DB33F] text-transparent bg-clip-text",
          },
          {
            name: "Bootstrap",
            color: "bg-[#B197FC] text-transparent bg-clip-text",
          },
          {
            name: "Typescript",
            color: "bg-[#409EFF] text-transparent bg-clip-text",
          },
          
        ],
        // image: todo,
        // source_code_link: "https://github.com/harsh684/Search_Engine",
      },
    ];
  
  export { services, technologies, experiences, testimonials, projects };
