// Show and hide rules
function showRules() {
  document.getElementById('closeRules').className = 'hidden';
  document.getElementById('modal').className = 'initialModal';
  document.getElementById('modal-container').className = 'initialModal';
  setTimeout(function(){
    document.getElementById('modal').className = 'modal';
    document.getElementById('modal-container').className = 'modal-container';
   // list.className = 'hidden';
  }, 1);

  rulesContent.innerHTML = rulesNo1;
  nextArrow.className = 'rulesArrows';
  nextArrow.addEventListener('click', rulesContentChangeNo2);
}

function rulesContentChangeNo2() {
  document.getElementById('closeRules').className = 'hidden';
  nextArrow.className = 'rulesArrows';
  rulesContent.innerHTML = rulesNo2;
  nextArrow.removeEventListener('click', rulesContentChangeNo2);
  nextArrow.addEventListener('click', rulesContentChangeNo3);
}
function rulesContentChangeNo3() {
  document.getElementById('closeRules').className = 'hidden';
  nextArrow.className = 'rulesArrows';
  rulesContent.innerHTML = rulesNo3;
  nextArrow.removeEventListener('click', rulesContentChangeNo3);
  nextArrow.addEventListener('click', rulesContentChangeNo4)
}
function rulesContentChangeNo4() {
  nextArrow.className = 'hidden';
  rulesContent.innerHTML = rulesNo4;
  document.getElementById('closeRules').className = 'deleteBtn';
}

// Hide Rules
function hideRules() {
  document.getElementById('modal').className = 'hidden';
  document.getElementById('modal-container').className = 'initialModal';
  nextArrow.className = 'rulesArrows';
 // list.className = ' ';
}
