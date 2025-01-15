import { memo, useCallback } from 'react'

import { useSelector } from 'react-redux'

import {
    getSelectedPosts,
    postListActions,
    useDeletePosts,
} from '@/features/PostList'
import Plus from '@/shared/assets/icons/plus.svg?react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Icon } from '@/shared/ui/Icon'

import cls from './AddButton.module.scss'

interface AddButtonProps {
    className?: string

    onClick: () => void
}

export const AddButton = memo((props: AddButtonProps) => {
    const { className, onClick } = props
    const dispatch = useAppDispatch()

    const selectedPosts = useSelector(getSelectedPosts)
    const isDelete = Boolean(selectedPosts.length)

    const [deletePosts] = useDeletePosts()

    const deletePostHandler = useCallback(async () => {
        deletePosts({ ids: selectedPosts })

        dispatch(postListActions.setClearSeletedPostsId())
    }, [deletePosts, dispatch, selectedPosts])

    return (
        <div className={classNames(cls.addButton, {}, [className])}>
            <Icon
                widths={80}
                className={classNames('', { [cls.delete]: isDelete }, [
                    className,
                ])}
                clickable
                onClick={isDelete ? deletePostHandler : onClick}
                Svg={Plus}
                width={80}
                height={80}
            />
        </div>
    )
})
