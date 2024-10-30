import React from 'react';
import UserSimulator from './livechat/UserSimulator';
import PseudoForm from './livechat/PseudoForm';

export default function Header(props) {
    return (
        <header className="App-header">
            <div className="logoContainer">
            <img
                src={process.env.REACT_APP_IMAGE_URL + '/LIVECHAT-icon.png'}
                alt="LIVECHAT demo icon" />
            </div>
            <div className="h1Container">
                <h1>LIVE CHAT - demo</h1>
                {props.state.pseudo_isValid && (
                    <p className="display_pseudo">
                        {'Votre pseudo : ' + props.state.pseudo}
                    </p>
                )}
            </div>
            {props.state.pseudo_isValid ? (
                <UserSimulator state={props.state} dispatch={props.dispatch} />
            ) : (
                <PseudoForm  state={props.state} dispatch={props.dispatch} />
            )}
        </header>
    )
}
