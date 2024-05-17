export const USERS_ENDPOINT = "/c/xampp/htdocs/cajero_ui/src/mocks/users.json";

const API_URL = "http://127.0.0.1:8000";
const ENDPOINT_PREFIX = "/api";

const CONFIGURATION_POST = ({ data, token = "" }) => {
    return {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
};

const CONFIGURATION_GET = ({ token = "" }) => {
    return {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    };
};

export const TURNOS_ENDPOINT = {
    url: API_URL + ENDPOINT_PREFIX + "/turnos",
    GET: {
        config: ({ token }) => CONFIGURATION_GET({ token })
    },
    POST: {
        config: ({ token, data }) => CONFIGURATION_POST({ token, data })
    }
};

export const LOGIN_ENDPOINT = {
    url: API_URL + ENDPOINT_PREFIX + "/login",
    POST: {
        config: ({ data }) => CONFIGURATION_POST({ data })
    }
};

export const REGISTER_ENDPOINT = {
    url: API_URL + ENDPOINT_PREFIX + "/register",
    POST: {
        config: ({ token, data }) => CONFIGURATION_POST({ token, data })
    }
};

export const LOGOUT_ENDPOINT = {
    url: API_URL + ENDPOINT_PREFIX + "/logout",
    POST: {
        config: ({ token }) => CONFIGURATION_POST({ token })
    }
};

export const SECTORES_ENDPOINT = {
    url: API_URL + ENDPOINT_PREFIX + "/sectores",
    GET: {
        config: ({ token }) => CONFIGURATION_GET({ token })
    }
};
