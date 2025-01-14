import { memo } from 'react'

import { useSelector } from 'react-redux'

import { PostItem } from '@/entities/Post'
import Plus from '@/shared/assets/icons/plus.svg?react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon'
import { HStack } from '@/shared/ui/Stack'

import cls from './PostList.module.scss'
import { useGetPostList } from '../../model/api/postListApi'
import { usePostListSkeletons } from '../../model/lib/usePostListSkeleton'
import { getPostListHasMore } from '../../model/selectors/getPostListSelector'

interface PostListProps {
    className?: string
    page: number
}

export const PostList = memo((props: PostListProps) => {
    const { className, page } = props

    const getPostSkeletons = usePostListSkeletons({})
    const hasMore = useSelector(getPostListHasMore)

    const { data: posts, isFetching } = useGetPostList(
        { page },
        { skip: !hasMore },
    )

    return (
        <HStack
            wrap="wrap"
            gap="60"
            className={classNames(cls.postList, {}, [className])}
        >
            {posts &&
                posts.map((post) => <PostItem key={post.id} post={post} />)}
            {isFetching && getPostSkeletons}
            <Icon Svg={Plus} width={80} height={80} className={cls.addButton} />
        </HStack>
    )
})
