import React, { forwardRef, TextareaHTMLAttributes, useState } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './TextArea.module.scss'
import { HStack } from '../Stack'
import { Text } from '../Text/Text'

type HTMLTextarea = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange'
>

interface TextareaProps extends HTMLTextarea {
    className?: string
    isInvalid?: boolean
    isValid?: boolean
    rows?: number
    label?: string
    value?: string | number
    onChange?: (value: string) => void
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            className,
            label,
            onChange,
            value,
            isInvalid,
            isValid,
            rows = 3,
            ...props
        },
        ref,
    ) => {
        const [isFocused, setIsFocused] = useState(false)

        const onBlur = () => {
            setIsFocused(false)
        }

        const onFocus = () => {
            setIsFocused(true)
        }

        const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange?.(e.target.value)
        }

        const textArea = (
            <textarea
                ref={ref}
                onChange={onChangeHandler}
                value={value}
                rows={rows}
                onBlur={onBlur}
                onFocus={onFocus}
                className={classNames(
                    cls.textArea,
                    { [cls.focused]: isFocused },
                    [className],
                )}
                {...props}
            />
        )
        if (label) {
            return (
                <HStack max gap="8">
                    <Text text={label} />
                    {textArea}
                </HStack>
            )
        }

        return textArea
    },
)

Textarea.displayName = 'Textarea'

export default Textarea
