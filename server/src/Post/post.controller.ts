import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { PostService } from './post.service'
import { CreatePostDto } from './dto/create-post.dto'
import { MyPost } from './schema/post.entity'

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    async create(@Body() createPostDto: CreatePostDto): Promise<MyPost> {
        return this.postService.create(createPostDto)
    }

    @Get()
    async findAll(): Promise<MyPost[]> {
        return this.postService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<MyPost | null> {
        return this.postService.findById(id)
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.postService.remove(id)
    }
}
