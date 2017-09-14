export const NEW_GAME = 'NEW_GAME';
export const newGame = function() {
  return {
    type: NEW_GAME,
    correctAnswer: Math.round(Math.random() * 100)
  }
};

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = function(guess) {
  return {
    type: MAKE_GUESS,
    guess
  }
};

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = function() {
  return {type: TOGGLE_INFO_MODAL}
};