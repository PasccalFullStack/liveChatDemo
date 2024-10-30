import React, {useEffect} from 'react';
import sendPseudoToVerification
    from './liveChatRequest/liveChatSendPseudoToVerification';

export default function PseudoForm(props) {

    useEffect(() => {
        if (localStorage.getItem('livechat_user_pseudo')) {
            props.dispatch({
                type: 'change_user_pseudo',
                payload:{
                    pseudo: localStorage.getItem('livechat_user_pseudo'),
                    pseudo_isValid: true,
            }})
        }
        
        return;
    }, [])

  return (
        <div className="pseudo_form">
            <label>Votre pseudo svp?</label>
            {!['', 'already_exist'].includes(props.state.pseudo) && (
                <span
                    style={{fontSize: '18px', color: 'red'}}>Ce pseudo existe déjà</span>
            )}
            <span
                id="user_pseudo_notice"
                style={{fontSize: '12px', color: 'red'}}>6 caractères minimum</span>
            <input
                type="text"
                id="user_pseudo"
                placeholder="Pseudo ?"
                onChange={(e) => {
                    if (e.target.value.length < 6) {
                        document.querySelector('#pseudo_validation').disabled = true;
                        document.querySelector('#pseudo_validation').classList = "pseudo_unvalidable";
                        document.querySelector('#user_pseudo_notice').style.color = "red";
                    } else {
                        document.querySelector('#pseudo_validation').disabled = false;
                        document.querySelector('#pseudo_validation').classList = "pseudo_validation_but";
                        document.querySelector('#user_pseudo_notice').style.color = "blue";
                    }
                }} />
            <p className="pseudo_form_info">
                <span style={{marginLeft: '30px'}}></span>
                Ce pseudo est utile pour cette version de démo, vous devrez utiliser le même dans 
                l'interace opérateur. Ce pseudo vous permet de tester ce livechat sans devoir 
                vous identifier.
            </p>
            <button
                type="button"
                id="pseudo_validation"
                className="pseudo_unvalidable"
                onClick={() => {
                    let pseud = document.querySelector('#user_pseudo').value;
                    if (pseud.length >= 6) {
                        sendPseudoToVerification(props.dispatch, pseud);
                    }
                }}>
                Valider
            </button>
        </div>
    )
}
