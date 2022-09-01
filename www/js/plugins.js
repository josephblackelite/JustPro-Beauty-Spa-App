// JavaScript Document

var $$ = Dom7;
const { Plugins } = Capacitor;
const { GoogleAuth, FacebookLogin, FacebookLoginResponse, Stripe, PaymentFlowEventsEnum, LocalNotifications, App, CallNumber, EmailComposer, SplashScreen } = Plugins;


// FACEBOOK AUTH PLUGIN  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

FacebookLogin.initialize({ appId: '1191813141432284' });

const FACEBOOK_PERMISSIONS = [
    'email',
    'user_birthday',
    'user_photos',
    'user_gender',
];

let token;
let user;

async function loginWithFb() {
    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

    if (result.accessToken && result.accessToken.userId) {
        token = result.accessToken;
        loadUserData();
    } else if (result.accessToken && !result.accessToken.userId) {
        // Web only gets the token but not the user ID
        // Directly call get token to retrieve it now
        this.getCurrentToken();
    } else {
        console.log("login failed")
    }
}

//Fetch user data
function loadUserData() {
    const url = `https://graph.facebook.com/${token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${token.token}`;
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}

//Get current user
function getCurrentToken() {
    const result = FacebookLogin.getCurrentAccessToken();

    if (result.accessToken) {
        token = result.accessToken;
        loadUserData();
    } else {
        // Not logged in.
    }
}

// GOOGLE AUTH PLUGIN  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.addEventListener('deviceready', GoogleAuth.initialize, false);

GoogleAuth.initialize({
    clientId: '907397645441-ojrqmb5i4ujgjg1gi9ps16juujlmt37o.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    grantOfflineAccess: true,
});

async function googleSignIn() {
    let googleUser = await GoogleAuth.signIn();
    console.log('user : ' + googleUser.email + googleUser.givenName + googleUser.familyName + googleUser.displayName + googleUser.id)

    // Set input values
    $$('#first_name').val(googleUser.givenName);
    $$('#last_name').val(googleUser.familyName);
    $$('#email').val(googleUser.email);
    $$('#googleImgUrl').val(googleUser.imageUrl);
    $$('#password').val(googleUser.id);
    $$('#var1').val(googleUser.id);

    dmx.parse("app.main.login.submit_google_login_form.run()")

}


// STRIPE PLUGIN  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//initialize
Stripe.initialize({
    publishableKey: "pk_test_51KNDGMCQn4pLZ37HnTBiHVjg6zPbY5B5pVgmOAGnmsWAwUSdQA7EfW9tgjckRfHxcsqb7sOj8DxfUPXkfRTtZgOY00d2SkIFxE"
});



// be able to get event of PaymentFlow
Stripe.addListener("paymentFlowLoaded", () => {
    // dmx.parse("app.main.checkout.justpropreloader.hide()")
    // dmx.parse("app.main.billing.justpropreloader.hide()")
    $$('#STRIPE_CARD_SETUP').val('Loaded');
})

Stripe.addListener("paymentFlowOpened", () => {
    dmx.parse("app.main.checkout.justpropreloader.hide()")
    dmx.parse("app.main.billing.justpropreloader.hide()")
    $$('#STRIPE_CARD_SETUP').val('Opened');
})

Stripe.addListener("paymentFlowCreated", () => {
    // dmx.parse("app.main.checkout.justpropreloader.hide()")
    // dmx.parse("app.main.billing.justpropreloader.hide()")
    $$('#STRIPE_CARD_SETUP').val('Created');
})

Stripe.addListener("paymentFlowCompleted", () => {
    dmx.parse("app.main.checkout.justpropreloader.show()")
    dmx.parse("app.main.checkout.check_last_order.start()")
})

Stripe.addListener("paymentFlowFailedToLoad", () => {
    dmx.parse("app.main.checkout.justpropreloader.hide()")
    dmx.parse("app.main.billing.justpropreloader.hide()")
})

Stripe.addListener("paymentFlowCanceled", () => {
    dmx.parse("app.main.checkout.justpropreloader.hide()")
    dmx.parse("app.main.billing.justpropreloader.hide()")

})

Stripe.addListener("paymentFlowFailed", () => {
    dmx.parse("app.main.checkout.justpropreloader.hide()")
    dmx.parse("app.main.billing.justpropreloader.hide()")
    $$('#STRIPE_CARD_SETUP').val('Failed');

})





// prepare PaymentSheet with CreatePaymentSheetOption.
async function createPaymentFlow(setupIntentClientSecret, customer, ephemeralKey) {
    await Stripe.createPaymentFlow({
        setupIntentClientSecret: setupIntentClientSecret,
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        merchantDisplayName: "Maidz_ae"
    });
    await Stripe.presentPaymentFlow();
    await Stripe.confirmPaymentFlow()

}

// LOCAL NOTIFICATIONS PLUGIN >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Request user permission

async function requestUserPermission() {

    await LocalNotifications.requestPermissions();
}

//Schedule notification at specific time 

async function localNotifications_at(title, body, id) {

    //request permission
    requestUserPermission();

    await LocalNotifications.schedule({
        notifications: [
            {
                title: "Order Sent!",
                body: "Track your order from the tracking page.",
                id: 1,  //must be unique
                schedule: { at: new Date(Date.now() + 1000 * 5) }, //new Date(Date.now() + 1000 * 5)
                repeats: true,
                allowWhileIdle: true
            }
        ]
    })
}

//Schedule notification at specific day of the week,values #1, 2 , 3, 4, 5, 6,7

async function localNotifications_onIntervals(title, body, id, weekdayValue) {

    //request permission
    requestUserPermission();

    await LocalNotifications.schedule({
        notifications: [
            {
                title: title,
                body: body,
                id: id,  //must be unique
                schedule: { on: { weekday: weekdayValue } },
                allowWhileIdle: true
            }
        ]
    })
}

//Schedule notification on intervals, options - 'year' | 'month' | 'two-weeks' | 'week' | 'day' | 'hour' | 'minute' | 'second'

async function localNotifications_onIntervals(title, body, id, interval) {
    //request permission
    requestUserPermission();

    await LocalNotifications.schedule({
        notifications: [
            {
                title: title,
                body: body,
                id: id,  //must be unique
                schedule: { every: interval },
                allowWhileIdle: true
            }
        ]
    })
}

//cancel notifications

async function cancelNotification(id) {
    //request permission
    requestUserPermission();

    await LocalNotifications.cancel({
        notifications: [
            {
                id: id,  //must be unique  
            }
        ]
    })
}


//CALL NUMBER PLUGIN >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
async function callnumber(number) {
    if (Capacitor.platform != "ios") {
        await CallNumber.call({ number: number, bypassAppChooser: false });
    }

}

//OPEN EMAIL/ SEND MAIL PLUGIN  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function sendMail(email) {
    if (Capacitor.platform != "ios") {
        if (EmailComposer.hasAccount()) {
            EmailComposer.open({
                to: email
            })
        }
    }

}

//APP - BACK BUTTON >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//BACK BUTTON
App.addListener('backButton', () => {
    Framework7.instance.views.main.router.back()
})

App.addListener('appUrlOpen', (event) => {

    let length = dmx.app.children.length
    let lastItem = length - 1

    const domain = 'maidz.ae';
    const pathArray = event.url.split(domain);
    const appPath = pathArray.pop();


    if (appPath) {
        Framework7.instance.views.main.router.navigate(appPath)
    }

})


//SplashScreen >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

async function hideSplashScreen() {
    await SplashScreen.hide();
}


//Otp auto fill - Android >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var options = {
//     otpLength: 6,
//     delimiter: 'is',
//     senderID: 'JustPro',
//     timeout: 1200
// }

function successCallback(result) {
    if (result === 'Resend OTP') {
        smsOtpAutofill.startOTPListener(successCallback, errorCallback, {
            otpLength: 6,
            delimiter: 'is',
            senderID: 'JustPro',
            timeout: 120
        });
    } else {
        //Set the result (OTP value) to the field
        $$("#otp_code").val(result)
    }
}
function errorCallback(message) {
    Framework7.instance.dialog.alert(message, "Err")
}
function startOtpWatch() {
    if (Capacitor.platform != "ios") {
        smsOtpAutofill.startOTPListener(successCallback, errorCallback, {
            otpLength: 6,
            delimiter: 'is',
            senderID: 'JustPro',
            timeout: 120
        });

    }
}


