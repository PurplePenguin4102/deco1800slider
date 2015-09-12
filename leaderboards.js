var empList = [];

/*function queryBoard(var score) {
      //compares a number called "score" to the current leaderboard and
      //returns a position. if the position > 50 then returns null
};*/

function checkScore(a, b) {
      if (empList.length === 0) {
          empList.push({name:a, score:b});
      }
      else if (empList.length === 1) {
          if (b > empList[0].score) {
              empList.splice(0,0,{name:a, score:b});
          }
          else {
              empList.push({name:a, score:b});
          }
      }
      else {
          var diff = [];
          for (i=0; i <= empList.length; i++) {
              if (b === empList[i].score) {
                  break;
                  empList.splice(i+1,0,{name:a, score:b});
              }
              else {
                  diff.push(b - empList[i].score);
              };
          var max = Math.min.apply(Math, diff); //copied from stackoverflow
          count = 0;
          for (min in diff) {
              count = count + 1
          };
          var index = diff.indexOf(min);
          if (min > 0) {
              empList.splice(index-1, 0, {name:a, score:b})
          }
          else {
              empList.splice(index+count+1, 0, {name:a, score:b})
          }
          };
      };
}

function setScore(a, b) {
      //puts the name and associated score into the leaderboard (scores.txt)
      //at position pos.
      if (empList.length <= 50) {
          checkScore(a, b);
      }
      else {
          empList.pop();
          checkScore(a, b);
      };
}

setScore("Chai", 5);
setScore("ggwp", 5);
console.log(empList);
setScore("fuck", 1);
console.log(empList);
setScore("fkfk", 5);
console.log(empList);

/*function getScores() {
      //This function needs to be able to fetch a list of scores from
      //leaderboard and returns two lists (list of lists) containing names
      //and scores
      return emplist;
};*/
