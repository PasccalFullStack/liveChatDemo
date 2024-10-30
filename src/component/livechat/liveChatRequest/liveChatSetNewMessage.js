import axios_instance from './liveChatAxiosInst.js';

async function setNewMessage(
    operatorId,
    state,
    chatId,
    chatIssue,
    continuationNb,
    message,
    dispatch,
) {
    await axios_instance.post('',
        {
            action: "newMessage",
            operator_id: operatorId,
            user_id: state.active_user_id,
            from_operator: 0,
            from_user: 1,
            chat_id: chatId,
            chat_issue: chatIssue,
            continuation_nb: continuationNb,
            message: message,
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

export default setNewMessage;