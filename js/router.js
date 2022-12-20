const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/spa/pages/404.html",
    "/": "/spa/pages/index.html",
    "/about": "/spa/pages/about.html",
    "/lorem": "/spa/pages/lorem.html",
};

const handleLocation = async () => {
    let path = window.location.pathname;
    if(path.indexOf("/spa")>=0)
        path = path.slice(4);
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    console.log(html)
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
