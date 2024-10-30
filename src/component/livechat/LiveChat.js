import React, {useEffect, useRef} from 'react';
import LiveChatControlPanel from './LiveChatControlPanel';
import LiveChatWaitingMode from './LiveChatWaitingMode';
import LiveChatDisplayMessage from './LiveChatDisplayMessage';
import LiveChatNewMessage from './LiveChatNewMessage';
import getUsers from './liveChatRequest/liveChatGetUsers';
import getCom from './liveChatRequest/liveChatGetCom';
import './liveChatStyle/livechat.css';

export default function LiveChat(props) {
  
  const refreshInterval = useRef(null);
  
  useEffect (() => {
    if (props.state.user_list && props.state.user_list.length === 0) {
      getUsers(props.dispatch);
    }
    if (props.state.active_user_id !== props.state.current_user_id) {
      props.dispatch({type: 'change_disp_mode', payload: {disp_mode: 'small'}});
    }
    if (props.state.active_user_id !== props.state.current_user_id
        && props.state.active_user_id !== 0) {
          props.dispatch(
            {type: 'change_current_user_id',
              payload: {current_user_id: props.state.active_user_id}});
          getCom(props.state, props.dispatch);
          clearInterval(refreshInterval.current);
          refreshInterval.current = setInterval(() =>
            getCom(props.state, props.dispatch),
            3000,
          );
    }
    if (props.state.disp_mode !== 'small') {
      let scroll = document.querySelector('.live_chat_container');
      scroll.scrollTop = scroll.scrollHeight;
    }
    var disp_mode_style = ['20vw', '4.5vh', '14px', 'hidden'];
    switch (props.state.disp_mode) {
      case 'small':
        disp_mode_style = ['20vw', '4.5vh', '14px', 'hidden'];
        break;
      case 'medium':
        disp_mode_style = ['22vw', '38vh', '14px', 'auto'];
        break;
      case 'larg':
        disp_mode_style = ['45vw', '80vh', '18px', 'auto'];
        break;
      default:
        disp_mode_style = ['20vw', '4.5vh', '14px', 'hidden'];
        break;
    }
    props.dispatch({
      type: 'change_dim',
      payload: {
        width_dim: disp_mode_style[0],
        height_dim: disp_mode_style[1],
        fontSize_dim: disp_mode_style[2],
        overflowY_dim: disp_mode_style[3],
    }})
    return ;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.state.active_user_id, props.state.disp_mode])
  
  return (
    <div 
      className="live_chat_container" 
      id="scroll_style" 
      style={{
        width: props.state.width_dim,
        height: props.state.height_dim,
        fontSize: props.state.fontSize_dim,
        overflowY: props.state.overflowY_dim,
        background: 
          props.state.disp_mode === 'larg'
            ? 'rgba(107, 107, 107, 0.8)'
            : 'rgba(198, 203, 241, 0.8)',
      }}>
      <LiveChatControlPanel state={props.state} dispatch={props.dispatch} />
      {props.state.disp_mode === 'small' && (
        <LiveChatWaitingMode state={props.state} />
      )}
      {props.state.disp_mode !== 'small'
        && props.state.com.communication 
        && props.state.com.communication.length > 0 
        && props.state.com.communication.map((oneCom, index) => (
          <LiveChatDisplayMessage
            key={"comContainer" + index}
            oneCom={oneCom}
            state={props.state}
            dispatch={props.dispatch}
            index={index} />
      ))}
      <LiveChatNewMessage
        state={props.state}
        dispatch={props.dispatch}
        // sendNewMessage={sendNewMessage} 
          
        />
    </div>
  )
}
