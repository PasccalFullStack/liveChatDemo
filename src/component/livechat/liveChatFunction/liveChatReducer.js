const liveChatReducer = (state, action) => {
  
  // console.log('type : ', action.type, action.payload)

  if (action.type === 'change_user_pseudo') {
    return {
      ...state,
      pseudo: action.payload.pseudo,
      pseudo_isValid: action.payload.pseudo_isValid,
    };
  }
  if (action.type === 'change_send_new_message') {
    return {
      ...state,
      message_length: action.payload.message_length,
      new_message_display: action.payload.new_message_display,
      new_message_message: action.payload.new_message_message,
      new_message_validation: action.payload.new_message_validation,
    };
  }
  if (action.type === 'change_new_message_reset') {
    return {
      ...state,
      new_message_display: action.payload.new_message_display,
      message_length: action.payload.message_length,
    };
  }
  if (action.type === 'change_user_list') {
    return {...state, user_list: action.payload.user_list};
  }
  if (action.type === 'change_com') {
    return {...state, com: action.payload.com};
  }
  if (action.type === 'change_disp_mode') {
    return {...state, disp_mode: action.payload.disp_mode};
  }
  if (action.type === 'change_active_user') {
    return {
      ...state,
      active_user_display: action.payload.active_user_display,
      active_user_id: action.payload.active_user_id,
      active_user_pseudo: action.payload.active_user_pseudo,
      active_user_username: action.payload.active_user_username,
    };
  }
  if (action.type === 'change_current_user_id') {
    return {...state, current_user_id: action.payload.current_user_id};
  }
  if (action.type === 'change_message_length') {
    return {...state, message_length: action.payload.message_length};
  }
  if (action.type === 'change_dim') {
    return {
      ...state,
      width_dim: action.payload.width_dim,
      height_dim: action.payload.height_dim,
      fontSize_dim: action.payload.fontSize_dim,
      overflowY_dim: action.payload.overflow_dim,
    };
  }
  if (action.type === 'change_new_message') {
    return {
      ...state,
      new_message_display: action.payload.new_message_display,
      new_message_message: action.payload.new_message_message,
      new_message_validation: action.payload.new_message_validation,
    };
  }
  throw Error('Unknown action.');
}

export default liveChatReducer;