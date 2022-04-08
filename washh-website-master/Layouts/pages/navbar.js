var mobos=detectmobileOS();
var deskos=detectDesktopOS();

document.write(`
<div class="nav-container" id="myTopnav">
    <div class="header-logo">
        <a href="./index.html">
            <img src="./images/wash-horizontal.png" class="washh-logo-image" height="50"/>
        </a>
    </div>
    <div class="links" id="nav-links">
        <a href="./franchise.html" class="pl-5">For Franchise</a>
        <a href="./business.html" class="pl-5">For Business</a>
        <a id="appLink" style="padding-top:0;"></a>
    </div>
</div>
`);

$(document).ready(function($) {
    $(window).resize(resizeNavbar);
    $(window).resize();
});

function resizeNavbar(){
    if(window.innerWidth > 1024){
        document.getElementById("appLink").innerHTML="";
        document.getElementById("appLink").innerHTML+=`
            <a href="https://play.google.com/store/apps/details?id=com.washh">Download for Android</a>
        `;
    }else if(window.innerWidth <= 1024){
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