import { Injectable, NotFoundException } from '@nestjs/common'
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

        if (!title || !body) {
            throw new NotFoundException(
                'Не удалось создать пост: Заголовок и текст не должны быть пустыми!',
            )
        }

        const newPost = this.postsRepository.create({
            title,
            body,
        })
        const savedPost = await this.postsRepository.save(newPost)

        return savedPost
    }

    async findAll(page: number, limit: number): Promise<MyPost[]> {
        return await this.postsRepository.find({
            take: limit,
            skip: (page - 1) * 12,
            order: {
                id: 'DESC',
            },
        })
    }

    async findById(id: number): Promise<MyPost | null> {
        return this.postsRepository.findOneBy({ id })
    }

    async remove(id: number | number[]): Promise<void> {
        if (id) {
            await this.postsRepository.delete(id)
        }
    }
}
