function hello() {
    console.log("Greetings from trove :)");
}

function trove_search(searchStr) {
    var n = 5;
    var s = 1 + Math.floor(Math.random() * 500);
    var enc = "&encoding=json";
    var zone = "&zone=picture";
    var aus = "&l-australia=y";
    var avail = "&l-availability=y/f";
    var baseURL = "http://api.trove.nla.gov.au/result?"
    var api = "toi7b0uo1lof3nue"
    var fullURL = baseURL + "key=" + api + zone +
                  "&q=" + encodeURIComponent(searchStr) +
                  "&n=" + n + "&s=" + s + enc;
    console.log(fullURL);
    jQuery.get(fullURL, function( data ) {
        alert( "Data loaded: " + data);
    }, "json" );
}

function dump_asset(jsonObj) {

}
