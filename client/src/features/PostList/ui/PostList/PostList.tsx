import { memo } from 'react'

import { useSelector } from 'react-redux'

import { PostItem } from '@/entities/Post'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/Stack'

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
            className={classNames('', {}, [className])}
        >
            {posts &&
                posts.map((post, index) => (
                    <PostItem
                        key={post.id}
                        postNumber={index + 1}
                        post={post}
                    />
                ))}
            {isFetching && getPostSkeletons}
        </HStack>
    )
})
