import { memo, useCallback } from 'react'

import { useSelector } from 'react-redux'

import { Notice } from '@/entities/Notice'
import { getPostBody, getPostTitle, postActions } from '@/entities/Post'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import Textarea from '@/shared/ui/TextArea/TextArea'

import cls from './AddNewForm.module.scss'
import { useAddNewPost } from '../../model/api/addNewPostApi'

export interface AddNewFormProps {
    className?: string
    onClose: () => void
}

const AddNewForm = (props: AddNewFormProps) => {
    const { className, onClose } = props
    const dispatch = useAppDispatch()

    const title = useSelector(getPostTitle)
    const body = useSelector(getPostBody)

    const onChangeTitle = useCallback(
        (value: string) => {
            dispatch(postActions.setTitle(value))
        },
        [dispatch],
    )

    const onChangeBody = useCallback(
        (value: string) => {
            dispatch(postActions.setBody(value))
        },
        [dispatch],
    )

    const [addNewPost, { error, isError }] = useAddNewPost()

    function getError() {
        if (error) {
            if ('data' in error) {
                return (error.data as { message?: string }).message || ''
            }
        }
    }

    const onClickNewPost = useCallback(() => {
        addNewPost({ body, title })
            .unwrap()
            .then(() => {
                onClose()
                dispatch(postActions.setTitle(''))
                dispatch(postActions.setBody(''))
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            })
    }, [addNewPost, body, dispatch, onClose, title])

    return (
        <VStack
            gap="16"
            className={classNames(cls.addNewForm, {}, [className])}
        >
            <Text title="Добавьте новый пост" />
            <Notice message={getError()} />
            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder="Заголовок"
                onChange={onChangeTitle}
                value={title}
            />

            <Textarea
                id="exampleTextarea"
                value={body}
                onChange={onChangeBody}
                placeholder="Введите ваш текст..."
                rows={5}
            />
            <Button onClick={onClickNewPost}>Добавить</Button>
        </VStack>
    )
}

export default memo(AddNewForm)
