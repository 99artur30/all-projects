let arrCars = [
  {
    picture: "https://di-uploads-pod39.dealerinspire.com/kingsford/uploads/2023/11/2024-Ford-F-150-Angled-Left.jpg",
    name: "Truck",
    horsepower: 130,
    weightInLbs: 1640,
    acceleration: 16,
    year: "2015",
    inputValue: 1
  },
  {
    picture: "https://cdn.frd-dws.de/assets/img/content/new_cars/tourneo_custom_23/TourneoCustom_718x404_Galerie01.jpg",
    name: "Van",
    horsepower: 165,
    weightInLbs: 1800,
    acceleration: 11.5,
    year: "2024",
    inputValue: 2
  },
  {
    picture: "https://www.gpas-cache.ford.com/guid/6af680e4-f7db-3b6d-b080-d862e82c2442.png",
    name: "e-car",
    horsepower: 150,
    weightInLbs: 1600,
    acceleration: 9,
    year: "2023",
    inputValue: "e-car"
  },
  {
    picture: "https://ford-schreiner.de/images/vehicles/ford/big/edge.png",
    name: "SUV",
    horsepower: 150,
    weightInLbs: 1520,
    acceleration: 12,
    year: "2020",
    inputValue: "suv"
  },
  {
    picture: "https://www.kuttendreier.de/fileadmin/shared/Ford/fiesta/webp/modell.webp",
    name: "small Car",
    horsepower: 140,
    weightInLbs: 1650,
    acceleration: 10,
    year: "2022"
  }
];

let htmlCode = '';
arrCars.forEach(car => {
  htmlCode += `
    <div class="col me-1 mt-1">  
      <div class="card" style="">
        <img src="${car.picture}" class="card-img-top" alt="${car.name}" />
      </div>
      <div class="card-body border border-1 rounded border-top-0">
        <h3 class="card-title">${car.name}</h3>
        <p class="card-text">Horsepower: ${car.horsepower} PS</p>
        <p class="card-text">Weight: ${car.weightInLbs} Kg</p>
        <p class="card-text">Acceleration: ${car.acceleration} s (0-100 km/h)</p>
        <p class="card-text">Year: ${car.year}</p>
      </div>
    </div>  
  `;
});

const singleCars = document.querySelector(".singleCar");
singleCars.innerHTML = htmlCode;
var ranged = new Datepicker('#ranged', {
  inline: false,
  ranged: true,
  time: true
});

// document.querySelectorAll("input").style.border-color = "fc0a0a";

function isValidEmail(email) {
	let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regexEmail.test(email)) {
		alert("email shouldve format of test@test.de");
		return false;
	};
	return true;
};

// Form handling
document.getElementById("submitButton").addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    // see later why true
    let isValid = true;
    let formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value,
        zip: document.getElementById('zip').value,
        date: document.getElementById('ranged').value,
        car: document.getElementById('carSelect').value
    }; 

    function isValidZip(zip) {
      // Modify the regex according to your country's ZIP format
      return /^\d{5}(-\d{4})?$/.test(zip);
    }

    // Validate all fields
    for (let [key, value] of Object.entries(formData)) {
        if (value === "") {
            alert(`${key} needs a value`);
            isValid = false;
            return; // Stop checking after first empty field
        }

        if (key === 'email' && !isValidEmail(value)) {
          alert('Please enter a valid email address');
          isValid = false;
          return;
        };

        if (key === 'zip' && !isValidZip(value)) {
          alert('Please enter a valid ZIP code');
          isValid = false;
          return;
        };
    }

    // If validation passes, submit to server
    if (isValid) {
        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();

            if (response.ok) {
                alert('Booking successful!');
                // Clear form
                document.getElementById("formRent").reset();
            } else {
                alert('Error: ' + result.message);
            }
            
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form');
        }
    }
});

async function login() {
	let loginData = {
		email: document.getElementById("loginEmail").value,
		password: document.getElementById("loginPassword").value
	};

	try {
		const response = await fetch('/submit-login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},			
      		body: JSON.stringify(loginData)
		});
		const result = await response.json();

		if (response.ok) {
			// redirect to loginarea
			window.location = "/loginarea.html"
		} else {
			alert('Error: ' + result.message);
		}
		
	} catch (error) {
		console.error('Error:', error);
		alert('Error login');
	}
};

document.getElementById("loginSubmit").addEventListener("click", login);

function validatePassword() {
	const getPassword = document.getElementById("loginPassword").value;
	const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

	if (!regexPassword.test(getPassword)) {
    	alert("Password should have a lenght > 6 and a symbol, big letter, number");
		return false;
		// let warningTag = document.createElement("label");
		// warningTag.classList.add('invalid-feedback');
		// warningTag.textContent = "Password lenght > 6 and should have a symbol, big letter, number";
		// document.getElementById("loginPassword").after(warningTag);
	} 
	return true;
};

async function newWorker() {
	let formData = {
		email: document.getElementById("loginEmail").value,
		password: document.getElementById("loginPassword").value
	};
	// if password and email not valid not sending request
	if (!validatePassword() && !isValidEmail(formData.email)) {
		return;
	};

	try {
		const response = await fetch('/submit-worker', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});
		const result = await response.json();

		if (response.ok) {
			// returning undefined should be worker exists
			alert(result.message);
		} else {
			alert('Error: ' + result.message);
		}
	} catch (error) {
		console.error('Error:', error);
		alert('Error insert of new Worker');
	};

};
document.getElementById("newWorkerButton").addEventListener("click", newWorker);

