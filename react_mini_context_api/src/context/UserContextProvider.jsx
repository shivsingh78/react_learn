
import react,{ useState } from "react";
import UserContex from "./UserContext";

const UserContexProvider = ({children}) => {
     const [user,setUser]=useState(null)
     return (
          <UserContex.Provider value={{user,setUser}}>
               {children}

          </UserContex.Provider>
     )

}

export default UserContexProvider