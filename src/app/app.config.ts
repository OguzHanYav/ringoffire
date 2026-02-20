import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({
    apiKey: "AIzaSyAsDSBJsNtavImTphKnDAktdrSWt8Qli8k",
    authDomain: "ring-of-fire-64388.firebaseapp.com",
    projectId: "ring-of-fire-64388",
     appId: "1:201365101992:web:2adc34c2c51685f4d5919d",
    storageBucket: "ring-of-fire-64388.firebasestorage.app",
    messagingSenderId: "201365101992"
  })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage())]
};
