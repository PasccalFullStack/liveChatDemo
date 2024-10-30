const liveChatFunction = {
    deploy_screen : (state, dispatch) => {
        if (state.disp_mode === 'small') {
            dispatch({type: 'change_disp_mode', payload: {disp_mode: 'medium'}});
        }
        if (state.disp_mode === 'medium') {
            dispatch({type: 'change_disp_mode', payload: {disp_mode: 'larg'}});
        }
    },
    retract_screen : (state, dispatch) => {
        if (state.disp_mode === 'larg') {
            dispatch({type: 'change_disp_mode', payload: {disp_mode: 'medium'}});
        }
        if (state.disp_mode === 'medium') {
            dispatch({type: 'change_disp_mode', payload: {disp_mode: 'small'}});
        }
    },
    show_date : tp => {
        let date = new Date(tp * 1000);
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
        let getMonth = date.getMonth() + 1;
        let month = getMonth > 9 ? getMonth : '0' + getMonth
        let hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
        let minu = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
        let seco = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
        let dateFormated = 
            day + '/' + month + '/' + date.getFullYear() + ' - ' + 
            hour + ':' + minu + ':' + seco;
        return dateFormated;
    },
};

export default liveChatFunction;