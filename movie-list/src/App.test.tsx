import { shallow } from "enzyme";

import App from "./App";

it("should render App without crashing", () => {
  shallow(<App />);
});
