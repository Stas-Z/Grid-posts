import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Text.module.scss'

interface TextProps {
    className?: string
    title?: string
    text?: string
}

export const Text = memo((props: TextProps) => {
    const { className, text, title } = props

    return (
        <div>
            {title && (
                <h1 className={classNames(cls.title, {}, [className])}>
                    {title}
                </h1>
            )}
            {text && (
                <p className={classNames(cls.text, {}, [className])}>{text}</p>
            )}
        </div>
    )
})
