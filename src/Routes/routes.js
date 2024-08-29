const ROUTES = {
  home: "/",
  projects: "/projects",
  detail: {path: "/project/:id", to: "/project/"},
  
  notFound: "*"
}

export default ROUTES;