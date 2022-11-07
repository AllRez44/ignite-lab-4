import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Component/Heading',
    component: Heading, 
    args: {
        children: 'Heading - Lorem Ipsum',
        size: 'md'
    }, 
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                disable: true
            }
        }
    }
} as Meta<HeadingProps>

// Variant  
export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Medium: StoryObj<HeadingProps> = {
    args: {
        size: 'md'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        children: (
            <h2> Heading - H2</h2>
        )
    }, 
    argTypes: {
        size: {
            control: {
                disable: false
            }
        },
        children:{
            table: {
                disable: true
            }
        }
    }
}