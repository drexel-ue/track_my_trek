import { Route, withRouter } from 'react-router-dom'

export default withRouter(({ path = '/' }) => {
    debugger
    return (
        <Route
            path={path}
            component={({ history, location, match }) => {
                history.replace({
                    ...location,
                    pathname: location.pathname.substring(match.path.length)
                });
                return null;
            }}
        />
    )
})

