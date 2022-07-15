import {Route, Switch} from "react-router-dom";
import React from "react";
import PageNotFound from "../page/notfound/PageNotFound";
import Search from "../page/predict/Predict";

export default function Navigation() {
    return (
        <Switch>
            <Route exact path="/">
                <Search/>
            </Route>
            <Route exact path="/search">
                <Search/>
            </Route>

            <Route>
                <PageNotFound/>
            </Route>
        </Switch>
    );
}
