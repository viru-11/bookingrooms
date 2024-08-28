// Sample login function
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('home-page').style.display = 'block';
        loadCities();
    } else {
        document.getElementById('login-error').innerText = 'Invalid username or password';
    }
}

// Sample signup function
function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('signup-error').innerText = 'Passwords do not match';
        return;
    }

    if (localStorage.getItem(username)) {
        document.getElementById('signup-error').innerText = 'Username already exists';
        return;
    }

    localStorage.setItem(username, password);
    alert('Signup successful! Please login.');
    showLogin();
}

// Show signup page
function showSignup() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('signup-page').style.display = 'block';
}

// Show login page
function showLogin() {
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
}

// Sample data structure for cities and hotels in India
const data = {
    "Mumbai": [
        { name: "The Taj Mahal Palace", price: 20000, rating: 4.8 },
        { name: "Oberoi Mumbai", price: 18000, rating: 4.7 },
        { name: "Trident Bandra Kurla", price: 15000, rating: 4.6 }
    ],
    "Delhi": [
        { name: "The Leela Palace", price: 25000, rating: 4.9 },
        { name: "Taj Palace", price: 22000, rating: 4.8 },
        { name: "ITC Maurya", price: 20000, rating: 4.7 }
    ],
    "Bengaluru": [
        { name: "The Ritz-Carlton", price: 18000, rating: 4.8 },
        { name: "ITC Gardenia", price: 16000, rating: 4.7 },
        { name: "The Oberoi", price: 14000, rating: 4.6 }
    ],
    "Chennai": [
        { name: "Taj Coromandel", price: 15000, rating: 4.8 },
        { name: "ITC Grand Chola", price: 18000, rating: 4.7 },
        { name: "The Leela Palace", price: 16000, rating: 4.7 }
    ],
    "Kolkata": [
        { name: "The Oberoi Grand", price: 12000, rating: 4.7 },
        { name: "ITC Sonar", price: 14000, rating: 4.6 },
        { name: "Taj Bengal", price: 13000, rating: 4.6 }
    ],
    "Hyderabad": [
        { name: "Taj Falaknuma Palace", price: 24000, rating: 4.9 },
        { name: "Park Hyatt", price: 16000, rating: 4.7 },
        { name: "ITC Kohenur", price: 18000, rating: 4.7 }
    ],
    "Pune": [
        { name: "JW Marriott", price: 15000, rating: 4.7 },
        { name: "Conrad Pune", price: 14000, rating: 4.6 },
        { name: "Hyatt Regency", price: 13000, rating: 4.5 }
    ],
    "Jaipur": [
        { name: "The Oberoi Rajvilas", price: 25000, rating: 4.9 },
        { name: "Rambagh Palace", price: 22000, rating: 4.8 },
        { name: "Fairmont Jaipur", price: 18000, rating: 4.7 }
    ],
    "Ahmedabad": [
        { name: "Hyatt Regency", price: 13000, rating: 4.5 },
        { name: "Courtyard by Marriott", price: 12000, rating: 4.4 },
        { name: "Novotel Ahmedabad", price: 11000, rating: 4.3 }
    ],
    "Goa": [
        { name: "The Leela Goa", price: 20000, rating: 4.8 },
        { name: "Taj Exotica", price: 18000, rating: 4.7 },
        { name: "Park Hyatt Goa", price: 16000, rating: 4.6 }
    ]
};

// Function to load the list of cities
function loadCities() {
    const cityList = document.getElementById('city-list');
    cityList.innerHTML = '<h3>Select a City</h3>';
    for (let city in data) {
        cityList.innerHTML += `
            <div class="city" onclick="loadHotels('${city}')">
                ${city}
            </div>
        `;
    }
}

// Function to load hotels in the selected city
function loadHotels(city) {
    document.getElementById('city-list').style.display = 'none';
    document.getElementById('hotels-container').style.display = 'block';
    document.getElementById('selected-city').innerText = city;

    const hotelsList = document.getElementById('hotels-list');
    hotelsList.innerHTML = '';
    data[city].forEach(hotel => {
        hotelsList.innerHTML += `
            <div class="hotel">
                <h4>${hotel.name}</h4>
                <p>Price: ₹${hotel.price} per night</p>
                <p>Rating: ${hotel.rating} ★</p>
                <button class="book-button" onclick="bookHotel('${hotel.name}', ${hotel.price})">Book Now</button>
            </div>
        `;
    });
}

// Function to simulate booking a hotel
function bookHotel(hotelName, hotelPrice) {
    alert(`You have booked ${hotelName} for ₹${hotelPrice} per night.`);
}

// Function to go back to the city selection
function goBack() {
    document.getElementById('hotels-container').style.display = 'none';
    document.getElementById('city-list').style.display = 'block';
}

// Function to handle logout
function logout() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('login-error').innerText = '';
}
