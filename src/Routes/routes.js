const ROUTES = {
  home: "/",
  projects: "/projects",
  project: {path: "/projects/:id", to: "/projects/"},
  
  notFound: "*"
}

export default ROUTES;