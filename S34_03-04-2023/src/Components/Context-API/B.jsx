import React from 'react';
import C from './C';

function B({info}) {
    return (
        <div>
            <h2>BComponent</h2>
            <C info={info}/>
        </div>
    );
}

export default B;