import MakePerson from "./MakePerson.ts";

const HypeLevels = new MakePerson({
    firstName: "Hype",
    lastname: "Levels",
    gender: "Male",
    pronouns: ["He", "Him"],
    age: Math.floor(Math.random() * 69),
    bodyFeatures: {
        weight: Math.floor(Math.random() * 80),
        skills: ["I can't code"],
        shoeSize: 42,
        height: 172
    }
})