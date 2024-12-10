export default class UserModel {
// api'den kullanıcı verilerini alıp, döndüren fonksiyon 
async getUsers() {
    try{
   const res = await fetch('https://jsonplaceholder.typicode.com/users');

   const data = await res.json();

   return data;
} catch (err) {

}
}

}