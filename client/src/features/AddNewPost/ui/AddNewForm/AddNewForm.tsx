import { memo, useCallback } from 'react'

import { useSelector } from 'react-redux'

import { getPostBody, getPostTitle, postActions } from '@/entities/Post'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import Textarea from '@/shared/ui/TextArea/TextArea'

import cls from './AddNewForm.module.scss'

export interface AddNewFormProps {
    className?: string
}

const AddNewForm = (props: AddNewFormProps) => {
    const { className } = props
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

    return (
        <VStack
            gap="16"
            className={classNames(cls.addNewForm, {}, [className])}
        >
            <Text title="Добавьте новый пост" />
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
            <Button>Добавить</Button>
        </VStack>
    )
}

export default memo(AddNewForm)
