// This code compiles, but throws error during runtime. Is there a bad types at use here?

type APIResponse<T> = {
    status: number,
    data: T
};

function getDataFromResponse<T>(response: APIResponse<T>): any {
    return response.data;
}

const response = {
    status: 200,
    data: {message: 'ok'}
}

const data = getDataFromResponse(response);

data.user.name = 'new user name';