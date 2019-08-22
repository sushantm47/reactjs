console.log('App.js is running');

//JSX- javascript XML"use strict";

var template = React.createElement("h1", {
    id: "text"
  }, "This is jsx ");
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);