var mobos=detectmobileOS();
var deskos=detectDesktopOS();

document.write(`
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css"
    href="./Styles/stop-worrying.css"/>

    <div class="stop-worrying-container">
        <div class="row m-3">
            <div class="col-md-6">
                <h1 class="stop-worrying-heading-text">
                   Hi <span id="city-name"></span>, we're here!
                </h1>
            
                <p class="description-text">
                    Do you want to look your best but are too pressed for time? 
                    <br/>Washh is an affordable and convenient premium laundry service that delivers world-class cleaning, including washing, ironing, and laundry dry-cleaning, as well as free pick up and delivery in record time.
                </p>
                <br /><hr /> <br />
                
                <div id="downloadInfo">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <h4 class="download-app-text">
                                <b>Download Our App Now:</b>
                            </h4>
                            <p class="offer-text">
                                Get 20% Off on your first booking
                            </p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <a id="download-app"></a>
                        </div>
                    </div>
                    <br /><hr class="line-disable"/> <br />
                </div>
            </div>

            <div class="col-md-6">
                <!-- Image - Woman with clothes -->
                <img src="./images/women.jpg" class="responsive-woman" alt="women"/>
            </div>
        </div>
    </div>
    <br/><br/>
`);

$(document).ready(function($) {
    $(window).resize(resizeStopWorying);
    $(window).resize();
});

function resizeStopWorying(){
    if(window.innerWidth > 786){
        document.getElementById("download-app").innerHTML="";
        document.getElementById("download-app").innerHTML+=`
            <div class="download-app-link mt-5">
                <a href="https://play.google.com/store/apps/details?id=com.washh" style="color: white; background-color: #3474eb;
                padding: 5%; border-radius: 4px; font-size:16px; text-decoration: none;"
                class="mt-1">
                    Download for Andoid
                </a>
            </div>
        `;
    }else if(window.innerWidth <= 786){
        document.getElementById("download-app").innerHTML="";
        if(mobos=="Not Mobile" || deskos=="Windows"){
            document.getElementById("download-app").innerHTML+=`
            <div class="download-app-link mt-5">
                <a href="https://play.google.com/store/apps/details?id=com.washh" style="color: white; background-color: #3474eb;
                padding: 3%; border-radius: 4px;
                text-decoration: none;"
                class="mt-1">
                    Download for Andoid
                </a>
            </div>
            `;
        }else if(mobos=="Andoid" || deskos=="Android"){
            document.getElementById("download-app").innerHTML+=`
                <a href="https://play.google.com/store/apps/details?id=com.washh">
                    <img src="./images/google-play-badge.jpg"
                    alt="Google Play Link"
                    class="downloadd-image"/>
                </a>
            `;
        }else if(mobos=="iPhone" || mobos=="iPad" || deskos=="Mac OS" || deskos=="iOS"){
            // document.getElementById("downloadInfo").innerHTML="";
            document.getElementById("downloadInfo").style.display="none";
        }
    }
}