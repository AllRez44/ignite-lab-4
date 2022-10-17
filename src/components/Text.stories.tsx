import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Component/Text',
    component: Text, 
    args: {
        children: 'Lorem Ipsum '
    }, 
} as Meta<TextProps>

// Variant  
export const Default: StoryObj<TextProps> = {}