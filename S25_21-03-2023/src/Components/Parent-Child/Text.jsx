

function Text(props) {
    var styles = {
        
        padding:"10px",
        boxShadow:"0 0 10px red",
        textAlign:"center",
        margin:"30px"
      
    }
    return (
        <div style={styles}>
            <h2>Text Component</h2>
            <p style={{fontSize:"25px",color:"red"}}>{props.value}</p>
        </div>
    );
}

export default Text;