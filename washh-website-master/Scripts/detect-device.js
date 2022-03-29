
function detectmobileOS(){
    var deviceOs;
    if( navigator.userAgent.match(/Android/i) ){
        deviceOs="Andoid";
    }
    else if(navigator.userAgent.match(/webOS/i)){
        deviceOs="WebOS";
    }
    else if(navigator.userAgent.match(/iPhone/i)){
        deviceOs="iPhone";
    }
    else if(navigator.userAgent.match(/iPad/i)){
        deviceOs="iPad";
    }
    else if(navigator.userAgent.match(/iPod/i)){
        deviceOs="iPod";
    }
    else if(navigator.userAgent.match(/BlackBerry/i)){
        deviceOs="BlackBerry";
    }
    else if(navigator.userAgent.match(/Windows Phone/i)){
        deviceOs="WindowsPhone";
    }
    else{
        deviceOs="Not Mobile";
    }
    return deviceOs;
}   


function detectDesktopOS(){
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      desktopos = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        desktopos = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        desktopos = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        desktopos = 'Windows';
    } else if (/Android/.test(userAgent)) {
        desktopos = 'Android';
    } else if (!desktopos && /Linux/.test(platform)) {
        desktopos = 'Linux';
    }

    return desktopos;
}