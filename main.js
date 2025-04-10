// Language Support
const translations = {
    en: {
        welcome: "Welcome to EcoNaija",
        report: "Report Environmental Issue"
    },
    ha: {
        welcome: "Barka da zuwa EcoNaija",
        report: "Bayar da rahoton lamarin muhalli"
    },
    yo: {
        welcome: "Ẹ káàbọ̀ sí EcoNaija",
        report: "Ṣe ìròyìn nípa ọ̀ràn àyíká"
    },
    ig: {
        welcome: "Nnọọ na EcoNaija",
        report: "Kọọ ihe gbasara gburugburu ebe obibi"
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelector('[data-translate="welcome"]').textContent = translations[lang].welcome;
    // Update all other elements with data-translate attributes
}

// Load Nigerian States
fetch('data/states.json')
    .then(response => response.json())
    .then(states => {
        const grid = document.getElementById('stateGrid');
        states.forEach(state => {
            grid.innerHTML += `
                <div class="state-card">
                    <a href="states/${state.slug}.html">
                        <img src="images/states/${state.slug}.jpg" alt="${state.name}">
                        <h3>${state.name}</h3>
                    </a>
                </div>
            `;
        });
    });

// Nigerian Phone Validation
function validateNaijaPhone(phone) {
    const regex = /^(\+234|0)[7-9][01]\d{8}$/;
    return regex.test(phone);
}
