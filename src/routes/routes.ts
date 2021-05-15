export interface Route {
    method: HttpMethod
    route: string
    controller: any
    action: string
    authentication: HttpAuthentication
}

type HttpMethod = "get" | "post" | "put" | "delete" | "patch"
type HttpAuthentication = "noAuth" | "userAuth" | "adminAuth";

export const Routes: Route[] = [
    // ...(require("./routes/my-feature.route"))
]