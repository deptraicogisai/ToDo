import {User, UserWrapper} from "../model/user";
export async function getAllUser(page: number) {
    const userListApi = 'http://reqres.in/api/users?page=_page';

    const result = await fetch(userListApi.replace("_page", page + ""));
    if (result.ok) {
        const data = await result.json();
        return <UserWrapper>data;
    }
}


export async function getUserDetail(userId: number) {
    const userDetailApi = 'http://reqres.in/api/users/_userId';

    const result = await fetch(userDetailApi.replace("_userId", userId + ""));
    if (result.ok) {
        const data = await result.json();
        return <User>data.data;
    }
}
