import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { IConfig } from './Config/configuration'
import { ValidationPipe } from '@nestjs/common'

const start = async () => {
    try {
        const app = await NestFactory.create(AppModule)

        const configService = app.get(ConfigService<IConfig>)
        const port = configService.get('port')

        const isDev = configService.get('NODE_ENV') === 'development'

        app.enableCors({
            origin: isDev ? true : configService.get('clientUrl'),
            credentials: true,
        })
        app.useGlobalPipes(
            new ValidationPipe({
                transform: true,
                whitelist: true,
            }),
        )

        app.setGlobalPrefix('api')

        await app.listen(port, () =>
            console.log(`server started on PORT ${port}`),
        )
    } catch (e) {
        console.log(e)
    }
}
start()
