cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/com-darryncampbell-cordova-plugin-intent/www/IntentShim.js",
        "id": "com-darryncampbell-cordova-plugin-intent.IntentShim",
        "pluginId": "com-darryncampbell-cordova-plugin-intent",
        "clobbers": [
            "intentShim"
        ]
    },
    {
        "file": "plugins/com.razorpay.cordova/www/RazorpayCheckout.js",
        "id": "com.razorpay.cordova.RazorpayCheckout",
        "pluginId": "com.razorpay.cordova",
        "clobbers": [
            "RazorpayCheckout"
        ]
    },
    {
        "file": "plugins/com.razorpay.cordova/src/browser/CheckoutProxy.js",
        "id": "com.razorpay.cordova.CheckoutProxy",
        "pluginId": "com.razorpay.cordova",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-sqlite-storage": "4.0.0",
    "cordova-plugin-androidx-adapter": "1.1.0",
    "com-darryncampbell-cordova-plugin-intent": "2.0.0",
    "com.razorpay.cordova": "0.16.1"
}
// BOTTOM OF METADATA
});