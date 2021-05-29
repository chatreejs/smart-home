export interface GeneralEnvironmentConfig {
    production?: boolean
    appName: string

    /**
     * จำนวนวันหมดอายุของ Cookies หลังจากกดปุ่มยอมรับ (หน่วยวัน)
     *
     * ค่าเริ่มต้นคือ 7
     */
    cookieAcceptExpireDateNumber?: number

    /**
     * กำหนดรูปแบบการ Authentication
     *
     * `true` : แอพจะ redirect ไป Web Service หน้าล็อกอินของ OAuth (แนะนำ)
     *
     * `false` : แอพจะแสดงหน้าล็อกอินของ Angular
     *
     * ค่าเริ่มต้นคือ true
     */
    fullSecureAuthentication?: boolean
}