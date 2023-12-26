import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render the button with the text "load more" in children', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onclick={fn} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onclick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should be disable when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} onclick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onclick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" disabled={false} onclick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
