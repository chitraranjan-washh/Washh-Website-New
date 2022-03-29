var mobos=detectmobileOS();
var deskos=detectDesktopOS();

document.write(`
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet"> 

    <div id="download-washh" class="download-container download-flex-container" style="padding-top: 5%;">

        <div class="download-flex-left">
            <h2 class="download-heading-text">
                Now Clean Clothes Is Just A
                Tap Away!
            </h2><br />
            
            <p class="download-content">
                Get your dirty laundry picked, cleaned, ironed, and delivered at your convenience with Washh. 
                <br/><b>Download the app now.</b><br/><br/>
            </p>
            <a id="download-link"></a>
        </div>

        <div class="download-flex-right">
            <img src="./images/washh-app.jpg"
            width= "450";
            height= "350";
            class="reponsive-image mt-3"/>
        </div>
    </div>
`);

$(document).ready(function($) {
    $(window).resize(resizeDownlds);
    $(window).resize();
});

function resizeDownlds(){
    if(window.innerWidth > 786){ //For Big Screens (Desktop/Laptop)
        document.getElementById("download-link").innerHTML="";
        document.getElementById("download-link").innerHTML+=`
        <div class="links">
            <a href="https://play.google.com/store/apps/details?id=com.washh" 
            class="desktop-app-link">
                Download for Andoid
            </a>
        </div>
        `;
    }else if(window.innerWidth <= 786){ //For small Screens (Mobile)
        document.getElementById("download-link").innerHTML="";
        if(mobos=="Not Mobile" || deskos=="Windows"){ //OS is not andoid or iOS
            document.getElementById("download-link").innerHTML+=`
                <div class="links">
                    <a href="https://play.google.com/store/apps/details?id=com.washh"
                    class="mt-1 mobile-app-link">
                        Download for Andoid
                    </a>
                </div>
            `;
        }else if(mobos=="Andoid" || deskos=="Android"){ //OS is Android
            document.getElementById("download-link").innerHTML+=`
                <a href="https://play.google.com/store/apps/details?id=com.washh">
                <img src="./images/google-play-badge.jpg" 
                class="android-download-image" alt="Google Play Link"/></a>
            `;
        }else if(mobos=="iPhone" || mobos=="iPad" || deskos=="Mac OS" || deskos=="iOS"){ //OS is iOS
            document.getElementById("download-link").innerHTML+=`
                <p style="font-size: 20px; font-weight: 550; color: #143f85"><i>Coming soon in IOS</i></p>
            `;
            // Above CSS should be convertet to external CSS after testing
        }
    }
}

