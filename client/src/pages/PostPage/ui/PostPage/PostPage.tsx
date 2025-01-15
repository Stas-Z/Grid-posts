import { memo, useCallback, useState } from 'react'

import { useSelector } from 'react-redux'

import { AddPostModal } from '@/features/AddNewPost'
import { PostList, getPostListHasMore } from '@/features/PostList'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AddButton } from '@/widgets/AddButton'
import { Page } from '@/widgets/Page'

import { getPostPagePage } from '../../model/selectors/getPostPageSelector'
import { postPageActions } from '../../model/slice/postPageSlice'

interface MainPageProps {
    className?: string
}

const PostPage = (props: MainPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()

    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])
    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const pageNumber = useSelector(getPostPagePage)
    const hasMore = useSelector(getPostListHasMore)

    const pageHandler = useCallback(() => {
        if (hasMore) {
            dispatch(postPageActions.setPage(pageNumber + 1))
        }
    }, [dispatch, hasMore, pageNumber])

    return (
        <Page
            hasMore={hasMore}
            onScrollEnd={pageHandler}
            className={classNames('', {}, [className])}
        >
            <PostList page={pageNumber} />
            <AddButton onClick={onShowModal} />
            <AddPostModal isOpen={isAuthModal} onClose={onCloseModal} />
        </Page>
    )
}

export default memo(PostPage)
