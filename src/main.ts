import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//bootstrap (starts) out angular app by passing a 'AppModule' into the method
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
