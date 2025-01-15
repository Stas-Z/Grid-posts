import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { IConfig } from 'src/Config/configuration'
import { MyPost } from 'src/Post/schema/post.entity'

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService<IConfig>) => {
                const isDev = configService.get('NODE_ENV') === 'development'
                const isProd = configService.get('NODE_ENV') === 'production'

                return {
                    type: 'postgres',
                    url: configService.get('dbUlr'),
                    entities: [MyPost],
                    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
                    // logging: true,
                    ...(isDev && {
                        synchronize: true,
                        ssl: { rejectUnauthorized: false },
                    }),
                    ...(isProd && {
                        synchronize: false,
                        migrationsRun: true,
                        ssl: { rejectUnauthorized: true },
                    }),
                }
            },
        }),
    ],
})
export class DatabaseModule {}
