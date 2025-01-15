import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Text.module.scss'

type TextVariant = 'primary' | 'error'

interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
}

export const Text = memo((props: TextProps) => {
    const { className, text, title, variant = 'primary' } = props

    return (
        <div className={classNames(cls.text, {}, [cls[variant]])}>
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
