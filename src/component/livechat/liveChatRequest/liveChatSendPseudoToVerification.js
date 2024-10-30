import axios_instance from './liveChatAxiosInst.js';

async function sendPseudoToVerification(dispatch, pseudo) {
    await axios_instance.post('',
        {
            action: "sendPseudoToVerification",
            pseudo: pseudo,
        },
    )
    .then((resp) => {
        if (resp.status === 200) {
            if (['Pseudo inexistant', 'Pseudo trouvé'].includes(resp.data.message)) {
                localStorage.setItem('livechat_user_pseudo', pseudo);
                dispatch({
                    type: 'change_user_pseudo',
                    payload:{
                        pseudo: pseudo,
                        pseudo_isValid: true,
                }})
            }
        } else {
            dispatch({
                type: 'change_user_pseudo',
                payload:{
                    pseudo: '',
                    pseudo_isValid: false,
            }});
        }
    })
    .catch(() => 
        dispatch({
            type: 'change_user_pseudo',
            payload:{
                pseudo: '',
                pseudo_isValid: false,
        }})
    )
}

export default sendPseudoToVerification;