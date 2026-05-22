function Game() {

    const battleResults = (computerChoice: string, playerChoice: string) => {
        switch (playerChoice) {
            case "rock":
                switch (computerChoice) {
                    case "rock":
                        return "tie";
                    case "paper":
                        return "lose";
                    case "scissors":
                        return "win";
                    case "bomb":
                        return "lose";
                    case "water":
                        return "win";
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        return "win";
                    case "paper":
                        return "tie";
                    case "scissors":
                        return "lose";
                    case "bomb":
                        return "lose";
                    case "water":
                        return "win";
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        return "lose";
                    case "paper":
                        return "win";
                    case "scissors":
                        return "tie";
                    case "bomb":
                        return "win";
                    case "water":
                        return "lose";
                }
                break;
            case "bomb":
                switch (computerChoice) {
                    case "rock":
                        return "win";
                    case "paper":
                        return "win";
                    case "scissors":
                        return "lose";
                    case "bomb":
                        return "tie";
                    case "water":
                        return "lose";
                }
                break;
            case "water":
                switch (computerChoice) {
                    case "rock":
                        return "lose";
                    case "paper":
                        return "lose";
                    case "scissors":
                        return "win";
                    case "bomb":
                        return "win";
                    case "water":
                        return "tie";
                }
                break;
        }
    }

  return (
    <>
      <h1>Game</h1>
    </>
  );
}

export default Game;
