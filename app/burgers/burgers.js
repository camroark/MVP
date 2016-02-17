<!DOCTYPE html>
<html lang='en' ng-app='app'>
<head>
   <meta charset="utf-8">
   <title> 5MQ </title>
   <link rel='stylesheet' href='style.css'>
</head>
<body ng-controller="MainController">
   <h1 class ='header'>5MQ</h1>
   <div class='navigation'>
      <ul>
         <li><a href='#' class='index'>Home</a></li>
         <li><a href='#' class='create'>About</a></li>
      </ul>
   </div>
   <div class='food'>Burgers</div>
   <div class='food'>Chinese</div>
   <div class='food'>Mediteranean</div>
   <div class='food'>Pizza</div>
   <div class='food'>Ramen</div>
   <div class='food'>Sandwhiches</div>
   <div id='container'></div>
   <script src='angular.js'></script>
   <script src='app.js'></script>
</body>
</html>
