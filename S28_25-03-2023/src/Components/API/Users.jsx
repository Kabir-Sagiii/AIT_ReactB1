import React from 'react';

function Users({users}) {
    return (
        <div>
             <table 
             cellPadding={10} 
             style={{width:"70%",margin:"50px auto",padding:"20px",boxShadow:"0 0 10px black"}}>
                     <tr style={{backgroundColor:"black",color:"white"}}>
                         <th style={{}}>IMAGE</th>
                         <th>NAME</th>
                         <th>EMAIL</th>
                     </tr>
                       {
                        users.map((ele)=>{
                          return <tr align="center">
                              <td>
                                <img src={ele.avatar} width="70" height="70"/>
                              </td>
                              <td>{ele.first_name} {ele.last_name}</td>
                              <td>{ele.email}</td>
                          </tr>
                        })
                       }
                      
                 </table>
        </div>
    );
}

export default Users;