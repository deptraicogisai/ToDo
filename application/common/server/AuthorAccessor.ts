/**
 * Created by Clearpath on 12/8/2016.
 */
import * as mongoose from "mongoose";
import {createAccessor} from "./Accessor";
import {IAuthor} from "../../model/author";

interface IAuthorModel extends IAuthor, mongoose.Document {

}

export const authorSchema = new mongoose.Schema({
    id: String,
    title: String,
    completed: Boolean
});

export const authorAccessor = createAccessor<IAuthorModel>("Author", authorSchema);