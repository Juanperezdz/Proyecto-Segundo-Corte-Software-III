import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withNavigationErrorHandler, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),

      // 👇 Se agrega la función obligatoria
      withNavigationErrorHandler((error) => {
        console.error("Navigation error:", error);
      }),

      // 👇 Scroll automático a anchors (#)
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
  ],
};
