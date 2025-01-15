import { memo, useCallback, useState } from 'react'

import { useSelector } from 'react-redux'

import { AddPostModal } from '@/features/AddNewPost'
import { PostList } from '@/features/PostList'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AddButton } from '@/widgets/AddButton'
import { Page } from '@/widgets/Page'

import cls from './PostPage.module.scss'
import { getPostPagePage } from '../../model/selectors/getPostPageSelector'
import { postPageActions } from '../../model/slice/postPageSlice'

interface MainPageProps {
    className?: string
}

const PostPage = (props: MainPageProps) => {
    const { className } = props

    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])
    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const dispatch = useAppDispatch()

    const pageNumber = useSelector(getPostPagePage)

    const pageHandler = useCallback(
        () => dispatch(postPageActions.setPage(pageNumber + 1)),
        [dispatch, pageNumber],
    )

    return (
        <Page
            onScrollEnd={pageHandler}
            className={classNames(cls.postPage, {}, [className])}
        >
            <PostList page={pageNumber} />
            <AddButton onClick={onShowModal} />
            <AddPostModal isOpen={isAuthModal} onClose={onCloseModal} />
        </Page>
    )
}

export default memo(PostPage)
