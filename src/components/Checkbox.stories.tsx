import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text, TextProps } from './Text'

export default {
    title: 'Component/Checkbox',
    component: Checkbox, 
    args: {}, 
    argTypes: {
        size: {
            control: {
                disable: true
            }
        }
    }
} as Meta<CheckboxProps>

// Variant  
export const Default: StoryObj<CheckboxProps> = {
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2 cursor-default'>
                    {Story()}
                    <Text size="sm">Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        }
    ]
}
