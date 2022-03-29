var mobos=detectmobileOS();
var deskos=detectDesktopOS();

document.write(`
<div class="nav-container" id="myTopnav">
    <a href="./" class="ml-5">
        <img src="./images/Washh-logo.jpg" class="washh-logo-image"
        width="45" height="50"/>
    </a>
    <div class="noneed" style="visibility: hidden;">
        <a class="noneed1">For Franchise</a>
        <a class="noneed2">For Business</a>
        <a class="noneed3">Pricing</a>
        <a class="noneed4">Blog</a>
    </div>
    <a href="" class="pl-5">About Us</a>
    <a href="./franchise.html" class="pl-5">For Franchise</a>
    <a href="./business.html" class="pl-5">For Business</a>
    <a href="" class="pl-5">Pricing</a>
 
    <a id="appLink"></a>

    <a href="javascript:void(0);" class="icon" onclick="changeResponsiveClasses()">
        <i class="fa fa-bars"></i>
    </a>
</div>
`);

$(document).ready(function($) {
    $(window).resize(resizeNavbar);
    $(window).resize();
});

function changeResponsiveClasses() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}

function resizeNavbar(){
    if(window.innerWidth > 786){
        document.getElementById("appLink").innerHTML="";
        document.getElementById("appLink").innerHTML+=`
            <a href="#download-washh" style="margin-top: -10%;">Downloads</a>
        `;
    }else if(window.innerWidth <= 786){
        document.getElementById("appLink").innerHTML="";
        if(mobos=="Not Mobile" || deskos=="Windows"){
            document.getElementById("appLink").innerHTML+=`
                <a href="https://play.google.com/store/apps/details?id=com.washh">Download for Android</a>
            `;
        }else if(mobos=="Andoid" || deskos=="Android"){
            document.getElementById("appLink").innerHTML+=`
                <a href="">
                    <img src="./images/google-play-badge.jpg" width="160" height="48"/>
                </a>
            `;
        }else if(mobos=="iPhone" || mobos=="iPad" || deskos=="Mac OS" || deskos=="iOS"){
            document.getElementById("appLink").innerHTML+=`
                <p>App Coming soon for IOS</p>
            `;
        }
    }
}