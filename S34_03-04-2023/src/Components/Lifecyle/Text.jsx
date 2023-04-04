import {useEffect} from 'react';

function Text(props) {
    // 1. Hooks should be called always inside the Component only
    // 2. Hooks should be called on the top level of component
 
           useEffect(()=>{
            console.log(localStorage.getItem('name'))
           
           
           })

           

           
    return (
        <div>
          
            <h2 style={{color:"red"}}>Text Component</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi soluta accusamus laboriosam sint dicta error dolores nostrum, fugiat dignissimos commodi reiciendis! Accusantium fuga deleniti aut eligendi, tempora amet reiciendis delectus! Quidem, sequi autem debitis laborum tempore maxime provident dolore voluptate blanditiis animi doloribus vitae quia, dolor quisquam eos ducimus aut accusantium. Animi mollitia ipsum vel eveniet impedit dolorum consequatur itaque blanditiis laborum iure nulla, porro repudiandae voluptatibus cumque quaerat. Provident voluptatem eveniet quidem harum nam voluptatibus sapiente commodi est aut enim iste beatae, similique numquam molestias accusantium sunt recusandae corporis, quae dolores? Minus recusandae illum ipsa quasi reiciendis voluptatem!</p>
        </div>
    );
}

export default Text;