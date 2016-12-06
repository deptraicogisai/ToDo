/**
 * Created by Clearpath on 12/6/2016.
 */

export class UserWrapper {
    total_pages: number;
    data: User[];
}


export class User {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}