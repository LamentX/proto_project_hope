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



// Hero object
const hero = {
    name: "Hero Name",
    class: "Hero Class",
    level: 1,
    stats: {
        strength: 10,
        dexterity: 8,
        intelligence: 6,
        health: 100
    },
    equipment: {
        weapon: "",
        armor: "",
        boots: "",
        gloves: "",
        helmet: "",
        shield: ""
    }
}

// Artifact object
const artifact = {
    name: "Artifact Name",
    description: "Artifact Description",
    level: 1,
    type: "Artifact Type",
    bonus: {
        strength: 2,
        dexterity: 2,
        intelligence: 2,
        health: 20
    }
}

// Define hero objects
const hero1 = {
    name: "Hero Name 1",
    class: "Hero Class",
    level: 1,
    stats: {
        strength: 10,
        dexterity: 8,
        intelligence: 6,
        health: 100
    },
    equipment: {
        weapon: "",
        armor: "",
        boots: "",
        gloves: "",
        helmet: "",
        shield: ""
    }
};

const hero2 = {
    name: "Hero Name 2",
    class: "Hero Class",
    level: 1,
    stats: {
        strength: 8,
        dexterity: 10,
        intelligence: 6,
        health: 100
    },
    equipment: {
        weapon: "",
        armor: "",
        boots: "",
        gloves: "",
        helmet: "",
        shield: ""
    }
};

// Display hero objects
function displayHeroes() {
    // Select hero-list section and add hero objects
    const heroList = $(".hero-list");

    // Add hero1 object
    const hero1Container = $("<div>").addClass("hero");
    $("<h3>").text(hero1.name).appendTo(hero1Container);
    $("<p>").text("Class: " + hero1.class).appendTo(hero1Container);
    $("<p>").text("Level: " + hero1.level).appendTo(hero1Container);
    $("<p>").text("Strength: " + hero1.stats.strength).appendTo(hero1Container);
    $("<p>").text("Dexterity: " + hero1.stats.dexterity).appendTo(hero1Container);
    $("<p>").text("Intelligence: " + hero1.stats.intelligence).appendTo(hero1Container);
    $("<p>").text("Health: " + hero1.stats.health).appendTo(hero1Container);
    $("<button>").addClass("hire-hero").text("Hire Hero").appendTo(hero1Container);
    hero1Container.on("click", function() {
        selectHero(hero1);
    });

    // Add hero2 object
    const hero2Container = $("<div>").addClass("hero");
    $("<h3>").text(hero2.name).appendTo(hero2Container);
    $("<p>").text("Class: " + hero2.class).appendTo(hero2Container);
    $("<p>").text("Level: " + hero2.level).appendTo(hero2Container);
    $("<p>").text("Strength: " + hero2.stats.strength).appendTo(hero2Container);
    $("<p>").text("Dexterity: " + hero2.stats.dexterity).appendTo(hero2Container);
    $("<p>").text("Intelligence: " + hero2.stats.intelligence).appendTo(hero2Container);
    $("<p>").text("Health: " + hero2.stats.health).appendTo(hero2Container);
    $("<button>").addClass("hire-hero").text("Hire Hero").appendTo(hero2Container);
    hero2Container.on("click", function() {
        selectHero(hero2);
    });

    // Add hero objects to hero-list section
    heroList.append(hero1Container);
    heroList.append(hero2Container);
}

// Select a hero
function selectHero(hero) {
    // Update selected hero
    selectedHero = hero;

    // Update selected-hero section
    $(".selected-hero h3").text(hero.name);
    $(".selected-hero .hero-class").text(hero.class);
    $(".selected-hero .hero-level").text(hero.level);
    $(".selected-hero .hero-strength").text(hero.stats.strength);
    $(".selected-hero .hero-dexterity").text(hero.stats.dexterity);
    $(".selected-hero .hero-intelligence").text(hero.stats.intelligence);
    $(".selected-hero .hero-health").text(hero.stats.health);
    $(".selected-hero .sell-hero").show();
}

// Sell a hero
function sellHero(getGold) {
    // Get gold for selling hero
    getGold(50);

    // Reset selected hero and selected-hero section
    selectedHero = null;
    $(".selected-hero h3").text("");
    $(".selected-hero .hero-class").text("");
    $(".selected-hero .hero-level").text("");
    $(".selected-hero .hero-strength").text("");
    $(".selected-hero .hero-dexterity").text("");
    $(".selected-hero .hero-intelligence").text("");
    $(".selected-hero .hero-health").text("");
    $(".selected-hero .sell-hero").hide();
}

// Get gold
function getGold(amount) {
    // TODO: Implement gold functionality
}
 
// Call the displayHeroes function on page load
$(document).ready(function() {
    displayHeroes();
});