import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';

describe('<PostCard />', () => {
  it('should render PostCard', () => {
    render(<PostCard {...postCardPropsMock} />);

    expect(screen.getByRole('img', { name: postCardPropsMock.title })).toHaveAttribute('src', postCardPropsMock.cover);
    expect(screen.getByRole('heading', { name: postCardPropsMock.title + ' 1' })).toBeInTheDocument();
    expect(screen.getByText(postCardPropsMock.body)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...postCardPropsMock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
