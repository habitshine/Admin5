import axios from 'axios';
import qs from 'qs';

/**
 * 获取菜单数据
 */
var getMenuList = ({ commit, state }, accessToken) => {
    return new Promise((resolve, reject) => {
        axios.get(MENU_URL, {
            params: {
                accessToken
            }
        }).then(response => {
            resolve(response.data);
        }).catch((error) => {
            reject();
        });
    });
}

export default {
    getMenuList
}
