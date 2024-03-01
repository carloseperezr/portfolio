import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        // NavBar
        home: "Home",
        projects: "Projects", 
        about: "About", 
        stack: "Stack",
        hireMeBtn: "Let's work",
        // Hero
        "welcome": "Hello",
        "im": "I am",
        "role": "Web Developer", 
        "heroInfo": "Passionate developer, transforming ideas into remarkable digital experiences.",
        // Projects
        projectsTitle: "Projects",
        projectsInfo: "With loads of passion, I've crafted some truly standout digital experiences, mixing in every little detail with a touch of style. It's what gives my projects that extra special something!",
        projectsEquilibrium: "Created with ReactJS and CSS Modules. A blend of design and functionality, this website merges the power of React with the modularity of CSS to give you a great user experience.",
        projectsRCAcc: "RCAutoacc, powered by ReactJS with sleek implementations of hooks and refs. Discover car accessories smoothly and efficiently in an exceptional user experience.",
        projectsPsicoEze: "PsicoEze, online psychotherapist, health services page, developed with ReactJS, React Router, and Hooks, accompanied by CSS modules to give it a unique, characteristic, and functional style.",
        projectsEasyWeb: "Website designed for EasyWeb, using ReactJS and JavaScript as a library and programming language, accompanied by CSS Module to give a unique and fresh style, just what they want to show.",
        // About
        aboutTitle: "About Me",
        aboutInfo: "Hey there, back again! Let me give you a bit more insight into who I am. I'm a programmer who's all about JavaScript y ReactJS. I thrive in team settings and am a breeze to communicate with, making me a perfect fit for any project. When it comes to my work, I'm all about the details and aim for nothing short of excellence. I get a real kick out of problem-solving and diving into fresh challenges in the awesome realm of software development!",
      }
    },

    es:{
      translation: {
        // NavBar
        home: "Inicio",
        projects: "Proyectos",
        about: "Sobre Mí", 
        stack: "Stack",
        hireMeBtn: "Trabajemos",
        // Hero
        "welcome": "Hola",
        "im": "Soy",
        role: "Desarrollador Web", 
        heroInfo: "Desarrollador apasionado, transformando ideas en experiencias digitales notables.",
        // Projects
        projectsTitle: "Proyectos",
        projectsInfo: "Con pasión he creado experiencias digitales notables, fusionando cada detalle con el buen gusto, lo que define mi enfoque distintivo en cada proyecto realizado.",
        projectsEquilibrium: "Creada con ReactJS y CSS Modules. Una mezcla de diseño y funcionalidad, esta página web fusiona la potencia de React con la modularidad de CSS para brindarte una buena experiencia de uso.",
        projectsRCAcc: "RCAutoacc, impulsada por ReactJS con elegantes implementaciones de hooks y refs. Descubre accesorios para autos de manera fluida y eficiente en una experiencia de usuario excepcional.",
        projectsPsicoEze: "PsicoEze, psicoterapeuta online, página de servicios de salud, desarrollada con ReactJS, React Router y Hooks, acompañada de módulos CSS para darle un estilo único, característico y funcional.",
        projectsEasyWeb:"Página web diseñada para EasyWeb, utilizando ReactJS y JavaScript como libreria y lenguaje de programación, acompañado por CSS Modulue para dar un estilo único y fresco, justo lo que quieren mostrar.",
        // About
        aboutTitle: "Sobre Mí",
        aboutInfo: "¡Hola nuevamente! quiero contarte un poco más de mí, soy un programador especializado en JavaScript y ReactJS. Mi enfoque colaborativo y habilidades de comunicación me permiten integrarme fácilmente en equipos de desarrollo, mientras que mi dedicación a los detalles impulsa la excelencia en cada proyecto. Apasionado por resolver problemas, disfruto enfrentar nuevos desafíos en el mundo del desarrollo de software."
      }
    }
  }
});

export default i18n;
