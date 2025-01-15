import { Module } from '@nestjs/common'
import { MyConfigModule } from './Config/config.module'
import { DatabaseModule } from './Database/database.module'
import { PostModule } from './Post/post.module'

@Module({
    imports: [MyConfigModule, DatabaseModule, PostModule],
})
export class AppModule {}
