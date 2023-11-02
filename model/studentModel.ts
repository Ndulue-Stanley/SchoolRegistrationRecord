import { ObjectId } from "mongodb";

export class studentModel {
  public _id?: ObjectId;
  public name?: string;
  public course?: Array<string>;
  public department?: string;
  public score?: number;

  constructor(
    name?: string,
    course?: Array<string>,
    department?: string,
    score?: number
  ) {
    this._id = new ObjectId();
    this.name = name;
    this.course = course;
    this.department = department;
    this.score = score;
  }
}
