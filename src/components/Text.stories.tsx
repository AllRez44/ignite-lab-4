import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Component/Text',
    component: Text, 
    args: {
        children: 'Lorem Ipsum ',
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
} as Meta<TextProps>

// Variant  
export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Medium: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        children: (
            <p> Lorem Ipsum - Paragraph</p>
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