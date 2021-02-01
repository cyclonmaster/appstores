
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
	path: '/mainpage/',
	//url: './pages/main.html'
	componentUrl: './pages/main.html'
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
