import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'

import cls from './Notice.module.scss'

interface NoticeProps {
    className?: string
    message?: string
}

export const Notice = memo((props: NoticeProps) => {
    const { className, message } = props
    if (!message) return

    return (
        <div className={classNames(cls.notice, {}, [className])}>
            <Text variant="error" text={message} />
        </div>
    )
})
