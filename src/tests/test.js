import Team from "../class/team";
import Character from "../class/character";

const character1 = new Character('Ivan', 100, 1);
const character2 = new Character('Oleg', 50, 2);
const team = new Team();

test('test add character', () => {
    const result = character1;

    expect(result).toEqual({
        name: 'Ivan',
        health: 100,
        level: 1,
    })
});

test('test add in character in a team', () => {
    const result = team.add(character1);
    expect(result).toEqual((new Set().add(character1)));
});

test('should throw error when adding duplicate character', () => {
    const team = new Team();
    const character = new Character('Warrior', 10);

    team.add(character);
    
    // Attempt to add the same character and catch the error
    expect(() => team.add(character)).toThrow('Character already exists');
});

test('test add several characters', () => {
    const result = team.addAll(character1, character2);
    expect(result).toEqual((new Set()).add(character1).add(character2));
});

test('test convert to array', () => {
   team.addAll(character1, character2);
   const result = team.toArray();
   expect(result).toEqual([
    character1,
    character2
   ]);
});