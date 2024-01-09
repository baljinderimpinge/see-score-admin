import React, { useEffect, useState } from 'react'
import  Axios from 'axios'
const User = () => {
    const [userData, setUserData]= useState()
    useEffect(() => {
      let token = localStorage.getItem("token")
        Axios.get("http://localhost:4000/admin/users",{
           headers:{
            Authorization:`Bearer ${token}`
           }
        })
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
      <th scope="col">firstName</th>
      <th scope="col">lastName</th>
      <th scope="col">Email</th>
      <th scope="col">Domain</th>
    </tr>
  </thead>
  <tbody>
    {userData&& userData.map((item, index)=>{
        return(
            <tr>
            <th scope="row">1</th>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>Microsoft</td>
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