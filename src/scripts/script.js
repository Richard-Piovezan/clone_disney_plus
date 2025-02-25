document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-question]");
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (btn) => {
            const tabTarget = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}`);

            removeActiveButton();
            btn.target.classList.add("shows__tabs__button--is-active");

            hideAllTabs();
            tab.classList.add("shows__list--is-active");
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", openCloseAnswer);
    }
})

function removeActiveButton() {
    const buttons = document.querySelectorAll("[data-tab-button]")

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("shows__tabs__button--is-active");
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    for (i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove("shows__list--is-active");
    }
}

function openCloseAnswer(element) {
    const classFaq = "faq__questions__item--is-open";
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(classFaq);
}