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
                   Franchise business oppurtunity in your city!
                </h1>
            
                <p class="description-text">
                    Invest in the growing business of Laundry. As per reports, the Laundry Industry is estimated at &#8377;220000 Cr. of which the organised segment comprises a mere 2-3% of the entire laundry market in India.There is a vast scope of laundry businesses to grow and thrive in the Indian market.
                </p>
            </div>

            <div class="col-md-6">
                <!-- Image - Woman with clothes -->
                <img src="./images/wash_view2.png" class="responsive-woman" alt="women"/>
            </div>   
        </div>
    </div>
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