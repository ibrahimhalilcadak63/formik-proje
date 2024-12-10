// View: Arayüz katmanıdır sadece html css kodları 

const userView = ({ users }) => {
  return (
    <div>
      <h1>Kullanıcılar</h1>

      {users.map((user) => (
      <h3>{user.name}</h3>
      ))}
    </div>
  );
};

export default userView;
