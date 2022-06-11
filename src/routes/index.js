import userRouters from './users.routes'

const generateRouters = (app) => {
    app.use(userRouters);

    //Browsers will by default try to request /favicon.ico from the root of a hostname,
    // in order to show an icon in the browser tab. so that we have to return 204 if this request invokes
    app.get('/favicon.ico', (req, res) => res.status(204));
}

export {
    generateRouters
}