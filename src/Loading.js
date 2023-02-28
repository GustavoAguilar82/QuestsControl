import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from './TodoContext/TodoContext';
import './styles/Loading.css';


function Loading()
{
    return ReactDOM.createPortal(
        <div className='.containerLoading'> 
            <div className='backgroundLoading'>
                <div className='left'>
                    <div className='image'></div>
                </div>
                <div className='right'>
                    <div className='mask thick'></div>
                    <div className='bar'></div>
                    <div className='mask thick'></div>
                </div>
            </div>
        </div>,
        
        
        document.getElementById("loading")
    );
}

export { Loading }
