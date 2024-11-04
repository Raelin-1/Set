export default class Team {
    constructor() {
        this.members = new Set();
    }   

    add(character) {
        if(this.members.has(character)) {
            throw new Error('Character already exists')
        }

        return this.members.add(character)
    }

    addAll(...characters) {
        characters.forEach((character) => {
            if(!this.members.has(character)) {
                this.members.add(character)
            }
        });

        return this.members;
    }

    toArray() {
        return [...this.members];
    }

}