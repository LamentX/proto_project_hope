// Global Variables
var questList = document.querySelectorAll('.quest-list li');
var selectedQuest = document.querySelector('.selected-quest');
var heroList = document.querySelectorAll('.hero-list li a');
var heroEquipment = document.querySelectorAll('.hero-equipment div > div');
var formModal = document.querySelector('#form-modal');
var modalClose = document.querySelectorAll('.modal-close');
var formSubmit = document.querySelector('#form-submit');

// Event Listeners
for(var i = 0; i < questList.length; i++) {
  questList[i].addEventListener('click', function() {
    // Update selected quest panel
    selectedQuest.innerHTML = this.innerHTML;
  });
}

for(var i = 0; i < heroList.length; i++) {
  heroList[i].addEventListener('click', function() {
    // Update hero equipment panels
    for(var j = 0; j < heroEquipment.length; j++) {
      heroEquipment[j].classList.add('hidden');
    }
    var heroEquipmentId = this.getAttribute('data-hero-id');
    document.querySelector('#hero-equipment-' + heroEquipmentId).classList.remove('hidden');
  });
}

formModal.addEventListener('click', function(event) {
  // Close modal on click outside of form
  if(event.target === this) {
    formModal.classList.add('hidden');
  }
});

for(var i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', function() {
    // Close modal on close button click
    formModal.classList.add('hidden');
  });
}

formSubmit.addEventListener('click', function() {
  // Submit form and close modal
  alert('Form submitted successfully!');
  formModal.classList.add('hidden');
});