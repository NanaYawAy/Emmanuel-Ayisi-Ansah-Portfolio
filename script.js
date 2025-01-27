// Function to show the popup
function showPopup(imageSrc, title, description, link) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupLink = document.getElementById('popup-link'); // Get the link element
    const linkContainer = popupLink.parentNode; // Get the parent of the link to show/hide it

    popupImage.src = imageSrc; // Set the image source
    popupTitle.innerText = title; // Set the title
    popupDescription.innerText = description; // Set the description text

    if (link) {
        popupLink.href = link; // Set the link href if provided
        popupLink.innerText = 'View Project'; // Set link text
        linkContainer.style.display = 'block'; // Show the link container
    } else {
        linkContainer.style.display = 'none'; // Hide the link container if no link
    }

    popup.style.display = 'flex'; // Show the popup
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Hide the popup
}
