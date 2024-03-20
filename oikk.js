// Function to handle toggling sub-folders
function toggleSubFolders(folder) {
  const subFolderList = folder.querySelector(".sub-folder-list");
  subFolderList.style.display = (subFolderList.style.display === "none") ? "block" : "none";
}

// Function to add a new item to a folder
function addNewItem(folderName) {
  const folder = document.querySelector(`.folder-name:contains(${folderName})`);
  const subFolderList = folder.nextElementSibling;
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  subFolderList.appendChild(newItem);
}

// Function to handle checkbox clicks in the brand column
function handleBrandCheckboxClick() {
  const brandCheckboxes = document.querySelectorAll('.brandCheckbox');
  const brandHeadCheckbox = document.querySelector('#brandHeadCheckbox');
  const selectedButton = document.querySelector('.footer-button:nth-of-type(1)');
  let selectedCount = 0;

  brandHeadCheckbox.addEventListener('change', () => {
    const isChecked = brandHeadCheckbox.checked;
    brandCheckboxes.forEach(checkbox => {
      checkbox.checked = isChecked;
    });
    updateSelectedInfo();
  });

  brandCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      // If a brand checkbox is checked, check the brand head checkbox
      if (checkbox.checked) {
        brandHeadCheckbox.checked = true;
      } else {
        // If all brand checkboxes are unchecked, uncheck the brand head checkbox
        const allUnchecked = Array.from(brandCheckboxes).every(cb => !cb.checked);
        if (allUnchecked) {
          brandHeadCheckbox.checked = false;
        }
      }
      updateSelectedInfo();
    });
  });

  // Function to update selected count and button text
  function updateSelectedInfo() {
    selectedCount = document.querySelectorAll('.brandCheckbox:checked').length;
    selectedButton.textContent = `Selected (${selectedCount})`;
  }
}

// Function to initialize the script
function init() {
  handleBrandCheckboxClick();
}

// Call the init function when the document is loaded
document.addEventListener('DOMContentLoaded', init);
