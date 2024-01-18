/** USER STORIES
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 * DONE: ES6
 * */
/**
 * Update the output text as a user types in the textarea
 */

updateText = () => {

  let textInputValue = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = textInputValue
}


/**
 * Toggle the bold class for the output text
 */

makeBold = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */

makeItalic = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 *Use contains, remove, and add functions
 */

makeUnderline = (elem) =>{
  elem.classList.toggle('active');

  let formattedText = document.getElementById('text-output');
  `${ formattedText.classList.contains('underline') ? formattedText.classList.remove('underline') : formattedText.classList.add('underline')}`
}

/**
 * Make sure to untoggle the active state for all other align buttons
 */

alignText = (elem, alignType) => {

  document.getElementById('text-output').style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName('align')

  for(button of buttonsList){
    button.classList.remove('active');
  }

  elem.classList.add('active');
}