import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test("todo", () => {
    const todo = {
        "text": "test",
        "done": false
    }

    render(<Todo todo={todo.text} />)
    const span = screen.getByText("test")
    expect(span).toBeInTheDocument()
})