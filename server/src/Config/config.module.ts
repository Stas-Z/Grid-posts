import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './configuration'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.development.env',
            load: [configuration],
            isGlobal: true,
        }),
    ],
})
export class MyConfigModule {}
