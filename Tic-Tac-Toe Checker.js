function isSolved(board) {
  let zeroFound = false;
  for(let i = 0; i < board.length; i++){    
    
    let column = 0;
    let row = 0;
    let diag = 0;
    let rdiag = 0;
    
    for(let j = 0; j < board[i].length; j++){
      row += board[i][j];
      column += board[j][i];
      diag += board[j][j];
      rdiag += board[board.length - j - 1][j];
      
      if(board[i][j] === 0){
        row += 10000;
        zeroFound = true;
      }      
      if(board[j][i] === 0){
        column += 10000;
        zeroFound = true;
      }      
      if(board[j][j] === 0){
        diag += 10000;
        zeroFound = true;
      }      
      if(board[board.length - j - 1][j] === 0){
        rdiag += 10000;
        zeroFound = true;
      }
    }
    
    let check = [row, column, diag, rdiag];

    if(check.includes(board.length))
      return 1;
    else if(check.includes(board.length*2))
      return 2;
  }
  
  if(zeroFound)
    return -1;
  else
    return 0;
}