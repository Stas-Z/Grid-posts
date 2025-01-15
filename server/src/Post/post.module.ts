import { TypeOrmModule } from '@nestjs/typeorm'
import { MyPost } from './schema/post.entity'
import { PostService } from './post.service'
import { Module } from '@nestjs/common'
import { PostController } from './post.controller'

@Module({
    imports: [TypeOrmModule.forFeature([MyPost])],
    providers: [PostService],
    controllers: [PostController],
    exports: [PostService],
})
export class PostModule {}
