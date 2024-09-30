import React, { ChangeEvent , KeyboardEvent} from 'react';
import './style.css';

interface Props {
    label: string;
    type: 'text' | 'password';
    placeholder: string;
    value: string;
    message: string;
    messageError: boolean;
    buttonName?: string;

    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void;
}

export default function InputBox({ 
    label, 
    type, 
    placeholder, 
    value, 
    buttonName,
    message,
    messageError,
    onChange,
    onKeyDown,
    onButtonClick,
}: Props) {

    return (
        <div className="input-box">
            <div className="label">{label}</div>
            <div className="input-area">
                <input value={value} type={type} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown}/>
                {buttonName && <div className={`input-button ${value ? 'active' : 'disable'}`} onClick={onButtonClick}>{buttonName}</div>}
            </div>
            <div className={`message ${messageError ? 'error' : 'primary'}`}>{message}</div>
        </div>
    )

}