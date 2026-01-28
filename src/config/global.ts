export const globalConfig = {
  site: {
    name: "Portfolio M Yayang Setiawan",
    author: "M Yayang Setiawan",
    description: "A brief description of your portfolio website",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2025 M Yayang Setiawan. All rights reserved.",
    social: {
      github: "https://github.com/myayangs",
      email: "myayangs@gmail.com"
    }
  }
} as const; 