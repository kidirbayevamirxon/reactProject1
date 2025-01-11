import classses from './button.module.css';
import { Children } from 'react';
export function Button({children}) {
    return(
        <>
            <button className={classses.button}>{children}</button>
        </>
    )
}