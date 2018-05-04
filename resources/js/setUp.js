
// add Item button can add children
addItemBtn.addEventListener("click", addItem);
// getting team names as long as more than 2 are created
readyBtn.addEventListener("click", grabTeamNames);
// add ruleBtn event listener
rulesBtn.addEventListener('click', showRules);
// close rules btn event addEventListener
document.getElementById('closeRules').addEventListener('click', hideRules);

// Add Teams and players
function addItem() {
  noOfTeams += 1;
  noOfPlayers += 2;
  var randNum = ((Math.random() * 9999999999) * (Math.random() * 99999999999));
  var randNumId = randNum + noOfTeams;
  var listItem = document.createElement("li");
  listItem.innerHTML = `<img class='deleteBtn teamBtn' id='deleteBtn_${randNumId}' src='./resources/images/x_delete_button.png'/>
                        <input maxlength="20" class="teamNames" placeholder='Team ${noOfTeams}'></input>
                        <div class='playerContainer' id='playerContainer_${randNumId}'>
                        <input maxlength="20" class='playerNames' placeholder='Player 1'/>
                        <input maxlength="20" class='playerNames' placeholder='Player 2'/>
                        </div>
                        <button class='addPlayerBtn btn' id='addPlayer_${randNumId}'>Add third player</button>`;
  document.getElementById('list').appendChild(listItem);
  var buttonDelete = document.getElementById(`deleteBtn_${randNumId}`);
  buttonDelete.addEventListener("click", deleteItem);
  document.getElementById(`addPlayer_${randNumId}`).addEventListener('click', addPlayer);
  nextArrow.addEventListener('click', rulesContentChangeNo2);
}

function addPlayer() {
  noOfPlayers += 1;
  var id = this.id;
  var nOsInId = id.substring(10, id.length);
  var playerContainerId = 'playerContainer_' + nOsInId;
  var player3Id = 'player3Id' + nOsInId;
  var z = document.createElement('li');
  var text = `<input maxlength="20" class='playerNames' id='${player3Id}' placeholder='Player 3'/>`;
  z.innerHTML = text;
  var playerContainer = document.getElementById(`${playerContainerId}`);
  playerContainer.appendChild(z);
  this.removeEventListener("click", addPlayer);
  this.innerHTML = 'Delete Third Player';
  this.addEventListener('click', deleteThirdPlayer);
}

function deleteThirdPlayer() {
  noOfPlayers -=1;

  var identity = this.id;
  var identityNos = identity.substring(10, this.id.length);
  var player3Identity = 'player3Id' + identityNos;
  var player3Box = document.getElementById(`${player3Identity}`);
  var playerContainerHere = 'playerContainer_' + identityNos;
  document.getElementById(`${playerContainerHere}`).removeChild(player3Box.parentNode);
  this.removeEventListener('click', deleteThirdPlayer);
  this.addEventListener('click', addPlayer);
  this.innerHTML = 'Add Third Player';
}

function deleteItem() {
  var item = this.parentNode;
  document.getElementById('list').removeChild(item);
  noOfTeams -= 1;
}

function grabTeamNames() {
  // Honey Pot
  if(document.getElementById('computer').value != '') {
    alert('something\'s not quite right');
    return;
  } else {
      var teamNames = document.querySelectorAll('.teamNames');
      var playerNames = document.querySelectorAll('.playerNames');

      if(noOfTeams < 2) {
        alert("You must have at least two teams");          // CHANGE THIS TO SOMETHING GOOD
        return;
      } else {
     //create arrays of team names and player names
              for(i=0; i < teamNames.length; i++) {
                  teamNamesArray.push(teamNames[i].value);
                  // If no values are entered, get rid of that shit
                  if(teamNames[i].value == '') {
                    alert('Please enter your team names');        // CHANGE THIS TO SOMETHING GOOD
                    for(let y=0; y < teamNames.length; y++) {
                      teamNamesArray.pop();
                    }
                    for(let y=0; y < playerNames.length; y++) {
                      playerNamesArray.pop();
                      return;
                        }
                    }
        }
    // loop through playerNamesArray to form new array
    for(i=0; i < playerNames.length; i++) {
      playerNamesArray.push(playerNames[i].value);
      if(playerNames[i].value == '') {
        alert('Please enter your Player names');
        for(let y=0; y < teamNames.length; y++) {
          teamNamesArray.pop();
        }
        for(let y=0; y < playerNames.length; y++) {
          PlayerNamesArray.pop();
          return;
        }
      }
    }
  }
// create team Objects
    for(i=0; i < noOfTeams; i++) {
      var numberOfPlayers = list.children[i].querySelector('div').children.length;
      var specificTeamPlayerNames = [];

        for(var k=numberOfPlayers - 1; k >= 0; k--) {
          specificTeamPlayerNames.push(playerNamesArray[k]);
          playerNamesArray.splice(k, 1);
        }

        teamObjectsArray[i] = {
          name: teamNamesArray[i],
          players: specificTeamPlayerNames,
          score: 0,
          roundsPlayed: 0,
          passesUsed: 0,
          position: 1,
          whichPlayersTurn: 0,
        };
      }

    }
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
  addItemBtn.className = 'hidden';
  readyBtn.removeEventListener("click", grabTeamNames);
// SETTINGS BASICALLY
function showSettings() {
   document.getElementById('settings-modal').className = 'initialSettings';
   document.getElementById('settings-container').className = 'initialSettings';
  setTimeout(function(){
    document.getElementById('settings-modal').className = 'settings-modal';
    document.getElementById('settings-container').className = 'modal-container';
  }, 1);
  let zero = 0;
  let one = 1;
  let two = 2;
  let three = 3;
  let four = 4;
  let five = 5;

  let twenty = 20;
  let forty = 40;
  let sixty = 60;
  let eighty = 80;
  let hundred = 100;
  let twohundred = 200;

  let thirty = 30;
  let fortyfive = 45;
  let settingsHTML = `<h1>Settings</h1>
                      <div class='settings-row'>
                        <span>Points needed to win</span>
                        <select id='pointsToWinSelect'>
                        <option value='${sixty}'>${sixty}</option>
                          <option value='${twenty}'>${twenty}</option>
                          <option value='${thirty}'>${thirty}</option>
                          <option value='${forty}'>${forty}</option>
                          <option value='${eighty}'>${eighty}</option>
                          <option value='${hundred}'>${hundred}</option>
                          <option value='${twohundred}'>${twohundred}</option>
                        </select>
                      </div>
                      <div class='settings-row'>
                        <span>Timer for each Round(seconds)</span>
                        <select id='timerSelect'>
                          <option value='${thirty}'>${thirty}</option>
                          <option value='${fortyfive}'>${fortyfive}</option>
                          <option value='${sixty}'>${sixty}</option>
                        </select>
                      </div>
                      <div class='settings-row'>
                        <span>Passes per Round</span>
                        <select id='passesSelect'>
                          <option value='${three}'>${three}</option>
                          <option value='${zero}'>${zero}</option>
                          <option value='${one}'>${one}</option>
                          <option value='${two}'>${two}</option>
                          <option value='${four}'>${four}</option>
                          <option value='${five}'>${five}</option>
                        </select>
                      </div>
                      <div class='settings-row'>
                        <span>Drinking Rules</span>
                        <select id='drinkingSelect'>
                          <option value='Enabled'>Enabled</option>
                          <option value='Disabled'>Disabled</option>
                        </select>
                      </div>`;

  document.getElementById('settingsContent').innerHTML = settingsHTML;
  document.getElementById('closeSettings').addEventListener('click', backToTeamMaker);
  document.getElementById('saveSettings').addEventListener('click', saveSettings);

}
showSettings();
function saveSettings() {
  // grab values
  let pointsToWinSelect = document.getElementById('pointsToWinSelect').value;
  let timerSelect = document.getElementById('timerSelect').value;
  let passesSelect = document.getElementById('passesSelect').value;
  let drinkingSelect = document.getElementById('drinkingSelect').value;
  // edit global variables
  timer = timerSelect;
  toWin = pointsToWinSelect;
  maximumPasses = passesSelect;

  if(drinkingSelect == 'Enabled') {
    drinkRules = true;
  } else {
    drinkRules = false;
  }
  function startDaGame() {
    // Ensure first team that starts is random
  let randomStart = Math.floor(Math.random() * noOfTeams);
  whichTeamPlays += randomStart;
  roundPrep(teamObjectsArray[whichTeamPlays%teamObjectsArray.length]);
    }
    hideSettings();
    startDaGame();
}
function hideSettings() {
  document.getElementById('settings-modal').className = 'hidden';
  document.getElementById('settings-container').className = 'hidden';
}
// So that too many teams don't get accidentally added to the arrays etc
  function backToTeamMaker() {
    noOfPlayers -= noOfPlayers;
    teamObjectsArray.length = 0;

    document.getElementById('settings-modal').className = 'hidden';
    document.getElementById('settings-container').className = 'hidden';

    }
  }
