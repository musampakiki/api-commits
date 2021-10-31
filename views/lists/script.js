function viewDiv() {
  if (document.getElementById('message').style.display === 'none') {
    document.getElementById('message').style.display = 'block';
  } else document.getElementById('message').style.display = 'none';
  return false;
}

function viewDivSha() {
  if (document.getElementById('sha').style.display === 'none') {
    document.getElementById('sha').style.display = 'block';
  } else document.getElementById('sha').style.display = 'none';
  return false;
}

// document.body.addEventListener("click", function(event) {
//   if (event.target.nodeName == "BUTTON")
//     console.log("Clicked", event.target.textContent);
// });
