import { memo, Suspense } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal } from '@/shared/ui/Modal'
import { Skeleton } from '@/shared/ui/Skeleton'

import { AddNewFormAsync } from '../AddNewForm/AddNewForm.async'

interface AddPostModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const AddPostModal = memo((props: AddPostModalProps) => {
    const { className, isOpen, onClose } = props

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Skeleton />}>
                <AddNewFormAsync onClose={onClose} />
            </Suspense>
        </Modal>
    )
})
