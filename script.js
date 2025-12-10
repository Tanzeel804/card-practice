// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  // ===== NAVBAR SCROLL EFFECT =====
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  // ===== PROJECT FILTERING =====
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      // Filter projects
      projectCards.forEach((card) => {
        const cardCategory = card.parentElement.getAttribute("data-category");

        if (filterValue === "all" || filterValue === cardCategory) {
          card.parentElement.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 100);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.parentElement.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // ===== ANIMATE SKILL BARS ON SCROLL =====
  function animateSkillBars() {
    const skillBars = document.querySelectorAll(".progress-bar");

    skillBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";

      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    });
  }

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBars();
          skillsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  // ===== ANIMATE PROJECT CARDS ON SCROLL =====
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".project-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    projectObserver.observe(card);
  });

  // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") return;

      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });

  // ===== THEME TOGGLE =====
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");

      const icon = this.querySelector("i");
      if (document.body.classList.contains("dark-theme")) {
        icon.className = "ri-sun-line";
        localStorage.setItem("theme", "dark");
      } else {
        icon.className = "ri-moon-line";
        localStorage.setItem("theme", "light");
      }
    });

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      themeToggle.querySelector("i").className = "ri-sun-line";
    }
  }

  // ===== PROJECT CARD CLICK EFFECT =====
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", function (e) {
      // Only trigger if not clicking on a button/link
      if (!e.target.closest("a") && !e.target.closest("button")) {
        const viewBtn = this.querySelector(".btn-primary");
        if (viewBtn) {
          viewBtn.click();
        }
      }
    });
  });

  // ===== LOADING ANIMATION =====
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });
});

// ===== ADD DARK THEME STYLES DYNAMICALLY =====
const darkThemeStyles = `
    .dark-theme {
        background-color: #121212;
        color: #e0e0e0;
    }
    
    .dark-theme .project-card,
    .dark-theme .skill-category,
    .dark-theme .contact-info {
        background-color: #1e1e1e;
        color: #e0e0e0;
        border-color: #333;
    }
    
    .dark-theme .project-card-header {
        background: #2d2d2d;
        border-color: #333;
    }
    
    .dark-theme .project-card-footer {
        background: #252525;
        border-color: #333;
    }
    
    .dark-theme .tech-tag {
        background: #333;
        color: #e0e0e0;
    }
    
    .dark-theme .filter-btn {
        background: #2d2d2d;
        border-color: #444;
        color: #e0e0e0;
    }
    
    .dark-theme .filter-btn.active {
        background: var(--primary-color);
    }
    
    .dark-theme .coming-soon-placeholder {
        background: #2d2d2d;
        color: #666;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = darkThemeStyles;
document.head.appendChild(styleSheet);
