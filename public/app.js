const deleteForms = document.querySelectorAll(".delete-form");

deleteForms.forEach((form) => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    Swal.fire({
      title: "Delete Chat?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#128C7E",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        form.submit();
      }
    });
  });
});
