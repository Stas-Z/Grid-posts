import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class MyPost {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    body: string
}
