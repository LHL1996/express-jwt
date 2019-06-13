var config = {

    token: {
        version: 1,
        expiresIn: 24 * 60 * 60,
        secret: "sdfsdfsdfdsmm_-Hhdu3d",
        requestProperty: 'authToken',

        getToken: function fromHeaderOrQuerystring(req) {
            if (req.headers && req.headers.token) {
                return req.headers.token;
            }
            if (req.body && req.body.token) {
                return req.body.token;
            }
            if (req.query && req.query.token) {
                return req.query.token;
            }

            return null;
        }
    },

    unless: {
        path: [
            { url: '/login', methods: ['GET', 'PUT', 'POST'] }
        ]
    }

};

module.exports = config;