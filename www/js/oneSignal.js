// JavaScript Document

// Add to index.js or the first page that loads with your app.
document.addEventListener('deviceready', OneSignalInit, false);
function OneSignalInit() {
    // Uncomment to set OneSignal device logging to VERBOSE  
    // window.plugins.OneSignal.setLogLevel(6, 0);

    // NOTE: Update the setAppId value below with your OneSignal AppId.
    window.plugins.OneSignal.setAppId("daa98904-fee5-40df-a894-60bee78b711c");
    window.plugins.OneSignal.setNotificationOpenedHandler(function (jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });

    // iOS - Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
        console.log("User accepted notifications: " + accepted);
    });
}


//Add external user id
function addExternalUserId(id) {
    window.plugins.OneSignal.setExternalUserId(id);
}