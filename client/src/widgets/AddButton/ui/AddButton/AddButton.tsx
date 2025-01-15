import { memo } from 'react'

import Plus from '@/shared/assets/icons/plus.svg?react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/Icon'

import cls from './AddButton.module.scss'

interface AddButtonProps {
    className?: string
    isDelete?: boolean
    onClick: () => void
}

export const AddButton = memo((props: AddButtonProps) => {
    const { className, isDelete, onClick } = props
    return (
        <div className={classNames(cls.addButton, {}, [className])}>
            <Icon
                widths={80}
                className={classNames('', { [cls.delete]: isDelete }, [
                    className,
                ])}
                clickable
                onClick={onClick}
                Svg={Plus}
                width={80}
                height={80}
            />
        </div>
    )
})
