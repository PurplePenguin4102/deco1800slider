var url_patterns = ["flickr.com", "nla.gov.au", "images.sla.gov.au", "artsearch.nga.gov.au", "recordsearch.naa.gov.au"];
var availableImages = {
                       "nla": {
                           "numImages":0,
                           "url_pattern":"nla.gov.au",
                           "images":[]
                       },
                       "artsearch": { 
                           "numImages":0, 
                           "url_pattern":"artsearch.nga.gov.au", 
                           "images":[]
                       },
                       "totalImages":0,
                       };

function trove_search(searchStr) {

    var n = 100;
    var s = 0;
    var enc = "&encoding=json";
    var zone = "&zone=picture";
    var aus = "&l-australia=y";
    var avail = "&l-availability=y%2Ff";
    var baseURL = "http://api.trove.nla.gov.au/result?";
    var api = "toi7b0uo1lof3nue";
    var fullURL = baseURL + "key=" + api + zone + avail +
                  "&q=" + encodeURIComponent(searchStr) +
                  "&n=" + n + "&s=" + s + enc + "&callback=?";
    console.log(fullURL);
    $.getJSON(fullURL, dump_asset);
    //console.log(availableImages);
}

function dump_asset(jsonObj) {
    //trove's response
    //console.log(jsonObj);
    
    //now we filter the data into our data struct
    $.each(jsonObj.response.zone[0].records.work, process_images);
    var index = Math.floor(Math.random() * availableImages["nla"]["images"].length);
    var imgURL = availableImages["nla"]["images"][index] + "/representativeImage";
    console.log("loaded...");
    console.log(imgURL);
    console.log(availableImages["nla"]["images"].length);
    $("#slider").attr('src', imgURL);
}

function process_images(index, troveItem) {
    for (var i in availableImages) {
        if (troveItem.identifier[0].value.indexOf(availableImages[i].url_pattern) >= 0) {
            availableImages[i].numImages++;
            availableImages.totalImages++;
            availableImages[i]["images"].push(troveItem.identifier[0].value);
        }
    }
}
