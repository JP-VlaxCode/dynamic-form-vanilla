import { html as home } from "./pages/home/index.js";
import { html as create } from "./pages/create/index.js";

(async () => {
  const routes = {
    "/": home,
    "/create": create,
  };

  let route = window.location.pathname.replace("index.html", "");
  let routeHash = window.location.hash;

  if (routeHash) {
    route = routeHash.replace("#", "");
  }
  console.log("Route loaded: ", route);

  const rootDiv = document.getElementById("root");
  rootDiv.innerHTML = await routes[route];

  document.getElementById("aroute-home").addEventListener("click", () => {
    onNavigate("/");
  });

  document.getElementById("aroute-create").addEventListener("click", () => {
    onNavigate("/create");
  });

  const onNavigate = async (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = await routes[pathname];
  };

  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
  };
})();
