const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 12, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Core Web Vitals Passed" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React.js",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Next.js",
    imgPath: "/images/logos/next.png",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Nest.js",
    imgPath: "/images/logos/nest.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const expCards = [
  {
    company: "Builtvisor Pvt Ltd.",
    logoPath: "/images/logo1.png",

    title: "Software Development Intern ",
    date: "January 2023 - Aug-2023",
    responsibilities: [
      "Developed a site management web app connecting architects, constructors, and stakeholders.",
      "Led frontend development, translating UI/UX designs into responsive web pages.",
      "Focused on delivering a seamless and intuitive user experience.",
    ],
  },
  {
    company: "Builtvisor Pvt Ltd.",
    logoPath: "/images/logo2.png",

    title: "Software Development Engineer",
    date: "August-2023 - December 2023",
    responsibilities: [
      "Built a secure image upload and resizing endpoint with AWS S3 integration",
      "Stored image metadata in the database for efficient retrieval and management",
      "Added user management features to support inviting existing and new users",
      "Used Highcharts for real-time, interactive data visualizations",
      "Deployed the backend on AWS EC2 for scalable and reliable performance",
    ],
  },
  {
    company: "Ryaz.io",
    logoPath: "/images/logo3.png",

    title: "Frontend Developer",
    date: "December 2023 - Current",
    responsibilities: [
      "Revamped UI and resolved Gestpay payment issues with backend collaboration",
      "Provided on-call support during live race events in Italy for real-time bug fixes",
      "Built a high-performance Next.js app with >95% performance score and API integrations",
      "Used SSR to improve social media previews and reduced load times by 60%",
      "Optimized UI pages, cutting load times by 50% and boosting efficiency",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/dheeraj-arora/",
  },
    {
    name: "medium",
    imgPath: "/images/medium.png",
    url: "https://medium.com/@dheeraj05",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/spellbounded_05",
  },
    {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/spellbounded_05/",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackImgs,
  navLinks,
};
