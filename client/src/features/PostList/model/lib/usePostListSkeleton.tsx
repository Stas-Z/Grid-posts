import { useMemo } from 'react'

import { Skeleton } from '@/shared/ui/Skeleton'

interface UsePostListSkeletonProps {
    classname?: string
}

export const usePostListSkeletons = (props: UsePostListSkeletonProps) => {
    const { classname } = props

    const postSkeletons = useMemo(() => new Array(16).fill(null), [])

    return useMemo(
        () =>
            postSkeletons.map((item, index) => (
                <Skeleton
                    className={classname}
                    height={234}
                    width={339}
                    border="25px"
                    // eslint-disable-next-line
                    key={index}
                />
            )),
        [postSkeletons, classname],
    )
}
