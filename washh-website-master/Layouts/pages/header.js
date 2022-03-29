document.write(`
    <div class="header-mobile-view">
        <div class="row header-container">
            <div class="row"></div>
            <div class="col-md-1 col-sm-1 col-xs-1"></div>
            <div class="header-text col-md-10 col-sm-10 col-xs-10">
                <p id="user_location"></p>
                <b>Download our app now and Get 20% Off on your 1st order
                    &nbsp; | &nbsp;  
                Download Now: <a href="">For Android</a>
                &nbsp;  <a href="">For iPhone</a>
                &nbsp; | &nbsp; Or Call/Whatsapp on +91-7575901444
                </b>
                </div>
            <div class="col-md-1 col-sm-10 col-xs-1"></div>
        </div>
    </div>
`);

// -------------------------------------------------
// CODE TO ACCESS USER LOCATION 
// (Just rmove the comments and it'll work fine.)
// (Location will be displayed on the header)
// -------------------------------------------------
        
// function success(data){
//     document.getElementById("user_location").innerHTML=`
//         <div class="spinner-border text-primary" role="status">
//             <span class="visually-hidden">Loading...</span>
//         </div>
//     `;
//     var api_key = '974f26ed63be4205aceb0e79e92c0be9';
//     var latitude = data.coords.latitude;
//     var longitude = data.coords.longitude;
//     var api_url = 'https://api.opencagedata.com/geocode/v1/json'
//     var request_url = api_url
//     + '?'
//     + 'key=' + api_key
//     + '&q=' + encodeURIComponent(latitude + ',' + longitude)
//     + '&pretty=1'
//     + '&no_annotations=1';
//     var request = new XMLHttpRequest();
//     request.open('GET', request_url, true);

//     request.onload = function () {
//         if (request.status === 200){ 
//             var data = JSON.parse(request.responseText);
//             var userlocation=data.results[0].formatted;
//             console.log(userlocation);
            
//             var loc = [];
//             const myLocation = userlocation.split(",");
//             var len=myLocation.length;
//             var i=len;

//             for(i=1; i<len; i++){
//                 loc+= myLocation[i];
//             }
//             console.log(loc);
//             var msg=`
//                 <b class="p-3 bg-primary"
//                 style="border-radius: 10px; color: white;
//                 opacity: 70%;">You are viewing from `;

//             document.getElementById("user_location").innerHTML = msg+loc+`</b>`;
//             setTimeout(function(){
//                 document.getElementById("user_location").innerHTML = '';
//             }, 7000);

//         } else if (request.status <= 500){ 
//             console.log("unable to geocode! Response code: " + request.status);
//             var data = JSON.parse(request.responseText);
//             console.log('error msg: ' + data.status.message);
//         } else {
//             console.log("server error");
//         }
//     };

//     request.onerror = function() {
//         console.log("unable to connect to server");        
//     };
//     request.send();

// }

// navigator.geolocation.getCurrentPosition(success, console.error); 
