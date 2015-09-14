var empList = [];

/*function queryBoard(var score) {
      //compares a number called "score" to the current leaderboard and
      //returns a position. if the position > 50 then returns null
};*/
function updateScore (a, b) {
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
      if (empList.length === 0) {
          empList.push({nick:a, score:b});
      }
      else if (empList.length === 1) {
          if (b > empList[0].score) {
              if (empList[0].nick === a) {
                  empList[0].score = b;
              }
              else {
              empList.unshift({nick:a, score:b});
              }
          }
          else {
              empList.push({nick:a, score:b});
          }
      }
      else {
          if (updateScore(a,b)) {
              null;
          }
          else {
            var diff = [];
            for (i=0; i < empList.length; i++) {
                if (b === empList[i].score) {
                    empList.splice(i+1,0,{nick:a, score:b});
                }
                else {
                    diff.push(b - empList[i].score);
                };
            };
            var checkNeg = [];
            var value = diff[0];
            for (i=1; i < diff.length; i++) {
                if (diff[i] < value && diff[i] > 0) {
                    value = diff[i];
                }
                else if (diff[i] > value && diff[i] > 0) {
                    value = value;
                    if (value < 0) {
                        value = diff[i];
                    }
                }
                else {
                    checkNeg.push(diff[i]);
                }
            if (checkNeg.length === diff.length) {
                value = Math.max.apply(Math, diff); //copied from stackoverflow
            }
            };
            var index = diff.indexOf(value);
            if (value > 0) {
                empList.splice(index, 0, {nick:a, score:b});
            }
            else {
                empList.splice(index+1, 0, {nick:a, score:b})
            }
          }
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
setScore("fuck", 1);
console.log(empList);
setScore("CB", 10);
console.log(empList);
setScore("gg", 2);
console.log(empList);
setScore("fkDECO1800", 100);
console.log(empList);
setScore("Chai", 15);
console.log(empList);

/*function getScores() {
      //This function needs to be able to fetch a list of scores from
      //leaderboard and returns two lists (list of lists) containing names
      //and scores
      return emplist;
};*/
