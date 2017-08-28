// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig: {
    apiKey: 'AIzaSyBPBcYZWmnM7J39ks1_dcVHcQX7k760yjI',
    authDomain: 'chat-app-project-8e51b.firebaseapp.com',
    databaseURL: 'https://chat-app-project-8e51b.firebaseio.com',
    projectId: 'chat-app-project-8e51b',
    storageBucket: 'chat-app-project-8e51b.appspot.com',
    messagingSenderId: '790930050073'
  }
};
