document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", function () {
      const body = this.nextElementSibling;

      if (body.style.display === "block") {
        body.style.display = "none";
      } else {
        document.querySelectorAll(".accordion-body").forEach(b => {
          b.style.display = "none";
        });
        body.style.display = "block";
      }
    });
  });
});
