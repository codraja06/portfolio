// Function to show the sidebar
    function showSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.add('show');
    }

    // Function to hide the sidebar
    function hideSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('show');}

      function showSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.add('show');
    }

    function hideSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('show');
    }


    // --- Inspection Blocking Code ---

    // Function to show the "Action Disabled" popup
    function showPopup() {
      const popup = document.getElementById("popup");
      if (popup) {
        popup.classList.add("show");

        // Hide the popup after 3 seconds
        setTimeout(() => {
          popup.classList.remove("show");
        }, 1000);
      }
    }

    // Listener for keyboard shortcuts
    document.addEventListener("keydown", function (event) {
      const key = event.key;

      if (
        (event.keyCode >= 112 && event.keyCode <= 123) || // F1-F12
        (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(key.toUpperCase())) || // DevTools (Ctrl+Shift+I/J/C)
        (event.ctrlKey && key.toUpperCase() === 'U') // View Source (Ctrl+U)
      ) {
        event.preventDefault(); // Prevent the default action (like opening dev tools)
        showPopup(); // Show the warning
      }
    });

    // Listener for mouse wheel zoom
    document.addEventListener("wheel", function (event) {
      if (event.ctrlKey) {
        event.preventDefault();
        showPopup();
      }
    }, { passive: false });

    // Listener for right-click (context menu)
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      showPopup();
    });