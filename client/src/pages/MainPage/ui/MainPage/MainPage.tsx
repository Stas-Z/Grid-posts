import { memo, useCallback, useState } from 'react'

import { IPost, PostList } from '@/entities/Post'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './MainPage.module.scss'
import { post } from './postMock'

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const { className } = props
    const posts: IPost[] = Array.from({ length: 12 }, (_, index) => ({
        ...post,
        id: index + 1,
    }))
    const [postState, setPostState] = useState(posts)

    const addHandle = useCallback(() => {
        const newPost: IPost = {
            title: '',
            text: '',
            id: postState.length + 1,
        }
        setPostState((prevPosts) => [...prevPosts, newPost])
    }, [postState.length])

    return (
        <div className={classNames(cls.mainPage, {}, [className])}>
            <PostList posts={postState} onClick={addHandle} />
        </div>
    )
}

export default memo(MainPage)
