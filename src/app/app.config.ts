import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider} from '@abacritt/angularx-social-login';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    importProvidersFrom(SocialLoginModule),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('1013082230204-oa1eanbanjlhs5nopeq21fsjao48km9f.apps.googleusercontent.com',
              {
              scopes: ['profile', 'email']})
          }
        ],
        onError: (err) => console.error(err)
      } as SocialAuthServiceConfig,
    },
  ]
};
