import { StringInput as StringModelInput } from 'mobx-orm'

export interface StringInputProps {
    input: StringModelInput
}

export const StringInput = (props: StringInputProps) => {
    const { input } = props
    return (
        <input type='text' value={input.value} onChange={(e) => { input.set(e.target.value) }} />
    )
}
