import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Gif from "./gif";
import SearchBar from "./searchBar"

const data = [{
    imageUrl: '"https://media0.giphy.com/media/7aSKEnlBpcSEmnk8Wc/200w.gif?cid=c3a3b422k2iqhp1ak7drdrb87rjdyhdkxcwc426riddhbbgz&rid=200w.gif&ct=g"',
    title: '"Jimmy Butler Smile GIF by Miami HEAT"',
    rating: 'g',
}]


test('search bar is rendered', () => {
    render(<SearchBar />)
    const searchPlaceholder = screen.getByPlaceholderText(/Search here/i);
    const searchButtonText = screen.getByText(/Search/i);

    const plusButton = screen.getByText('Search');
    userEvent.click(plusButton);

    expect(searchPlaceholder).toBeInTheDocument();
    expect(searchButtonText).toBeInTheDocument();
})


test('GiF card is rendered', () => {
    render(
        <Gif
            imageUrl={data.imageUrl}
            title={data.title}
            rating={data.rating}
        />
    )

    const gifImage = screen.getByAltText(/gif.*? image/i)
    expect(gifImage).toBeInTheDocument()
})