import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx' 
import { ReactNode } from 'react';


export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode; //ReactNode é qualquer elemento válido como children (nó filho)
    asChild?: boolean;
}
                     // Props: Default size value assigned as 'md'; Call props children and asChild
export function Text({ size = 'md', children, asChild}: TextProps){
    const Comp = asChild ? Slot : 'span' // Caso o componente Slot não tenha elemento filho definidos (p, h1, div, etc.), serão spans. 
    return (
        <Comp className={clsx( // Componente Slot serve para repassar todas as propriedades para o elemento filho.
            'text-gray-100', // Objetivo do Componente: Poder usar qualquer Tag em children 
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
            }
        )}>{children}</Comp>
    )
}