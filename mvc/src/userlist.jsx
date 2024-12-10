import React from 'react'

const userlist = () => {
  const [users, setUsers] = useState([]);

    Useffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));
    },[]);
  return <div>
    <h1>Kullanıcılar</h1>
    {users.map((user) => (
      <h3>{user.name}</h3>
    ))}

    </div>
  
};

export default userlist
