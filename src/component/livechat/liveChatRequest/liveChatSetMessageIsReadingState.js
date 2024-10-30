import axios_instance from './liveChatAxiosInst.js';

async function setMessageIsReadingState(id, userId, state, dispatch) {
    await axios_instance.post('',
        {
            action: "setReadingState",
            message_id: id,
            user_id: userId,
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

export default setMessageIsReadingState;