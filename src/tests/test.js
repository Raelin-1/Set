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

test('test add the same character', () => {
    team.add(character1);
    expect(() => {
        team.add(character1);
    }).toThrow(Error)
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