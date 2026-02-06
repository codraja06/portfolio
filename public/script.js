     // --- Sidebar Logic ---
    function showSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.add('show');
    }

    function hideSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('show');
    }

    // --- Inspection Blocking Code ---
    function showPopup() {
      const popup = document.getElementById("popup");
      if (popup) {
        popup.classList.add("show");
        // Hide the popup after 2 seconds
        setTimeout(() => {
          popup.classList.remove("show");
        }, 2000);
      }
    }

    // Block keyboard shortcuts
    document.addEventListener("keydown", function (event) {
      const key = event.key;
      if (
        (event.keyCode >= 112 && event.keyCode <= 123) || // F-keys
        (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(key.toUpperCase())) || // DevTools
        (event.ctrlKey && key.toUpperCase() === 'U') // View Source
      ) {
        event.preventDefault(); 
        showPopup(); 
      }
    });

    // Block Ctrl+Scroll (Zoom) - Optional, but keeping based on user request
    document.addEventListener("wheel", function (event) {
      if (event.ctrlKey) {
        event.preventDefault();
        showPopup();
      }
    }, { passive: false });

    // Block Right Click
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      showPopup();
    });
