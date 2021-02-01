var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  name: 'CyclonApps', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data() {
    return {
      foo: 'bar'
    };
  },
  // App root methods
  methods: {
    doSomething() {
      // ...
    }
  },
  
  navbar: {
    mdCenterTitle: true
  },


  // App routes
  routes: routes,
});

var mainView = app.views.create('#view-mainpage', {
	url: '/mainpage/',
    stackPages: true,
});