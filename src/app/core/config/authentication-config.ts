export interface AuthenticationConfig {
  /**
   * The `clientId` is a public identifier for apps. Even though it’s public,
   * it’s best that it isn’t guessable by third parties, so many implementations
   * use something like a 32-character hex string. It must also be unique across
   * all clients that the authorization server handles. If the client ID is guessable,
   * it makes it slightly easier to craft phishing attacks against arbitrary applications.
   *
   * `Web`, `iOS` and `Android` should be use difference `clientId` values.
   */
  clientId: string

  /**
   * The client_secret is a secret known only to the application and the authorization server.
   * It must be sufficiently random to not be guessable, which means you should avoid
   * using common UUID libraries which often take into account the timestamp or MAC address
   * of the server generating it. A great way to generate a secure secret is to use
   * a cryptographically-secure library to generate a 256-bit value and converting it
   * to a hexadecimal representation.
   */
  clientSecret: string

  /**
   * Behavior for application authentication.
   *
   * `true` - Application redirect to OAuth login form (Recommended).
   *
   * `false` - Application redirect to the url from `loginUri` configure.
   */
  fullSecureAuthentication: boolean

  /**
   * Url for go back to application when OAuth server has authenticate completed.
   * It only required when `fullSecureAuthentication` is `true`.
   */
  callbackUri?: string

  /**
   * If the `fullSecureAuthentication` is `false`, Angular login form url are required.
   * When application use full secure authentication and specific the `loginUri` in configure then
   * its will combine the `loginUri` to base URI and `authorizationEndpoint` to search params (query string),
   * after that its making perform authorization request to OAuth login form.
   */
  loginUri?: string

  /**
   * Not implemented yet.
   */
  scope?: string

  /**
   * Not implemented yet.
   */
  extras?: any

  /**
   * Force redirect after authentication completed.
   * If not specific, application redirect to referer url
   * before login page.
   */
  redirectUrlAfterLogedIn?: string

  /**
   * Force redirect after application signed out completed.
   * If not specific, application will redirect to home.
   */
  redirectUrlAfterSignedOut?: string

  /**
   * Sign out uri. When application use full secure authentication and specific the `signOutUri` value in configure
   * then application will combine the `signOutUri` to base URI and `endSessionEndpoint` to search params (query string),
   * after that its making redirect to end session page then redirect back to the `redirectUrlAfterSignedOut`.
   */
  signOutUri?: string
}
