  //premi Enter por ekserĉi.
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      search()
    }
  });
  
  function liveSearch(vortoW) {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var searchResult = document.getElementById("searchResult");
    if (searchInput === "") {
      searchResult.innerHTML = ""
    }

    const VORTOJ = vortaro.split("\n")

    if (vortoW.length > 1) {
      let PATTERN = new RegExp(`(${(vortoW)})`, "gm");
      let RESULTS = VORTOJ.filter(function(str) {
        return PATTERN.test(str);
      });

      let results = RESULTS.toString()
      .replace(/,/g, "<hr>")
      document.getElementById("liveSearch").innerHTML = results 
    } else {
      document.getElementById("liveSearch").innerHTML = ""
    }
  } 