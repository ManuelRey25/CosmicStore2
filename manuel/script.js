function toggleSkills() {
    var skills = document.getElementsByClassName("cover-letter");
    for (var i = 0; i < skills.length; i++) {
      if (skills[i].style.display === "none") {
        skills[i].style.display = "block";
      } else {
        skills[i].style.display = "none";
      }
    }
  }
  