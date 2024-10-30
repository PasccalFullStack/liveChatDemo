import React from 'react';
import livechat_icons from './liveChatFunction/livechat_icons';
import liveChatFunction from './liveChatFunction/liveChatFunction';
import setMessageIsReadingState
    from './liveChatRequest/liveChatSetMessageIsReadingState';

export default function LiveChatDisplayMessage(props) {
    return (
        <div key={"comContent" + props.index} className="message_container">
            <div className="message_title_container">
                <p className="message_title" style={{fontWeight: '700'}}>
                    {props.oneCom.user_emit_date !== 0 && (
                        <>
                            <span style={{fontSize: '10px'}}>
                                {liveChatFunction.show_date(
                                    props.oneCom.user_emit_date
                                )}
                            </span>
                            <br></br>
                            <span>de :&nbsp;&nbsp;&nbsp;</span> 
                            <span style={{fontSize: '14px', color: 'blue'
                            }}>Vous</span>
                        </>
                    )}
                    {props.oneCom.hotline_emit_date !== 0 && (
                        <>
                            <span style={{fontSize: '10px'}}>
                                {liveChatFunction.show_date(
                                    props.oneCom.hotline_emit_date
                                )}
                            </span>
                            <br></br>
                            <span>de :&nbsp;&nbsp;&nbsp;</span> 
                            <span style={{fontSize: '14px'}}>
                            {props.state.com.operator.operator_pseudo}
                            </span>
                        </>
                    )}
                </p>
            {props.oneCom.message_reading_at === 0 && (
                <p
                    className="message_title anim_unread"
                    onClick={() => {
                        if (props.oneCom.user_emit_date === 0) {
                        setMessageIsReadingState(
                            props.oneCom.id,
                            props.oneCom.user_id,
                            props.state,
                            props.dispatch,
                        );
                        props.dispatch({
                            type: 'change_new_message',
                            payload: {
                                ...props.state,
                                new_message_display: true,
                        }})
                        }}}
                    style={{color: 'red'}}>
                    {livechat_icons.unread_message()}
                </p>
            )}
            {props.oneCom.message_reading_at !== 0 && (
                <p className="message_title" style={{color: '#40C82E'}}>
                    {livechat_icons.message_read()}
                    <span className="message_recep_date">
                        {liveChatFunction.show_date(
                            props.oneCom.message_reading_at
                        )}
                    </span>
                </p>
            )}
            </div>
            <div className="message_text_container">
                <div className="message_text">
                    <span style={{marginLeft: '20px'}}></span>
                    {props.oneCom.hotline_emit_date !== 0 && (
                        <>
                            {props.oneCom.message_reading_at !== 0
                                ? props.oneCom.hotline_message
                                : (
                                    <div
                                    className="open_new_mess"
                                    onClick={() => {
                                        if (props.oneCom.user_emit_date === 0) {
                                        setMessageIsReadingState(
                                            props.oneCom.id,
                                            props.oneCom.user_id,
                                            props.state,
                                            props.dispatch,
                                        );
                                        props.dispatch({
                                            type: 'change_new_message',
                                            payload: {
                                                ...props.state,
                                                new_message_display: true,
                                        }})
                                    }}}>
                                    <p>Ouvrir ce nouveau message</p>
                                </div>
                            )}
                        </>
                    )}
                    {props.oneCom.user_emit_date !== 0 && props.oneCom.user_message}
                </div>
            </div>
            {props.oneCom.user_emit_date !== 0 && (
                <div className="message_arrow_user"></div>
            )}
            {props.oneCom.hotline_emit_date !== 0 && (
                <div className="message_arrow_hotline"></div>
            )}
        </div>
    )
}
