import React, {useRef} from 'react';

export default function LiveChatWaitingMode(props) {

  const unread_message = useRef(false);

  return (
    <div className="message_container">
      <div className="message_title_container">
        <div className="operator_image_container">
          <img
            src={process.env.REACT_APP_IMAGE_URL + '/operator_img.png'}
            rel="noreferrer"
            alt="operator representation"/>
        </div>
        {props.state.com.communication && props.state.com.communication.map(
          mess => {
            if (mess.message_reading_at === 0
              && mess.user_emit_date === 0) {
              unread_message.current = true;
            }
            
          return null;
        })}
        <p className="help_message">
            {unread_message.current === true
              ? <span style={{color: 'magenta'}}>Nouveau message</span>
              : 'Puis-je vous aider?'}
        </p>
      </div>
    </div>
  )
}
