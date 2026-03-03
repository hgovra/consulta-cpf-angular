import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { rotasAplicacao } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(rotasAplicacao)
  ]
}).catch((err) => console.error(err));
