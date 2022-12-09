import {Users} from './UsersSlice';
import LoginPage from "./LoginUi"
export default function userList (props:any) {
    const {users} = props;
    console.log("users",users);
    return (<div>
        UsersList 
        {
            users.map((users:Users)=> <LoginPage
                    users={users}>
                    </LoginPage>
            )
        }
</div>
    )
}

