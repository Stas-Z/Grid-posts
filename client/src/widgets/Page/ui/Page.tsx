import { ReactNode, useRef } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

import cls from './Page.module.scss'

interface PageProps {
    className?: string
    hasMore?: boolean
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd, hasMore } = props

    const triggerRef = useRef<HTMLDivElement | null>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    })

    return (
        <main className={classNames(cls.page, {}, [className])}>
            {children}
            {onScrollEnd && hasMore ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    )
}
