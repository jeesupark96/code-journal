/* global data */
/* exported data */
var photo = document.getElementById('images');
var photoUrl = document.getElementById('photo-url');
function newPhoto(event) {
  photo.src = photoUrl.value;
}

document.addEventListener('input', newPhoto);

var form = document.querySelector('form');
var title = document.getElementById('title-name');
var notes = document.getElementById('Notes');

function formEntry(event) {
  event.preventDefault();
  var objectOne = {
    title: title.value,
    PhotoUrl: photoUrl.value,
    Notes: notes.value,
    nextEntryId: data.nextEntryId++
  };

  data.entries.unshift(objectOne);
  form.reset();
  photo.src = 'images/placeholder-image-square.jpg';
}
document.addEventListener('submit', formEntry);
