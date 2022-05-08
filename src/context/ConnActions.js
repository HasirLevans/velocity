export const ConnStart = (userCredentials) => ({
    type: "CONN_START",
});

export const ConnSuccess = (user) => ({
    type: "CONN_SUCCESS",
    payload: user,
});
  
export const ConnFailure = () => ({
    type: "CONN_FAILURE",
});

export const Follow = (userId) => ({
    type: "FOLLOW",
    payload: userId,
});
  
export const Unfollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId,
});