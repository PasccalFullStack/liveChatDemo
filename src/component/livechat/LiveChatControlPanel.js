import React from 'react';
import livechat_icons from './liveChatFunction/livechat_icons';
import liveChatFunction from './liveChatFunction/liveChatFunction';

export default function LiveChatControlPanel(props) {
    return (
        <>
            {props.state.disp_mode !== 'larg'
                && props.state.current_user_id !== 0 && (
                <div 
                    className="screen_but" 
                    style={{marginTop: '0'}}
                    onClick={() => 
                        liveChatFunction.deploy_screen(
                            props.state,
                            props.dispatch,
                    )}>
                    {livechat_icons.deploy_screen_icon()}
                </div>
            )}
            {props.state.disp_mode !== 'small' && (
                <div 
                    className="screen_but" 
                    style={{marginTop: '34px'}}
                    onClick={() => 
                        liveChatFunction.retract_screen(
                            props.state,
                            props.dispatch,
                    )}>
                    {livechat_icons.retract_screen_icon()}
                </div>
            )}
            {!props.state.new_message_display
                && props.state.disp_mode !== 'small' && (
                <div 
                    className="screen_but" 
                    style={{
                        '--backgroundVal': 'lightgreen',
                        '--borderVal': '1px solid lightgreen',
                        marginTop: '68px',
                        color: 'green',
                    }}
                    onClick={() => 
                        props.dispatch({
                            type: 'change_new_message',
                            payload: {
                                ...props.state,
                                new_message_display: true,
                        }})
                    }>
                    {livechat_icons.new_message()}
                </div>
            )}
        </>
    )
}
