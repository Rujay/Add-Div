//Function that adds child div to parent divs  
function addDiv () {
    let child = document.createElement('div');
    child.classList.add('decorate');
    document.getElementById('a').appendChild(child);   
    document.getElementById('b').appendChild(child.cloneNode(true));   
}
//Event Listener for "Add Div" button
document.getElementById('add-div').addEventListener('click', () => {
    addDiv();
})