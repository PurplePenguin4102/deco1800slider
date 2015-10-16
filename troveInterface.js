var urlPatterns = ["flickr.com", "nla.gov.au", "artsearch.nga.gov.au", "recordsearch.naa.gov.au", "images.slsa.sa.gov.au"];
var loadedImagesPolit = [];
var loadedImagesAnim = [];
var loadedImagesLand = [];


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


    // This line of code is where we make our API call to trove
    $.getJSON(fullURL, function(data) {
        success_callback(data, searchStr);	
	});
}

function dump_asset_to_slider(assetName) {
    var index;
    var imgURL;

    switch (assetName) {
        case "animals" :
            index = Math.floor(Math.random() * loadedImagesAnim.length);
            imgURL = loadedImagesAnim[index];
            break;
        case "politicians" :
            index = Math.floor(Math.random() * loadedImagesPolit.length);
            imgURL = loadedImagesPolit[index];
            break;
        case "landmarks" :
            index = Math.floor(Math.random() * loadedImagesLand.length);
            imgURL = loadedImagesLand[index];
            break;
    }
    $("#slider").attr('src', imgURL.url);
}



function success_callback(jsonObj, searchStr) {
        $.each(jsonObj.response.zone[0].records.work, function(index, troveItem) {
            
            save_images(index, troveItem, searchStr);
            });
}

function save_images(index, troveItem, search) {
    var imgArray;
    var imgUrl = troveItem.identifier[0].value;
    
    console.log("(DEBUG) " + search);
    switch (search) {
        case "animals" :
            imgArray = loadedImagesAnim;
            break;
        case "politicians" :
            imgArray = loadedImagesPolit;
            break;
        case "landmarks" :
            imgArray = loadedImagesLand;
            break;
    }
 
    if (imgUrl.indexOf(urlPatterns[0]) >= 0) { // flickr
        addFlickrItem(imgUrl, troveItem, search);

    } else if (imgUrl.indexOf(urlPatterns[1]) >= 0) { // nla.gov
        imgArray.push({
            url: imgUrl + "/representativeImage?wid=900", // change ?wid=900 to scale the image
            obj: troveItem
        });

    } else if (imgUrl.indexOf(urlPatterns[2]) >= 0) { //artsearch
        imgArray.push({
            url: "http://artsearch.nga.gov.au/IMAGES/LRG/" + getQueryVariable("IRN", imgUrl) + ".jpg",
            obj: troveItem
        });

    } else if (imgUrl.indexOf(urlPatterns[3]) >= 0) { //recordsearch
        imgArray.push({
            url: "http://recordsearch.naa.gov.au/NAAMedia/ShowImage.asp?T=P&S=1&B=" + getQueryVariable("Number", imgUrl),
            obj: troveItem
        });

    } else if (imgUrl.indexOf(urlPatterns[4]) >= 0) { //slsa 
        imgArray.push({
            url:  imgUrl.slice(0, imgUrl.length - 3) + "jpg",
            obj: troveItem
        });
            
    } else { // Could not reliably load image for item
        console.log("Not available: " + imgUrl);
    } 
}

function addFlickrItem(imgUrl, troveItem, search) {
    var flickr_key = "176397a3fb33a3a0ab5ef52ae4c92021";
    var flickr_secret = "7b5ec5a631288c38";
    var flickr_url = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + flickr_key + "&photo_id=";
    var url_comps = imgUrl.split("/");
    var photo_id = url_comps[url_comps.length - 1];
    var imgUrl = troveItem.identifier[0].value;

    switch (search) {
        case "animals" :
            imgArray = loadedImagesAnim;
            break;
        case "politicians" :
            imgArray = loadedImagesPolit;
            break;
        case "landmarks" :
            imgArray = loadedImagesLand;
            break;
    }
 
    $.getJSON(flickr_url + photo_id + "&format=json&nojsoncallback=1", function(data) {
        if (data.stat == "ok") {
            var flickr_image_url = data.sizes.size[data.sizes.size.length - 1].source;
            imgArray.push({
                url: flickr_image_url,
                obj: troveItem
            });
        }
    });
}

// nick wrote this :)
function getQueryVariable(variable, url) {
        var query = url.split("?");
        var vars = query[1].split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }
