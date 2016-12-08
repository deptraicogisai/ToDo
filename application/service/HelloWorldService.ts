import {authorAccessor} from "../common/server/AuthorAccessor";
/**
 * Hello world service return a message from server
 */
export class HelloWorldService {

    /**
     * Return a message from server
     *
     * @return message from server
     */
    async getMessage(): Promise<string> {
        return "Hello World!";
    }


    async getAuthors(): Promise<any> {
        authorAccessor.find((err, Authors) => {
            if (err) {
                return null;
            }
            return Authors;
        });
    }
}