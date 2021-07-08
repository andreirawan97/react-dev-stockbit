import { Route, Switch, useLocation } from "react-router-dom";

import { SCENE_NAME } from "../constants/navigation";
import { DetailScene, HomeScene, NotFoundScene } from "../scenes";

export default function MainNavigator() {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route exact path={SCENE_NAME.home} component={HomeScene} />
      <Route
        exact
        path={`${SCENE_NAME.detail}:searchQuery`}
        component={DetailScene}
      />

      <Route path="*" component={NotFoundScene} />
    </Switch>
  );
}
