// Property data
const properties = [
    {
        id: 1,
        image: "./images/property1.jpg",
        title: "Property 1",
        location: "Location A",
        price: 500000
    },
    {
        id: 2,
        image: "./images/property2.jpg",
        title: "Property 2",
        location: "Location B",
        price: 800000
    },
    {
        id: 3,
        image: "./images/property3.jpg",
        title: "Property 3",
        location: "Location C",
        price: 350000
    },
    {
        id: 4,
        image: "./images/property4.jpg",
        title: "Property 4",
        location: "Location D",
        price: 600000
    },
    {
        id: 5,
        image: "./images/property5.jpg",
        title: "Property 5",
        location: "Location E",
        price: 450000
    },
    {
        id: 6,
        image: "./images/property6.jpg",
        title: "Property 6",
        location: "Location F",
        price: 700000
    },
    {
        id: 7,
        image: "./images/property7.jpg",
        title: "Property 7",
        location: "Location G",
        price: 550000
    },
    {
        id: 8,
        image: "./images/property8.jpg",
        title: "Property 8",
        location: "Location H",
        price: 400000
    },
    {
        id: 9,
        image: "./images/property9.jpg",
        title: "Property 9",
        location: "Location I",
        price: 750000
    },
    {
        id: 10,
        image: "./images/property10.jpg",
        title: "Property 10",
        location: "Location J",
        price: 550000
    },
    {
        id: 11,
        image: "./images/property11.jpg",
        title: "Property 11",
        location: "Location K",
        price: 650000
    },
    {
        id: 12,
        image: "./images/property12.jpg",
        title: "Property 12",
        location: "Location L",
        price: 900000
    }
];

// Filter property listings based on search input
function filterListings() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProperties = properties.filter(property => {
        const heading = property.title.toLowerCase();
        const location = property.location.toLowerCase();

        return heading.includes(searchInput) || location.includes(searchInput);
    });

    renderListings(filteredProperties);
}

// Sort property listings by price
function sortByPrice(order) {
    properties.sort((a, b) => {
        if (order === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    renderListings(properties);
}

// Render property listings
function renderListings(listings) {
    const propertyList = document.querySelector('.property-list');
    propertyList.innerHTML = '';

    listings.forEach(listing => {
        const propertyElement = document.createElement('div');
        propertyElement.classList.add('property');

        const imageElement = document.createElement('img');
        imageElement.src = listing.image;
        imageElement.alt = listing.title;
        propertyElement.appendChild(imageElement);

        const titleElement = document.createElement('h2');
        titleElement.textContent = listing.title;
        propertyElement.appendChild(titleElement);

        const locationElement = document.createElement('p');
        locationElement.textContent = "Location: " + listing.location;
        propertyElement.appendChild(locationElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = "Price: $" + listing.price.toLocaleString();
        propertyElement.appendChild(priceElement);

        const linkElement = document.createElement('a');
        linkElement.href = "listing.html?id=" + listing.id;
        linkElement.classList.add('btn', 'button');
        linkElement.textContent = "View Details";
        propertyElement.appendChild(linkElement);

        propertyList.appendChild(propertyElement);
    });
}

// Initial rendering
renderListings(properties);
