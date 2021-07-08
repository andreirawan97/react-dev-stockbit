import { shallow } from "enzyme";
import { Button } from "..";

it("should run onPress", () => {
  const mockFn = jest.fn();

  const wrapper = shallow(<Button title="Test" onPress={mockFn} />);
  wrapper.find("div").simulate("click");
  expect(mockFn.mock.calls.length).toEqual(1);
});
