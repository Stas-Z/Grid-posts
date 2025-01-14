import { memo, useCallback } from 'react'

import { useSelector } from 'react-redux'

import { PostList } from '@/features/PostList'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'

import cls from './PostPage.module.scss'
import { getPostPagePage } from '../../model/selectors/getPostPageSelector'
import { postPageActions } from '../../model/slice/postPageSlice'

interface MainPageProps {
    className?: string
}

const PostPage = (props: MainPageProps) => {
    const { className } = props

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
        </Page>
    )
}

export default memo(PostPage)
