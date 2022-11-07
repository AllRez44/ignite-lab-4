import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx' 
import { ReactNode } from 'react';



export interface ButtonProps {
    children: ReactNode; //ReactNode é qualquer elemento válido como children (nó filho)
    asChild?: boolean;
}
                     // Props: Default size value assigned as 'md'; Call props children and asChild
export function Button({ children, asChild}: ButtonProps){
    const Comp = asChild ? Slot : 'button' // Caso o componente Slot não tenha elemento filho definidos (p, h1, div, etc.), serão spans. 
    return (
        <Comp className={clsx( // Componente Slot serve para repassar todas as propriedades para o elemento filho.
            'w-full py-3 px-4 rounded text-black text-sm font-semibold bg-cyan-500 hover:bg-cyan-300 transition-colors focus:ring-2 ring-white' // Objetivo do Componente: Poder usar qualquer Tag em children 
        )}>{children}</Comp>
    )
}