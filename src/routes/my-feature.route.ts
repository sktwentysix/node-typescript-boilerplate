import { Route } from "./routes";
import { MyFeatureController } from "../my-feature/my-feature.controller";

const MyFeatureRoute: Route[] = [{
    method: "get",
    route: "/my-feature",
    controller: MyFeatureController,
    action: "request",
    authentication: "noAuth"
}]

module.exports = MyFeatureRoute