import { AuthenticationConfig } from "src/app/core/authentication-config"
import { GeneralEnvironmentConfig } from "src/app/core/environment-config"
import { WebServiceConfig } from "src/app/core/web-service-config"

export const environment:
  GeneralEnvironmentConfig &
  WebServiceConfig &
  AuthenticationConfig = {
  // GeneralEnvironmentConfig
  production: true,
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
