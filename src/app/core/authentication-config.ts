export interface AuthenticationConfig {
    issuerUri: string
    clientId: string
    clientSecret?: string
    redirectUri: string
    scope?: string
    extras?: any

    /**
     * บังคับให้แอพ redirect ไปยังหน้าที่กำหนด
     *
     * ถ้าไม่ระบุ แอพจะ redirect ไป referer
     */
    redirectUrlAfterLogedIn?: string
}