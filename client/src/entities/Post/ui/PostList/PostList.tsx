import { memo } from 'react'

import Plus from '@/shared/assets/icons/plus.svg?react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon'
import { HStack } from '@/shared/ui/Stack'

import cls from './PostList.module.scss'
import { IPost } from '../../model/types/post'
import { PostItem } from '../PostItem/PostItem'

interface PostListProps {
    className?: string
    posts: IPost[]
    onClick: () => void
}

export const PostList = memo((props: PostListProps) => {
    const { className, posts, onClick } = props

    return (
        <HStack
            wrap="wrap"
            gap="60"
            className={classNames(cls.postList, {}, [className])}
        >
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
            <Icon
                clickable
                onClick={onClick}
                Svg={Plus}
                width={80}
                height={80}
                className={cls.addButton}
            />
        </HStack>
    )
})
