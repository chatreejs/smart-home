import { ApplicationConfig } from 'src/app/core/config/application.config'
import { AuthenticationConfig } from 'src/app/core/config/authentication-config'

export const environment: ApplicationConfig & AuthenticationConfig = {
  production: false,
  webServiceUrl: 'http://api.smarthome.ctjs.io',

  // OAuth client information.
  clientId: 'smart-home-application',
  clientSecret: '02FZf68/Xff0hrSQgc7Je5CNgdjaSgltNU4gb3AbJ9A=',

  // When use full secure authentication, application are required
  // the callbackUri property.
  fullSecureAuthentication: true,
  callbackUri: 'http://smarthome.ctjs.io/callback',

  // If not use full secure authentication, application are required
  // the loginUri property.
  // fullSecureAuthentication: false,
  // loginUri: 'http://smarthome-api.ctjs.io/login'
}
