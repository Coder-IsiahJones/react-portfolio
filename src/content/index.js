export default {
  nav: {
    logo: "Isiah Jones",
    links: [
      { text: "Projects", to: "myprojects" },
      { text: "Contact", to: "mycontact" },
      // { text: "Resume", to: "myresume" },
    ],
  },
  header: {
    img: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
    text: ["Welcome!", "", "I am a "],
    typical: [
      "Junior Software Developer who appreciates creating Modern and Responsive designs for Web and Mobile integrated with a SQL Database Management Portal. Let us work together to make your business thrive.",
      2000,
      "Web Developer.",
      2000,
      "FullStack Developer",
      2000,
      "Database Developer",
      2000,
      "Mobile Developer",
      2000,
      "Junior Web Developer.",
      2000,
      "Tech Enthusiast.",
      2000,
      "Sneaker Enthusiast.",
      2000,
      "SneakerHead.",
      2000,
    ],
    btnText: "Hire Me",
  },

  contact: {
    title: "Contact Me!",
    socials: [
      {
        alt: "github",
        img: process.env.PUBLIC_URL + "/assets/github.png",
      },
      {
        alt: "link",
        img: process.env.PUBLIC_URL + "/assets/link.png",
      },
    ],
    img: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
  },

  stack: {
    title: "Stack",
    tech: [
      {
        img: process.env.PUBLIC_URL + "/assets/net-logo.png",
        alt: ".Net",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/c-logo.png",
        alt: "c#",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/sql-logo.svg",
        alt: "sql",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/html-logo.png",
        alt: "html5",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/javascript-logo.png",
        alt: "html5",
      },
      {
        img: process.env.PUBLIC_URL + "/logo512.png",
        alt: "react",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/firebase-logo.png",
        alt: "firebase",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/tailwind-logo.png",
        alt: "tailwind css",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/node.png",
        alt: "node",
      },
    ],
    desc: `I specialize in many different technologies that will bring your ideas to life. My arsenal is always growing so if you don't see your favorite tech stack above don't worry. Building your company's website that is also mobile-friendly is my goal for you. Don't be overwhelmed by all the technical lingo. I will break things down into small chunks and deliver simplified information that you can digest to get your company to the next level with the ever-changing technology innovations`,
  },

  project: {
    projects: [
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/LJCDT.png",
        job: "Senior Project",
        title: "Leadership Johnson County Driving Tour",
        location: "Franklin, IN",
        date: "05/15/2020",
        code: "Asp.net",
        website: "https://computing.franklincollege.edu/2020LJCDT/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/wildfire-tracker.png",
        job: "React Project Demo",
        title: "Wildfire Tracker",
        location: "Fort Wayne, IN",
        date: "07/06/2021",
        code: "React",
        website: "https://wildfire-tracker-blush.vercel.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/giordanos.png",
        job: "React Project  Demo",
        title: "Giordanos",
        location: "Fort Wayne, IN",
        date: "05/20/2021",
        code: "React",
        website: "https://giordanos-react-demo.netlify.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/real-estate.png",
        job: "React Project  Demo",
        title: "Realtor Co",
        location: "Fort Wayne, IN",
        date: "05/20/2021",
        code: "React",
        website: "https://project-real-estate-demo.netlify.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/animation.png",
        job: "React Project  Demo",
        title: "Welcome to Space",
        location: "Fort Wayne, IN",
        date: "05/20/2021",
        code: "React",
        website: "https://animation-react-demo.netlify.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/webull.png",
        job: "React Project  Demo",
        title: "WeBull",
        location: "Fort Wayne, IN",
        date: "05/20/2021",
        code: "React",
        website: "https://webull-react-demo.netlify.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/disney.png",
        job: "React Project  Demo",
        title: "Disney Clone",
        location: "Fort Wayne, IN",
        date: "05/28/2021",
        code: "React",
        website: "https://disneyplus-clone-a9549.web.app",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/gmail.png",
        job: "React Project  Demo",
        title: "Gmail Clone",
        location: "Fort Wayne, IN",
        date: "06/01/2021",
        code: "React",
        website: "https://react-clone-8680e.web.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/amazon.png",
        job: "Next.js Project  Demo",
        title: "Amazon Clone",
        location: "Fort Wayne, IN",
        date: "06/14/2021",
        code: "React",
        website: "https://amazon-clone-next-js-two.vercel.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/google-clone.png",
        job: "Next.js w/TailwindCSS Project  Demo",
        title: "Google Clone",
        location: "Fort Wayne, IN",
        date: "06/23/2021",
        code: "React",
        website: "    https://google-search-clone-chi.vercel.app",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/trvl.png",
        job: "React Project",
        title: "TRVL",
        location: "Fort Wayne, IN",
        date: "05/05/2021",
        code: "React",
        website: "https://trvlreact.netlify.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/Rocky.png",
        job: "Demo Project",
        title: "Rocky Landscaping",
        location: "Fort Wayne, IN",
        date: "02/09/2020",
        code: "Asp.net",
        website: "",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/inventory.png",
        job: "Personal Project",
        title: "Sneaker AIO",
        location: "Fort Wayne, IN",
        date: "Current",
        code: ".Net",
        website: "",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/netcore.png",
        job: "Class Project",
        title: "SportsPlay",
        location: "Franklin, IN",
        date: "05/20/2020",
        code: ".Net",
        website: "",
      },
      {
        img:
          process.env.PUBLIC_URL + "/assets/Projects/sneakerinventory2.0.png",
        job: "Personal Project",
        title: "Sneaker Inventory 2.0",
        location: "Fort Wayne, IN",
        date: "09/01/2019",
        code: "Asp.Net",
        website: "",
      },
      {
        img:
          process.env.PUBLIC_URL + "/assets/Projects/travel-landing-page.png",
        job: "Landing Page Project",
        title: "Never Stop Exploring",
        location: "Fort Wayne, IN",
        date: "04/25/2021",
        code: "HTML, CSS, Javascript",
        website: "https://coder-isiahjones.github.io/Travel-Landing-Page/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/social.png",
        job: "Dashboard Project",
        title: "Social Dashboard",
        location: "Fort Wayne, IN",
        date: "04/12/2021",
        code: "HTML, CSS, Javascript",
        website:
          "http://coder-isiah-projects.42web.io/Social%20Media%20Dashboard/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/podcast.png",
        job: "Landing Page Project",
        title: "Publish your Podcast",
        location: "Fort Wayne, IN",
        date: "04/11/2021",
        code: "HTML, CSS, Javascript",
        website: "https://coder-isiahjones.github.io/Podcast-Landing-Page/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/timer.png",
        job: "Timer Project",
        title: "Launch Countdown Timer",
        location: "Fort Wayne, IN",
        date: "04/09/2021",
        code: "HTML, CSS, Javascript",
        website: "https://coder-isiahjones.github.io/Launch-Countdown-Timer/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/particlesystem.png",
        job: "Three.js Project",
        title: "Particle System",
        location: "Fort Wayne, IN",
        date: "04/02/2021",
        code: "Javascript",
        website: "https://particlesystem.netlify.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/3dterrain.png",
        job: "Three.js Project",
        title: "3D Terrain",
        location: "Fort Wayne, IN",
        date: "03/02/2021",
        code: "Javascript",
        website: "https://3dterraindemo.netlify.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/feelthesphere.png",
        job: "Three.js Project",
        title: "Feel the Sphere",
        location: "Fort Wayne, IN",
        date: "03/16/2021",
        code: "Javascript",
        website: "https://feelthesphere.netlify.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/hauntedhouse.png",
        job: "Three.js Project",
        title: "Haunted House",
        location: "Fort Wayne, IN",
        date: "03/05/2021",
        code: "Javascript",
        website: "https://hauntedhousedemo.netlify.app/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/car.png",
        job: "Website Project",
        title: "Automotive",
        location: "Fort Wayne, IN",
        date: "09/16/2020",
        code: "HTML, CSS, Javascript",
        website: "https://coder-isiahjones.github.io/Car-Website/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/musician.png",
        job: "Landing Page Project",
        title: "Go Musician",
        location: "Fort Wayne, IN",
        date: "08/11/2019",
        code: "HTML, CSS, Javascript",
        website: "https://coder-isiahjones.github.io/Modern-Web-Design/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/sneaker.png",
        job: "Gallery Project",
        title: "Sneaker Gallery",
        location: "Fort Wayne, IN",
        date: "11/20/2019",
        code: "HTML, CSS, Javascript",
        website: "https://coder-isiahjones.github.io/Masonry/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/26andfour.png",
        job: "Website Project",
        title: "26andfour",
        location: "Fort Wayne, IN",
        date: "05/29/2019",
        code: "HTML, CSS, Javascript",
        website: "https://coder-isiahjones.github.io/26andfour/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/colmar.png",
        job: "Website Project",
        title: "Colmar Academy",
        location: "Fort Wayne, IN",
        date: "05/17/2019",
        code: "HTML, CSS, Javascript",
        website: "https://coder-isiahjones.github.io/Colmar-Academy/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/Projects/book.png",
        job: "Website Project",
        title: "Daily Tuition",
        location: "Fort Wayne, IN",
        date: "06/26/2019",
        code: "HTML, CSS, Javascript",
        website: "https://coder-isiahjones.github.io/Project02-Book-/",
      },
    ],
  },
}
