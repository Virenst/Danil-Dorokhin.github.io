import React from "react";

import "./LanguageButtons.css";

const LanguageButtons = ({ lang, handleLanguage }) => {
    const whatLang = lang == "eng";
    return (
        <div>
            <button
                type="button"
                class={
                    whatLang ? "btn btn-outline-secondary" : "btn btn-secondary"
                }
                onClick={() => handleLanguage("eng")}
            >
                English
            </button>
            <button
                type="button"
                class={
                    whatLang ? "btn btn-secondary" : "btn btn-outline-secondary"
                }
                onClick={() => handleLanguage("ru")}
            >
                Русский
            </button>
        </div>
    );
};

export default LanguageButtons;