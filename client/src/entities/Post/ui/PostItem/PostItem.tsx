import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'

import cls from './PostItem.module.scss'
import { IPost } from '../../model/types/post'

interface PostItemProps {
    className?: string
    post: IPost
    postNumber: number
}

export const PostItem = memo((props: PostItemProps) => {
    const { className, post, postNumber } = props

    return (
        <Card className={classNames(cls.postItem, {}, [className])}>
            <Text
                title={`${postNumber} ${post.title}`}
                className={cls.titleBlock}
            />
            <Text text={post.body} className={cls.textBlock} />
        </Card>
    )
})
