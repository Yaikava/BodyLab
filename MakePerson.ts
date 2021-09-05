import { Features, Person } from "./interfaces.ts";

export default class MakePerson implements Person {
    firstName: string;
    lastname: string;
    gender: string;
    pronouns: string[];
    age: number | BigInteger;
    bodyFeatures: Features;
    constructor(parameters: Person) {
        this.age = parameters.age;
        this.gender = parameters.gender;
        this.firstName = parameters.firstName;
        this.lastname = parameters.lastname;
        this.pronouns = parameters.pronouns;
        this.bodyFeatures = parameters.bodyFeatures
    }
}