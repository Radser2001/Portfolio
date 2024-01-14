import reactIcon from "../public/skills/react.svg";
import nodeJSIcon from "../public/skills/nodeJS.svg";
import expressJSIcon from "../public/skills/expressJS.svg";
import mySQLIcon from "../public/skills/mySQL.svg";
import mongoDBIcon from "../public/skills/mongoDB.svg";
import nextJSIcon from "../public/skills/nextJS.svg";
import cssIcon from "../public/skills/css.svg";
import materialUIIcon from "../public/skills/materialUI.svg";
import tailwindCSSIcon from "../public/skills/tailwindCSS.svg";
import kotlinIcon from "../public/skills/kotlin.svg";
import typeScriptIcon from "../public/skills/typeScript.svg";
import djangoIcon from "../public/skills/django.svg";
import pythonIcon from "../public/skills/python.svg";
import javaIcon from "../public/skills/java.svg";
import phpIcon from "../public/skills/php.svg";
import laravelIcon from "../public/skills/laravel.svg";
import nuxtIcon from "../public/skills/nuxtJS.svg";
import flutterIcon from "../public/skills/flutter.svg";
import firebaseIcon from "../public/skills/firebase.svg";
import flaskIcon from "../public/skills/flask.svg";
import golangIcon from "../public/skills/golang.svg";
import pandasIcon from "../public/skills/pandas.svg";
import numpyIcon from "../public/skills/numpy.svg";
import springBootIcon from "../public/skills/springboot.svg";
import jupyterNotebookIcon from "../public/skills/jupyterNotebook.svg";

const skills = [
  { name: "ReactJS", icon: reactIcon, tags: ["Frontend"] },
  { name: "NextJS", icon: nextJSIcon, tags: ["Frontend"] },
  { name: "NodeJS", icon: nodeJSIcon, tags: ["Backend"] },
  { name: "ExpressJS", icon: expressJSIcon, tags: ["Backend"] },
  { name: "Flutter", icon: flutterIcon, tags: ["Frontend"] },
  { name: "TailwindCSS", icon: tailwindCSSIcon, tags: ["Frontend"] },
  { name: "MaterialUI", icon: materialUIIcon, tags: ["Frontend"] },
  { name: "CSS", icon: cssIcon, tags: ["Frontend"] },
  { name: "Django", icon: djangoIcon, tags: ["Backend"] },
  { name: "NuxtJS", icon: nuxtIcon, tags: ["Frontend"] },

  { name: "MySQL", icon: mySQLIcon, tags: ["Database"] },
  { name: "MongoDB", icon: mongoDBIcon, tags: ["Database"] },
  { name: "Firebase", icon: firebaseIcon, tags: ["Backend"] },
  { name: "Python", icon: pythonIcon, tags: ["Backend", "Data Science"] },

  { name: "Pandas", icon: pandasIcon, tags: ["Data Science"] },
  { name: "Numpy", icon: numpyIcon, tags: ["Data Science"] },
  {
    name: "Jupyter Notebook",
    icon: jupyterNotebookIcon,
    tags: ["Data Science"],
  },
  { name: "Kotlin", icon: kotlinIcon, tags: ["Backend"] },
  { name: "TypeScript", icon: typeScriptIcon, tags: ["Backend"] },

  { name: "Java", icon: javaIcon, tags: ["Backend"] },
  { name: "PHP", icon: phpIcon, tags: ["Backend"] },
  { name: "Laravel", icon: laravelIcon, tags: ["Backend"] },

  { name: "Flask", icon: flaskIcon, tags: ["Backend"] },
  { name: "Spring Boot", icon: springBootIcon, tags: ["Backend"] },
];

export default skills;
