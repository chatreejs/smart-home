// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthenticationConfig } from 'src/app/core/config/authentication-config'
import { ApplicationConfig } from 'src/app/core/config/application.config'

export const environment: ApplicationConfig & AuthenticationConfig = {
  production: false,
  webServiceUrl: 'http://localhost:3000',

  // OAuth client information.
  clientId: 'smart-home-application',
  clientSecret: '02FZf68/Xff0hrSQgc7Je5CNgdjaSgltNU4gb3AbJ9A=',

  // When use full secure authentication, application are required
  // the callbackUri property.
  fullSecureAuthentication: true,
  callbackUri: 'http://localhost:4200/callback',

  // If not use full secure authentication, application are required
  // the loginUri property.
  // fullSecureAuthentication: false,
  // loginUri: 'http://localhost:4200/login'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error'  // Included with Angular CLI.
