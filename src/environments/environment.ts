// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthenticationConfig } from "src/app/core/authentication-config"
import { GeneralEnvironmentConfig } from "src/app/core/environment-config"
import { WebServiceConfig } from "src/app/core/web-service-config"

export const environment:
  GeneralEnvironmentConfig &
  WebServiceConfig &
  AuthenticationConfig = {
  // GeneralEnvironmentConfig
  production: false,
  appName: "Smart Home",
  cookieAcceptExpireDateNumber: 7,
  fullSecureAuthentication: false,

  // WebServiceConfig
  webServiceUrl: 'https://localhost:5001',

  // AuthenticationConfig
  issuerUri: 'https://localhost:5001/api/v1/authen',
  clientId: 'toktak.io',
  clientSecret: "",
  redirectUri: 'http://localhost:4200/callback',
  scope: 'smart-home',
  redirectUrlAfterLogedIn: 'http://localhost:4200',
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error'  // Included with Angular CLI.
