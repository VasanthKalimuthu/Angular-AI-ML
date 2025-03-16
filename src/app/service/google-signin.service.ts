import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class GoogleSigninService {
  private isScriptLoaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if the code is running in the browser
      if (isPlatformBrowser(this.platformId)) {
        if (this.isScriptLoaded) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = 'https://accounts.google.com/gsi/client';
          script.async = true;
          script.defer = true;
          script.onload = () => {
            this.isScriptLoaded = true;
            resolve();
          };
          script.onerror = () => reject('Failed to load Google Sign-In script');
          document.head.appendChild(script);
        }
      } else {
        // If not in the browser, resolve without loading the script
        resolve();
      }
    });
  }
}