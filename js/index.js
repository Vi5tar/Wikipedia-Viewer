function search() {
  var query = document.getElementsByName("query")[0].value;
  $.getJSON(
    "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" +
      query +
      "&callback=?",
    function(data) {
      for (var i = 0; i < data.query.search.length; i++) {
        var title = data.query.search[i].title;
        $("#title" + i).html(
          "<div class = 'well'>" +
            "<a href='https://en.wikipedia.org/wiki/" +
            title +
            "' target = '_blank'>" +
            data.query.search[i].title +
            "</a><br>" +
            data.query.search[i].snippet +
            "</div>"
        );
      }
    }
  );
}

function randomWiki() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
}