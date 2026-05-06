//Main nav toogle
$(document).ready(function () {
    $("#menu-toggle").click(function () {
        $("#main-nav").toggleClass("active");

        // Accessibility: update aria-expanded
        const expanded = $(this).attr("aria-expanded") === "true";
        $(this).attr("aria-expanded", !expanded);
    });
});

//Dark Mode toggle
$(document).ready(function () {
    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        $("body").addClass("dark-mode");
        $("#theme-toggle").prop("checked", true);
    }

    $("#theme-toggle").change(function () {
        $("body").toggleClass("dark-mode");

        if ($(this).is(":checked")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});


const modules_en = {
    "mod-profEth": {
        title: "Professional Ethics",
        desc: "Foundations of ethical practice in veterinary medicine."
    },
    "mod-canFelEth": {
        title: "Canine and Feline Ethology",
        desc: "Behavioral principles of dogs and cats."
    },
    "mod-VetTerm": {
        title: "Veterinary Terminology",
        desc: "Essential terms and vocabulary for veterinary practice."
    },
    "mod-oie": {
        title: "OIE General Overview",
        desc: "Introduction to international veterinary standards and the OIE."
    },
    "mod-anat1": {
        title: "Anatomy & Physiology I",
        desc: "Basic structures and functions of animal bodies."
    },
    "mod-anat2": {
        title: "Anatomy & Physiology II",
        desc: "Intermediate study of organ systems and processes."
    },
    "mod-anat3": {
        title: "Anatomy & Physiology III",
        desc: "Advanced exploration of anatomy and physiology topics."
    },
    "mod-anat4": {
        title: "Anatomy & Physiology IV",
        desc: "Capstone module on integrated body systems."
    },
    "mod-pharmIntro": {
        title: "Intro to Pharmacy",
        desc: "Basics of veterinary pharmacology and drug handling."
    },
    "mod-labIntro": {
        title: "Intro to Laboratory Analysis",
        desc: "Fundamentals of lab tests and sample evaluation."
    },
    "mod-surgEquip": {
        title: "Surgical Equipment",
        desc: "Overview of tools and instruments used in veterinary surgery."
    },
    "mod-vetNut": {
        title: "Veterinary Nutrition",
        desc: "Principles of diet and feeding for animal health and wellbeing."
    },
    "mod-patPrep": {
        title: "Patient Preparation",
        desc: "Steps to prepare animals for clinical procedures and surgery."
    },
    "mod-sampColl": {
        title: "Sample Collection",
        desc: "Techniques for collecting diagnostic samples safely and effectively."
    },
    "mod-hemat": {
        title: "Hematology",
        desc: "Study of blood and related diagnostic methods in veterinary medicine."
    },
    "mod-chem": {
        title: "Chemistry",
        desc: "Biochemical analysis relevant to veterinary diagnostics and practice."
    },
    "mod-pharm1": {
        title: "Veterinary Pharmacology I",
        desc: "Introduction to drug classes, mechanisms, and safe administration."
    },
    "mod-paras": {
        title: "Parasitology",
        desc: "Identification and management of common parasites in animals."
    },
    "mod-infDis": {
        title: "Infectious Diseases",
        desc: "Overview of contagious conditions and their veterinary management."
    },
    "mod-dermIntro": {
        title: "Dermatology Intro",
        desc: "Basics of skin conditions, diagnosis, and treatments."
    },
    "mod-vaccProg": {
        title: "Vaccination Programs",
        desc: "Principles of immunization and preventive veterinary care."
    },
    "mod-fluidTher": {
        title: "Fluid Therapy",
        desc: "Managing hydration and electrolyte balance in veterinary patients."
    },
    "mod-reprod": {
        title: "Reproduction",
        desc: "Fundamentals of animal reproductive systems and veterinary care."
    },
    "mod-anest1": {
        title: "Anesthesia I",
        desc: "Introduction to anesthesia principles, monitoring, and safety."
    },
    "mod-anest2": {
        title: "Anesthesia II",
        desc: "Advanced anesthesia techniques and protocols for veterinary practice."
    },
    "mod-firstAid": {
        title: "First Aid",
        desc: "Emergency response skills for veterinary settings."
    },
    "mod-ultra": {
        title: "Ultrasound",
        desc: "Basics of imaging and diagnostic ultrasound in veterinary medicine."
    },
    "mod-cardio": {
        title: "Practical Cardiology",
        desc: "Introduction to heart health and diagnostic cardiology techniques."
    },
    "mod-admin": {
        title: "Veterinary Administration",
        desc: "Managing clinics, records, and veterinary operations effectively."
    },
    "mod-clientCare": {
        title: "Client Care",
        desc: "Communication and service skills for veterinary professionals."
    }
};
const modules_es = {
    "mod-profEth": {
        title: "Ética profesional",
        desc: "Fundamentos de la práctica ética en medicina veterinaria."
    },
    "mod-canFelEth": {
        title: "Etología canina y felina",
        desc: "Principios de comportamiento de perros y gatos."
    },
    "mod-VetTerm": {
        title: "Terminología veterinaria",
        desc: "Términos y vocabulario esenciales para la práctica veterinaria."
    },
    "mod-oie": {
        title: "Panorama general de la OIE",
        desc: "Introducción a las normas veterinarias internacionales y la OIE."
    },
    "mod-anat1": {
        title: "Anatomía y fisiología I",
        desc: "Estructuras y funciones básicas de los cuerpos animales."
    },
    "mod-anat2": {
        title: "Anatomía y fisiología II",
        desc: "Estudio intermedio de sistemas y procesos orgánicos."
    },
    "mod-anat3": {
        title: "Anatomía y fisiología III",
        desc: "Exploración avanzada de temas de anatomía y fisiología."
    },
    "mod-anat4": {
        title: "Anatomía y fisiología IV",
        desc: "Módulo final sobre sistemas corporales integrados."
    },
    "mod-pharmIntro": {
        title: "Introducción a la farmacia",
        desc: "Conceptos básicos de farmacología veterinaria y manejo de fármacos."
    },
    "mod-labIntro": {
        title: "Introducción al análisis de laboratorio",
        desc: "Fundamentos de pruebas de laboratorio y evaluación de muestras."
    },
    "mod-surgEquip": {
        title: "Equipos quirúrgicos",
        desc: "Descripción de herramientas e instrumentos usados en cirugía veterinaria."
    },
    "mod-vetNut": {
        title: "Nutrición veterinaria",
        desc: "Principios de dieta y alimentación para la salud y el bienestar animal."
    },
    "mod-patPrep": {
        title: "Preparación del paciente",
        desc: "Pasos para preparar animales para procedimientos clínicos y cirugía."
    },
    "mod-sampColl": {
        title: "Recolección de muestras",
        desc: "Técnicas para recolectar muestras diagnósticas de manera segura y eficaz."
    },
    "mod-hemat": {
        title: "Hematología",
        desc: "Estudio de la sangre y métodos diagnósticos relacionados en medicina veterinaria."
    },
    "mod-chem": {
        title: "Química",
        desc: "Análisis bioquímico relevante para diagnósticos y práctica veterinaria."
    },
    "mod-pharm1": {
        title: "Farmacología veterinaria I",
        desc: "Introducción a clases de fármacos, mecanismos y administración segura."
    },
    "mod-paras": {
        title: "Parasitología",
        desc: "Identificación y manejo de parásitos comunes en animales."
    },
    "mod-infDis": {
        title: "Enfermedades infecciosas",
        desc: "Descripción de condiciones contagiosas y su manejo veterinario."
    },
    "mod-dermIntro": {
        title: "Introducción a la dermatología",
        desc: "Conceptos básicos de afecciones cutáneas, diagnóstico y tratamientos."
    },
    "mod-vaccProg": {
        title: "Programas de vacunación",
        desc: "Principios de inmunización y cuidado veterinario preventivo."
    },
    "mod-fluidTher": {
        title: "Terapia de fluidos",
        desc: "Manejo de la hidratación y el equilibrio electrolítico en pacientes veterinarios."
    },
    "mod-reprod": {
        title: "Reproducción",
        desc: "Fundamentos de sistemas reproductivos animales y cuidado veterinario."
    },
    "mod-anest1": {
        title: "Anestesia I",
        desc: "Introducción a principios de anestesia, monitoreo y seguridad."
    },
    "mod-anest2": {
        title: "Anestesia II",
        desc: "Técnicas avanzadas de anestesia y protocolos para la práctica veterinaria."
    },
    "mod-firstAid": {
        title: "Primeros auxilios",
        desc: "Habilidades de respuesta en emergencias para entornos veterinarios."
    },
    "mod-ultra": {
        title: "Ultrasonido",
        desc: "Conceptos básicos de imagen y ultrasonido diagnóstico en medicina veterinaria."
    },
    "mod-cardio": {
        title: "Cardiología práctica",
        desc: "Introducción a la salud cardíaca y técnicas de cardiología diagnóstica."
    },
    "mod-admin": {
        title: "Administración veterinaria",
        desc: "Gestión eficaz de clínicas, registros y operaciones veterinarias."
    },
    "mod-clientCare": {
        title: "Atención al cliente",
        desc: "Habilidades de comunicación y servicio para profesionales veterinarios."
    }
};


const translations = {
    en: {
        heroTitle: "Take your first steps in veterinary care",
        heroText: "Basic concepts for future vet students and curious pet owners.",
        startLearning: "Start Learning",
        aboutUs: "About us",
        help: "Help",
        login: "Login",
        signup: "Sign up",
        contact: "Questions or feedback? Send us a message.",
        reviewsTitle: "What loyal learners have to say",
        seeMore: "See more",
        modulesTitle: "Browse Our Modules by Category",
        // Module cards (titles + descriptions)
        modules: modules_en,
        quizTitle: "Test your knowledge",
        quizPrev: "⬅ Prev",
        quizNext: "Next ➡",
        quizScore: "Your Score:",
        quizRetry: "Retry Quiz 🔄",
        quizQuestions: [
            {q: "Which organ pumps blood through the body?", options: ["Lungs","Liver","Heart","Kidneys"]},
            {q: "Which animal is a carnivore?", options: ["Cow","Lion","Horse","Goat"]},
            {q: "Which nutrient is most important for building muscle?", options: ["Protein","Carbohydrates","Fats","Vitamins"]},
            {q: "Which parasite is commonly found in dogs?", options: ["Tapeworm","Fleas","Ticks","All of the above"]},
            {q: "Which diagnostic tool uses sound waves?", options: ["X-ray","MRI","Ultrasound","CT Scan"]},
            {q: "Which organ filters toxins from the blood?", options: ["Heart","Liver","Kidneys","Lungs"]},
            {q: "What is the normal body temperature of a dog?", options: ["38–39°C","36–37°C","40–41°C","34–35°C"]}
        ],
        footerLinks: {
            startLearning: "Start Learning",
            reviews: "Reviews",
            modules: "Modules",
            quickTest: "Quick Test"
        },
        copyright: "©2025 VetFirstSteps. All rights reserved"
    },
    es: {
        heroTitle: "Da tus primeros pasos en el cuidado veterinario",
        heroText: "Conceptos básicos para futuros estudiantes de veterinaria y dueños curiosos de mascotas.",
        startLearning: "Comienza a aprender",
        aboutUs: "Sobre nosotros",
        help: "Ayuda",
        login: "Iniciar sesión",
        signup: "Registrarse",
        contact: "¿Preguntas o comentarios? Envíanos un mensaje.",
        reviewsTitle: "Lo que dicen nuestros estudiantes fieles",
        seeMore: "Ver más",
        modulesTitle: "Explora nuestros módulos por categoría",
        // Module cards (titles + descriptions)
        modules: modules_es,
        quizTitle: "Pon a prueba tus conocimientos",
        quizPrev: "⬅ Anterior",
        quizNext: "Siguiente ➡",
        quizScore: "Tu puntaje:",
        quizRetry: "Reintentar Quiz 🔄",
        quizQuestions: [
            {q: "¿Qué órgano bombea sangre por el cuerpo?", options: ["Pulmones","Hígado","Corazón","Riñones"]},
            {q: "¿Qué animal es carnívoro?", options: ["Vaca","León","Caballo","Cabra"]},
            {q: "¿Qué nutriente es más importante para desarrollar músculo?", options: ["Proteína","Carbohidratos","Grasas","Vitaminas"]},
            {q: "¿Qué parásito se encuentra comúnmente en perros?", options: ["Tenia","Pulgas","Garrapatas","Todos los anteriores"]},
            {q: "¿Qué herramienta diagnóstica usa ondas sonoras?", options: ["Rayos X","Resonancia magnética","Ultrasonido","Tomografía"]},
            {q: "¿Qué órgano filtra toxinas de la sangre?", options: ["Corazón","Hígado","Riñones","Pulmones"]},
            {q: "¿Cuál es la temperatura corporal normal de un perro?", options: ["38–39°C","36–37°C","40–41°C","34–35°C"]}
        ],
        footerLinks: {
            startLearning: "Comienza a aprender",
            reviews: "Reseñas",
            modules: "Módulos",
            quickTest: "Prueba rápida"
        },
        copyright: "©2025 VetFirstSteps. Todos los derechos reservados"
    }
};


$(document).ready(function () {
    let currentLang = localStorage.getItem("lang") || "en";
    applyTranslations(currentLang);
    $("#lang-toggle input").prop("checked", currentLang === "es");

    $("#lang-toggle input").change(function () {
        currentLang = $(this).is(":checked") ? "es" : "en";
        localStorage.setItem("lang", currentLang);
        applyTranslations(currentLang);
    });

    function applyTranslations(lang) {
      // Hero
      $("#section-content h1").text(translations[lang].heroTitle);
      $("#section-content p").text(translations[lang].heroText);
      $("#section-content a").text(translations[lang].startLearning);

      // Nav
      $("#main-nav a[href='pages/AboutUs.html']").text(translations[lang].aboutUs);
      $("#main-nav a[href='pages/Help.html']").text(translations[lang].help);
      $("#actions a[href='pages/Login.html']").text(translations[lang].login);
      $("#actions a[href='pages/SignUp.html']").text(translations[lang].signup);

      // Reviews
      $("#review-section h2").text(translations[lang].reviewsTitle);
      $("#review-section a").text(translations[lang].seeMore);

      // Modules title
      $(".modules h2").text(translations[lang].modulesTitle);

      // Module cards (loop through translations.modules)
      for (const [id, data] of Object.entries(translations[lang].modules)) {
          $(`#${id} h3`).text(data.title);
          $(`#${id} p`).text(data.desc);
      }

      // Quiz
      $("#quiz h2").text(translations[lang].quizTitle);
      $("#prev").text(translations[lang].quizPrev);
      $("#next").text(translations[lang].quizNext);
      $("#quiz-score h3").text(translations[lang].quizScore);
      $("#retry").text(translations[lang].quizRetry);

      // Quiz questions + options
      $(".quiz-slide").each(function (index) {
          const qData = translations[lang].quizQuestions[index];
          $(this).find("h3").text(qData.q);
          $(this).find("button.option").each(function (optIndex) {
              $(this).text(qData.options[optIndex]);
          });
      });

      // Footer
      $(".quick-links a[href='#section-content']").text(translations[lang].footerLinks.startLearning);
      $(".quick-links a[href='#review-section']").text(translations[lang].footerLinks.reviews);
      $(".quick-links a[href='#modules-grid']").text(translations[lang].footerLinks.modules);
      $(".quick-links a[href='#quiz']").text(translations[lang].footerLinks.quickTest);

      $(".form h3").text(translations[lang].contact);
      $(".copyright").text(translations[lang].copyright);

      // Accessibility
      $("html").attr("lang", lang);
  }

});



$(document).ready(function () {
    let savedFilter = localStorage.getItem("moduleFilter") || "none";

    applyFilter(savedFilter);

    $(".filter-btn").click(function () {
        const filter = $(this).data("filter");

        localStorage.setItem("moduleFilter", filter);

        applyFilter(filter);
    });

    function applyFilter(filter) {
        $(".filter-btn").removeClass("active");
        $(`.filter-btn[data-filter='${filter}']`).addClass("active");

        if (filter === "all") {
            $(".module-card").show();
        } else {
            $(".module-card").hide();
            $(`.module-card[data-category='${filter}']`).show();
        }
    }
});



//Quiz slide
$(document).ready(function () {
  let currentSlide = 0;
  let score = 0;
  const slides = $(".quiz-slide");
  const track = $(".quiz-track");

  function updateSlide() {
    const offset = -currentSlide * 100;
    track.css("transform", `translateX(${offset}%)`);
  }

  // Option click
  $(".option").click(function () {
    const parentSlide = $(this).closest(".quiz-slide");
    const correctAnswer = parentSlide.data("answer");
    const chosen = $(this).data("index");

    if (chosen == correctAnswer) {
      score++;
    }

    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlide();
    } else {
      $(".quiz-container, .quiz-nav").hide();
      $("#quiz-score").show();
      $("#score-text").text(`${score} / ${slides.length}`);
    }
  });

  // Manual navigation
  $("#next").click(function () {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlide();
    }
  });

  $("#prev").click(function () {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlide();
    }
  });

  // Retry button
  $("#retry").click(function () {
    // Reset state
    currentSlide = 0;
    score = 0;

    // Reset UI
    $("#quiz-score").hide();
    $(".quiz-container, .quiz-nav").show();

    // Go back to first slide
    updateSlide();
  });

  // Initial position
  updateSlide();
});


