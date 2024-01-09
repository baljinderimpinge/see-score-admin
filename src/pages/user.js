import React, { useEffect, useState } from 'react'
import  Axios from 'axios'
const User = () => {
    const [userData, setUserData]= useState()
    useEffect(() => {
        Axios.get("http://localhost:7000/user/users")
          .then(response => {
            // Handle the data here
            console.log(response.data);
            setUserData(response.data.data)
          })
          .catch(error => {
            // Handle errors here
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <div>

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">pass</th>
      <th scope="col">id</th>
    </tr>
  </thead>
  <tbody>
    {userData&& userData.map((item, index)=>{
        return(
            <tr>
            <th scope="row">1</th>
            <td>{item.name}</td>
            <td>{item.password}</td>
            <td>{item.id}</td>
           </tr>
        )

    })

    }
   
   
  </tbody>
</table>
    </div>
  )
}

export default User