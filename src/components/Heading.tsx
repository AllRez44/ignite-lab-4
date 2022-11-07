import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx' 
import { ReactNode } from 'react';



export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode; //ReactNode é qualquer elemento válido como children (nó filho)
    asChild?: boolean;
}
                     // Props: Default size value assigned as 'md'; Call props children and asChild
export function Heading({ size = 'md', children, asChild}: HeadingProps){
    const Comp = asChild ? Slot : 'h2' // Caso o componente Slot não tenha elemento filho definidos (p, h1, div, etc.), serão spans. 
    return (
        <Comp className={clsx( // Componente Slot serve para repassar todas as propriedades para o elemento filho.
            'text-gray-100 font-bold', // Objetivo do Componente: Poder usar qualquer Tag em children 
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
            }
        )}>{children}</Comp>
    )
}