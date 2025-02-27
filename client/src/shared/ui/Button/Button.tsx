import {
    ButtonHTMLAttributes,
    ForwardedRef,
    ReactNode,
    forwardRef,
} from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export type ButtonVariant = 'clear' | 'outline' | 'filled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    square?: boolean
    disabled?: boolean
    children?: ReactNode
    fullWidth?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'outline',
            square,
            disabled,
            fullWidth,
            addonLeft,
            addonRight,

            ...otherProps
        } = props

        const mods: Mods = {
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
            [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
        }
        const addClass = [className, cls[variant], cls.normal]

        return (
            <button
                type="button"
                disabled={disabled}
                className={classNames(cls.button, mods, addClass)}
                {...otherProps}
                ref={ref}
            >
                {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
                {children}
                {addonRight && (
                    <div className={cls.addonRight}>{addonRight}</div>
                )}
            </button>
        )
    },
)
