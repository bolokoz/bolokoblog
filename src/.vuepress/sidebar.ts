import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  
  {
    
  "/": [
    "",
    {
      text: "Projetos",
      icon: "laptop-code",
      prefix: "projects/",
      link: "projects/",
      children: "structure",
    },
    {
      text: "Articles",
      icon: "blog",
      prefix: "articles/",
      children: "structure",
    },
    "about",
  ],
  "/projects/": [
    ""
  ]
},
);
