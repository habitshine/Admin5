export default {
    login(context, { username, password }) {
        return new Promise((resolve, reject) => {
            axios.post(LOGIN_URL, qs.stringify({ username, password }))
                .then((response) => {
                    // 登陆成功
                    if (1 == response.data.status) {
                        context.commit('saveUserName', username);
                        context.commit('saveAccessToken', response.data.data.token);
                    }
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
