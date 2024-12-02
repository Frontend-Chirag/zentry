import React, { ReactElement } from 'react'
import { IconType } from 'react-icons';

interface ButtonProps {
    id: string
    title: string
    LeftIcon?: ReactElement<IconType>
    containerClass: string;
}

const Button = ({ id, title, LeftIcon, containerClass }: ButtonProps) => {


    return (
        <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
            {LeftIcon}

            <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
                <div>
                    {title}
                </div>
            </span>
        </button>
    )
}

export default Button