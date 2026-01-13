document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("main section");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.getAttribute("href").substring(1);

      sections.forEach(section => {
        section.style.display = "none";
      });

      document.getElementById(target).style.display = "block";
    });
  });

 
  sections.forEach((section, index) => {
    section.style.display = index === 0 ? "block" : "none";
  });
});
