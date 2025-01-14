import { ReactNode, RefObject, useRef } from 'react'

import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll/useInfiniteScroll'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Page.module.scss'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
    parentRef?: RefObject<HTMLDivElement>
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd, parentRef } = props

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
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    )
}
