import {useState,useEffect} from 'react';

function Users(props) {
  const [user,setUser] = useState([])
  useEffect(()=>{
    getUser()
},[])

    const getUser = ()=>{
         fetch("https://jsonplaceholder.typicode.com/users")
         .then((res)=>res.json())
         .then((data)=>{
            setUser(data)
         })
    }
    return (
        <div style={{padding:"50px",}}>
            <h2 style={{color:"green"}}>Users Component</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae totam excepturi, quidem iure architecto odit? Aliquam odio numquam assumenda vitae doloremque, facilis amet sequi quia similique, nostrum dolorem totam praesentium rem natus voluptatem unde debitis possimus! Fuga harum tempora temporibus adipisci inventore repudiandae veniam earum dolor, facilis rerum voluptas explicabo tenetur laboriosam sit ipsum autem voluptate itaque. Enim obcaecati eveniet, quidem itaque vero sit, amet, neque quas molestias iure ducimus deleniti delectus dolorem reiciendis quo eligendi hic aliquam recusandae incidunt ad facere. Magnam amet maxime numquam. Aperiam voluptate recusandae dignissimos iste exercitationem aspernatur tempore culpa obcaecati repudiandae, quae voluptas excepturi.</p>
            <button onClick={getUser}>Get Users</button>
              {
                user.length > 0 ? <ol>
                      {
                        user.map((ele)=>{
                            return <li>{ele.name}</li>
                        })
                      }
                </ol> : <h2 style={{color:"red"}}>No Users Found</h2>
              }
        </div>
    );
}

export default Users;