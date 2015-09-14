var empList = [];

function updateScore (a, b) {
      //If the score input has the same name as the one in the empList, return true
      //Update the score if the new score input is higher else do nothing
      for (i=0; i<empList.length ; i++) {
          if (empList[i].nick === a) {
              if (b > empList[i].score) {
                  if (i===0) {
                      empList[i].score = b;
                  }
                  else {
                      empList[i].score = b;
                      var rise = 0;
                      for (x=i; x>0; x--) {
                          if (b > empList[x-1].score) {
                              rise++;
                          }
                      }
                      if (rise === i) {
                          empList.unshift({nick:a, score:b});
                      }
                      else if (rise === 0) {
                          null;
                      }
                      else {
                          empList.splice(i,1);
                          empList.splice(i-rise,0,{nick:a, score:b});
                      }
                      return true;
                  }
              }
              else {
                  return true;
              }
          }
      }
}

function checkScore(a, b) {

      //Create a score object and append to the empList for given name and score
      //Sort in accending order according to their scores
      if (empList.length === 0) {
          empList.push({nick:a, score:b});
      }
      else if (empList.length === 1) {
          if (b > empList[0].score) {
              empList.splice(0,0,{nick:a, score:b});
          }
          else {
              empList.push({nick:a, score:b});
          }
      }
      else {
          var diff = [];
          for (i=0; i <= empList.length; i++) {
              if (b === empList[i].score) {
                  break;
                  empList.splice(i+1,0,{nick:a, score:b});
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
              empList.splice(index-1, 0, {nick:a, score:b})
          }
          else {
              empList.splice(index+count+1, 0, {nick:a, score:b})
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

/*function getScores() {
      //This function needs to be able to fetch a list of scores from
      //leaderboard and returns a list with objects containing names
      //and scores
      return empList;
}*/

setScore("Chai", 5);
setScore("CB", 10);
console.log(empList);
setScore("gg", 2);
console.log(empList);
setScore("ggwp", 100);
console.log(empList);
setScore("fg", 7);
console.log(empList);
