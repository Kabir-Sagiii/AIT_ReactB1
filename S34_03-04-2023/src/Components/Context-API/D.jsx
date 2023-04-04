import {useContext} from 'react';
import myContext from './Context';

function D({info}) {
           const data =  useContext(myContext)
    return (
        <div>
            <h2> D Component</h2>
            {/* <p>{info}</p> */}

            <p>Context API : {data}</p>
        </div>
    );
}

export default D;