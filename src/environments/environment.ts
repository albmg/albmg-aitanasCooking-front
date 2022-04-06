// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:3000/api',
  firebaseConfig : {
    apiKey: "AIzaSyAzxqAtd8HwYA8XvbSbIaw6ybUSjBgJBDg",
    authDomain: "aitanas-cooking.firebaseapp.com",
    projectId: "aitanas-cooking",
    storageBucket: "aitanas-cooking.appspot.com",
    messagingSenderId: "884488944797",
    appId: "1:884488944797:web:e9105e69c3871e44a22874"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
