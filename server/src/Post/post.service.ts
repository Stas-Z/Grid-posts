import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MyPost } from './schema/post.entity'
import { CreatePostDto } from './dto/create-post.dto'

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(MyPost)
        private postsRepository: Repository<MyPost>,
    ) {}

    async create(createPostDto: CreatePostDto): Promise<MyPost> {
        const { title, body } = createPostDto

        const newPost = this.postsRepository.create({
            title,
            body,
        })
        const savedPost = await this.postsRepository.save(newPost)

        return savedPost
    }

    async findAll(): Promise<MyPost[]> {
        return await this.postsRepository.find()
    }

    async findById(id: number): Promise<MyPost | null> {
        return this.postsRepository.findOneBy({ id })
    }

    async remove(id: number): Promise<void> {
        await this.postsRepository.delete(id)
    }
}
