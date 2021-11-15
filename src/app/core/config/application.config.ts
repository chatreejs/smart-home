export interface ApplicationConfig {
  /**
   * Build option environment. In `environment.prod.ts` file should be set `true` only.
   */
  production?: boolean

  /**
   * The url address of web service.
   *
   * Example on `development` use https://localhost:3000
   */
  webServiceUrl?: string
}
