
askForApproval();
		
function askForApproval() {
	var title="Notification By Washh";
	var body="This is a custom Notification for testing purpose.";
	var icon="images/Washh-logo.jpg";

    if(Notification.permission === "granted") {
        createNotification(title, body, icon);
    }
    else {
        Notification.requestPermission(permission => {
            if(permission === 'granted') {
                createNotification(title, body, icon);
            }
        });
    }
}

function createNotification(title, text, icon) {
    const noti = new Notification(title, {
        body: text,
        icon
    });
}
