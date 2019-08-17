export class StarWarsService {
  private characters = [
    { name: 'Luke Skylwalker', side: ''},
    { name: 'Darth Vader', side: ''}
  ];

  getCharacters(chosenList) {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    })
  }
  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }
}
