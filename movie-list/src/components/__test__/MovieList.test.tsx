import { mount } from "enzyme";

import { MovieList } from "..";
import { MovieData } from "../../types/api";

const MOCK_MOVIE_DATA: MovieData = {
  Title: "",
  Year: "",
  imdbID: "",
  Type: "movie",
  Poster: "",
};

it("should accept Movie Data", () => {
  const wrapper = mount(<MovieList data={MOCK_MOVIE_DATA} />);
  expect(wrapper.props().data).toEqual(MOCK_MOVIE_DATA);
});
