import { Slot } from '@radix-ui/react-slot'
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { Lock } from 'phosphor-react'
import { TextInput, TextInputRootProps, TextInputIconProps} from './TextInput'

export default {
    title: 'Component/TextInput',
    component: TextInput.Root, 
    args:{
        children:(
            <>
                <TextInput.Input placeholder='Placeholder'/>            
            </>
        )
    },
    argTypes:{
        children:{
            table: {
                disable: true
            }
        }
    }
} as Meta<TextInputRootProps>

//Variant
export const Email: StoryObj<TextInputRootProps> = {
    args: {
        children:(
            <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder='Type your e-mail address' type='email' />
            </>
        
        )
    }
}

export const Password: StoryObj<TextInputRootProps> = {
    args: {
        children:(
            <>
                <TextInput.Icon>
                    <Lock />
                </TextInput.Icon>
                <TextInput.Input placeholder='********' type='password' />        
            </>
        )
    }
}