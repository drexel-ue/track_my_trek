export const signup = userData => {
    const user = {
        first_name: userData.first_name,
        last_name: userData.last_name,
        username: userData.username,
        password: userData.password,
        gender: userData.gender,
        subscribed: userData.subscribed,
        country: userData.country,
        birth_day: new Date(userData.birth_year, userData.birth_month, userData.birth_day).toDateString()
    }

    return $.ajax({
        url: 'api/users',
        method: 'post',
        data: { user }
    })
};

export const login = user => $.ajax({
    url: 'api/session',
    method: 'post',
    data: { user }
});

export const logout = () => $.ajax({
    url: 'api/session',
    method: 'delete'
});

