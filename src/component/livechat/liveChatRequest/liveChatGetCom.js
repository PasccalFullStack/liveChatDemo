import axios_instance from './liveChatAxiosInst.js';

async function getCom(state, dispatch) {
    await axios_instance.post('',
        {
            action: "readCommunication",
            user_id: state.active_user_id,
            pseudo: state.pseudo,
        },
    )
    .then((resp) => {
        if (resp.status === 200) {
            dispatch({type: 'change_com', payload: {com: resp.data}});
        } else {
            dispatch({type: 'change_com', payload: {com: []}});
        }
    })
    .catch(() => dispatch({type: 'change_com', payload: {com: []}}))
}

export default getCom;