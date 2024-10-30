import React from 'react';

export default function UserSimulator(props) {

    const changeActifUser = () => {
        let name = document.querySelector('#actifUser').value;
        if (name !== "User choice") {
            props.dispatch({
                type: 'change_active_user',
                payload: {
                    active_user_display: true,
                    active_user_id: name.substr(0, name.indexOf(" / ")),
                    active_user_pseudo: name.substr(name.indexOf(" / ") +
                                            3, name.indexOf(" - ") - 4),
                    active_user_username: name.substr(name.indexOf(" - ") + 3),
            }});
        } else {
            props.dispatch({
                type: 'change_active_user',
                payload: {
                    active_user_display: false,
                    active_user_id: 0,
                    active_user_pseudo: '',
                    active_user_username: '',
            }});
        }
    };

    return (
        <div className="showUser">
            {props.state.active_user_display && (
            <p className="dispUser">{props.state.active_user_username}</p>
            )}
            <select
                className="userChoiceSelector"
                id="actifUser"
                onChange={() => changeActifUser()}
                style={{textAlign: 'center'}}>
                    <option key={"userChoice"}>User choice</option>
                    {props.state.user_list
                        && props.state.user_list.length > 0
                        && props.state.user_list.map((user, index) => (
                        <option
                            key={"user" + index}
                            value={user.id +
                                " / " + user.user_pseudo +
                                " - " + user.user_firstname +
                                " " + user.user_lastname}>
                            {user.user_pseudo}
                        </option>
                    ))}
            </select>
        </div>
    )
}