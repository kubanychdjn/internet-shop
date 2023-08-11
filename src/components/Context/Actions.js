export  const LoginStart = () => ({
    type : "LOGIN_START"
});

export  const LoginSuccess = (user) => ({
    type : "LOGIN_SUCCESS",
    payload: user
});

export const LoginFailure = () => ({
    type : "LOGIN_FAILURE"
});
export  const ChangeUser = (user) => ({
    type : "CHANGE_USER",
    payload: user
});

export const LoginEnd = () => ({
    type: "LOGIN_END"
});
