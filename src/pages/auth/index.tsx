import {Route} from "react-router-dom";
import ErrorBoundary from "@components/error-boundary";

export default () => {
    <Route path={""}>
        <ErrorBoundary>
            <Route path={"/login"}></Route>
        </ErrorBoundary>
        <ErrorBoundary>
            <Route path={"/sign-up"}></Route>
        </ErrorBoundary>
        <ErrorBoundary>
            <Route path={"/sign-in"}></Route>
        </ErrorBoundary>
    </Route>
}