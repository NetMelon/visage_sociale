
/***********************
 * Handlebars glue
***********************/

var context = {
    posts:[
      {
        photo:4,
        author:"Hans",
        body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        timestamp:"about a minute",
        appearance:123
      },{
        photo:5,
        author:"Franz",
        body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        timestamp:"16 minutes",
        appearance:123
      },
      {
        photo:6,
        author:"Franz",
        body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        timestamp:"16 minutes",
        appearance:123
      },
      {
        photo:7,
        author:"Franz",
        body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
        timestamp:"16 minutes",
        appearance:123
      }
    ],

    links:[["News Feed", "Friends", "Events", "Photos"],["Bookmarks", "Groups", "Notes", "Ads and Pages", "Gifts"]],

    title: "My First Blog Post!",
    author: {
      id: 47,
      name: "Yehuda Katz"
    },
    body: "My first post. Wheeeee!",
    lorem:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  };

  Handlebars.registerHelper('postPhoto', function(photo) {
    var id = Handlebars.escapeExpression(this.photo);

return new Handlebars.SafeString(
  '<img class="photo" src="images/' + id +'.jpg" />'
);
});


var source   = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var html    = template(context);

document.body.innerHTML += html;