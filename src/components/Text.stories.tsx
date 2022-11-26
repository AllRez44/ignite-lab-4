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
                disable: true,
                type: 'inline-radio'
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
            <p> Text - Paragraph</p>
        )
    }, 
    argTypes: {
        size: {
            control: {
                disable: false,
                type: 'inline-radio'
            }
        },
        children:{
            table: {
                disable: true
            }
        }
    }
}