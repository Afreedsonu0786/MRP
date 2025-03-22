// Get the sign-in button and form elements
const signInBtn = document.getElementById("signInBtn");
const authFormContainer = document.getElementById("authFormContainer");
const signInForm = document.getElementById("signInForm");
const closeSignInForm = document.getElementById("closeSignInForm");

// Get create account elements
const createAccountBtn = document.getElementById("createAccountBtn");
const createAccountForm = document.getElementById("createAccountForm");
const closeCreateAccountForm = document.getElementById(
  "closeCreateAccountForm"
);

// Event listener for the sign-in button
signInBtn.addEventListener("click", function () {
  authFormContainer.style.display = "flex";
  signInForm.style.display = "block";
  createAccountForm.style.display = "none"; // Hide create account form if it's open
});

// Event listener for the close sign-in form button
closeSignInForm.addEventListener("click", function () {
  authFormContainer.style.display = "none";
  signInForm.style.display = "none";
});

// Event listener for the create account button
createAccountBtn.addEventListener("click", function () {
  authFormContainer.style.display = "flex";
  createAccountForm.style.display = "block";
  signInForm.style.display = "none"; // Hide sign in form if it's open
});

// Event listener for the close create account form button
closeCreateAccountForm.addEventListener("click", function () {
  authFormContainer.style.display = "none";
  createAccountForm.style.display = "none";
});

// Hospital search form submission
document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the selected cost range
    const maxCost = document.getElementById("cost-range").value;

    // Simulate hospital search results
    const treatment = document.getElementById("treatment").value;
    const location = document.getElementById("location").value;

    const hospitals = [
      {
        name: "City Hospital",
        rating: 4.5,
        distance: "5 miles",
        location: "California, CA",
        specialty: "Cardiology",
        cost: 1500,
      },
      {
        name: "City Hospital",
        rating: 4.5,
        distance: "5 miles",
        location: "California, CA",
        specialty: "Orthopedics",
        cost: 1700,
      },
      {
        name: "Green Valley Medical Center",
        rating: 4.7,
        distance: "10 miles",
        location: "California, CA",
        specialty: "Orthopedics",
        cost: 1800,
      },
      {
        name: "Green Valley Medical Center",
        rating: 4.7,
        distance: "10 miles",
        location: "California, CA",
        specialty: "Cardiology",
        cost: 2500,
      },
      {
        name: "Saint Mary's Hospital",
        rating: 4.3,
        distance: "8 miles",
        location: "California, CA",
        specialty: "Neurology",
        cost: 2000,
      },
      {
        name: "Sunrise Health",
        rating: 4.8,
        distance: "12 miles",
        location: "California, CA",
        specialty: "Neurology",
        cost: 1500,
      },
      {
        name: "Sunrise Health",
        rating: 4.8,
        distance: "12 miles",
        location: "California, CA",
        specialty: "Dermatology",
        cost: 1200,
      },
      {
        name: "Hope Hospital",
        rating: 4.2,
        distance: "15 miles",
        location: "California, CA",
        specialty: "Pediatrics",
        cost: 2200,
      },
    ];

    const filteredHospitals = hospitals.filter(
      (hospital) => hospital.cost <= maxCost
    );

    displayHospitals(filteredHospitals);
  });

function displayHospitals(hospitals) {
  const resultsSection = document.getElementById("hospital-list");
  resultsSection.innerHTML = "";

  if (hospitals.length === 0) {
    resultsSection.innerHTML =
      "<p>No hospitals found within your selected cost range.</p>";
    return;
  }

  hospitals.forEach((hospital) => {
    const hospitalCard = document.createElement("div");
    hospitalCard.classList.add("hospital-card");
    hospitalCard.innerHTML = `
      <h3>${hospital.name}</h3>
      <p><strong>Rating:</strong> ${hospital.rating}</p>
      <p><strong>Distance:</strong> ${hospital.distance}</p>
      <p><strong>Specialty:</strong> ${hospital.specialty}</p>
      <p><strong>Cost:</strong> $${hospital.cost}</p>
      <div class="compare-buttons">
        <button>Compare</button>
        <button>View Details</button>
      </div>
    `;
    resultsSection.appendChild(hospitalCard);
  });
}

// Update the cost display text as the user adjusts the slider
document.getElementById("cost-range").addEventListener("input", function () {
  const costValue = this.value;
  document.getElementById("cost-value").textContent = `$${costValue}`;
});
