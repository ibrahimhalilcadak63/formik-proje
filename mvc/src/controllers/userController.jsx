// kullanıcı etkileşimlerini karşılar 
import { useState } from "react";
import UserView from "../views/userView";
import { useEffect } from "react";
import UserModel from "../models/userModel";

const UserController = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        UserModel .getUsers().then((users) => setUsers(users));

    }, []);
    return <UserView users={users}/>;
};
export default UserController;