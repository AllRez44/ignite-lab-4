import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Component/Button',
    component: Button, 
    args: {
        children: 'Lorem Ipsum',
        size: 'md'
    }, 
    argTypes: {
        size: {
            control: {
                disable: true
            }
        }
    }
} as Meta<ButtonProps>

// Variant  
export const Default: StoryObj<ButtonProps> = {
    args: {
    }
}
