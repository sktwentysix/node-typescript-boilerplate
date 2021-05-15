import express from "express";
import { Route } from "./routes/routes";

export const initialiseExpressApiRoutes = (app: express.Application, routes: Route[]): void => {
    routes.forEach(route => {
        app[route.method](route.route, (req, res, next) => {
            let controller = new route.controller;
            controller[route.action](req, res, next)
                .then((value: any) => res.json({ data: value }))
                .catch(next)
        })
    });
}

export const startServer = (app: express.Application, port: number): void => {
    app.listen(port, function() {
        console.log(logStyles.greenText + logStyles.boldText, "Server started Successfully! ✓", logStyles.reset);
        console.log(logStyles.boldText, `Port: ${port}`, logStyles.reset);
    });
}

enum logStyles {
    reset = "\u001b[0m",
    greenBg = "\u001b[42m",
    greenText = "\u001b[32m",
    blackText = "\u001B[30m",
    boldText = "\u001b[1m"
}