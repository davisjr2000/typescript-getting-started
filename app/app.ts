function startGame() {

  let playerName :string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(100, playerName);

}

function logPlayer(name : string = 'MultiMath Player'): void{
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string) : string | undefined {

  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
   const scoreElement: HTMLElement | null = document.getElementById('postedScores');
   scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);