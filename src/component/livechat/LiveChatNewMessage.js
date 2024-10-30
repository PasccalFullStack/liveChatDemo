import React from 'react';
import livechat_icons from './liveChatFunction/livechat_icons';
import setNewMessage from './liveChatRequest/liveChatSetNewMessage';

export default function LiveChaytNewMessage(props) {

    const sendNewMessage = (mess = '') => {
        let message = document.querySelector('#newMessageContent').value;
        if (message !== '' || mess !== '') {
          let operatorId = props.state.com.operator ? props.state.com.operator.id : 0;
          let chatId = props.state.com.communication.length > 0 
            ? props.state.com.communication[0].chat_id 
            : 0;
          let chatIssue = props.state.com.communication.length > 0
            ? props.state.com.communication[0].chat_issue 
            : '';
          let chatContinuation = props.state.com.length > 0
            ? props.state.com.communication[0].chat_continuation_nb
            : '0';
          setNewMessage(
            operatorId,
            props.state,
            chatId,
            chatIssue,
            chatContinuation,
            message !== '' ? message : mess,
            props.dispatch,
          );
          props.dispatch({
            type: 'change_send_new_message',
            payload: {
              message_length: 0,
              new_message_display: false,
              new_message_message: false,
              new_message_validation: false,
          }});
        }
      };

    return props.state.new_message_display && (
            <div className="message_container">
                <div className="message_title_container">
                    <p className="message_title" style={{fontWeight: '700'}}>
                        <span style={{fontSize: '12px'}}>
                            Nouveau message
                        </span>
                        <br></br>
                        <span>de :&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span style={{fontSize: '14px'}}>Vous</span>
                    </p>
                    <p
                        className="message_title"
                        style={{color: 'blue', fontSize: '10px'}}>
                        {livechat_icons.new_message()}
                        <span
                            className="message_recep_date"
                            style={{color: props.state.message_length >= 255
                                ? 'red'
                                : 'blue',
                            }}>
                            {props.state.message_length} / 255
                        </span>
                    </p>
                </div>
                <div className="message_text_container">
                    <p className="message_text">
                        <span style={{marginLeft: '20px'}}></span>
                        <textarea
                            style={{width: '92%'}}
                            id="newMessageContent"
                            onChange={(e) => {
                                props.dispatch({
                                    type: 'change_message_length',
                                    payload: {
                                        message_length:
                                            e.target.value.length
                                    }
                                });
                                document.querySelector('#newMessageContent').value = 
                                    e.target.value.substring(0, 254)
                            }}>
                        </textarea>
                    </p>
                    <div className="newMessZone">
                        {props.state.com.communication
                            && props.state.com.communication.length > 2 && (
                            <>
                                <button
                                    onClick={() => props.sendNewMessage('Oui')}>
                                    Oui
                                </button>
                                <button
                                    onClick={() => props.sendNewMessage('Peut-être')}>
                                    Peut-être
                                </button>
                                <button
                                    onClick={() => props.sendNewMessage('Non')}>
                                    Non
                                </button>
                            </>
                        )}
                        <button
                            style={{
                                '--newMesButBackground': 'transparent',
                                border: 'none',
                                color: 'red',
                            }}
                            onClick={() => props.dispatch({
                                type: 'change_new_message_reset',
                                payload: {
                                    ...props.state,
                                    new_message_display: false,
                                    message_length: 0,
                                }
                            })}>
                            {livechat_icons.reset_message()}
                        </button>
                        <button
                            style={{'--newMesButBackground': 'lightgreen'}}
                            onClick={() => sendNewMessage()}>
                            {livechat_icons.send_message()}
                        </button>
                    </div>
                </div>
            <div className="message_arrow_user"></div>
        </div>
    )}
    

