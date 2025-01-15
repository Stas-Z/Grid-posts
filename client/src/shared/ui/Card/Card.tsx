import { HTMLAttributes, ReactNode, useCallback, useState } from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    max?: boolean
    onClick: () => void
}

export const Card = (props: CardProps) => {
    const { className, onClick, children, max, ...otherProps } = props
    const [isSelected, setIsSelected] = useState(false)

    const onClickHandler = useCallback(() => {
        onClick()
        setIsSelected((prev) => !prev)
    }, [onClick])

    const mods: Mods = {
        [cls.selected]: isSelected,
        [cls.max]: max,
    }

    return (
        <div
            onClick={onClickHandler}
            className={classNames(cls.card, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    )
}
