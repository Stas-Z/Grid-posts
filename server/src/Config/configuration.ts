export interface IConfig {
    port: number
    dbUlr: string
    clientUrl: string
    NODE_ENV: string
}

export default () => ({
    port: parseInt(process.env.PORT || '5000', 10),
    dbUlr: process.env.DB_URL,
    clientUrl: process.env.CLIENT_URL,
    NODE_ENV: process.env.NODE_ENV,
})
