// import { } from "./deps" - Import any sort of exported dependency from deps.ts

export interface Features { // Here you are able to set the bodyFeatures used bellow
    height: number; // in cm
    weight: number; // in kg
    shoeSize: number; // Can be EU, US, MX, whatever shoe size u want, just make sure to reference it with a comment, standard is EU
    skills: string[]; // An array of skills (represented as strings) that your Person will have
}

export interface Person { // The main interface
    firstName: string;
    lastname: string;
    gender: string;
    pronouns: string[];
    age: number | BigInteger;
    bodyFeatures: Features;
}