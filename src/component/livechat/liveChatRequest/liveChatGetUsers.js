import axios_instance from './liveChatAxiosInst.js';

async function getUsers(dispatch) {
    await axios_instance.post('',
        {
            action: 'getUsers'
        },
    )
    .then((resp) => {
        if (resp.status === 200) {
            dispatch({
                type: 'change_user_list',
                payload: {user_list: resp.data.userList},
            });
        } else {
            dispatch({
                type: 'change_user_list',
                payload: {user_list: []},
            });
        }
    })
    .catch(() => dispatch({
        type: 'change_user_list',
        payload: {user_list: []},
    }))
}

export default getUsers;