import {useContext} from 'react';
import D from './D';
import myContext from './Context';

function C({info}) {
    const data = useContext(myContext)
    return (
        <div>
            <h2> C Component : <span style={{color:"red"}}>{data}</span></h2>
            <D info={info} />
        </div>
    );
}

export default C;