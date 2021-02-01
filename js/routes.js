var timestamp   = Date.now();
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
	path: '/mainpage/',
	componentUrl: './pages/main.html?'+timestamp,
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
