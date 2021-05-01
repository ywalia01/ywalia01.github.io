import React, { useEffect, useState } from 'react';
import './Toggle.css';
import { setTheme } from '../../Util/themes';
import { SunIcon} from '@primer/octicons-react';

function Toggle() {
    // eslint-disable-next-line
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
      }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    return (
        <div className="toggle-container">
            <div id="moon">
                <i class="far fa-moon"></i>
            </div>
            <label className="switch">
                <input type="checkbox" hidden id="toggle" className="toggle--checkbox" onClick={handleOnClick}/>
                <span className="slider"></span>
            </label>
            <div id="sun">
                <SunIcon size={19} />
            </div>
        </div>
    )
}

export default Toggle;