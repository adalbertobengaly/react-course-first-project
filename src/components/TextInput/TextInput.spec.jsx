import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TextInput } from '.'

describe('<TextInput />', () => {
    it('should have a value of searchValue', () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} searchValue={'testando'} />)

        const input = screen.getByPlaceholderText(/type your search/i)
        expect(input).toBeInTheDocument()

        expect(input.value).toBe('testando')
    })

    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} searchValue="The Value is Here!" />)

        const input = screen.getByPlaceholderText(/type your search/i)

        const value = 'The Value is Here!'

        userEvent.type(input, value)

        expect(input.value).toBe(value)
        expect(fn).toBeCalledTimes(value.length)
    })

    it('would match snapshot', () => {
        const fn = jest.fn()
        const { container } = render(<TextInput handleChange={fn} searchValue="" />)

        expect(container).toMatchSnapshot()
    })
})
