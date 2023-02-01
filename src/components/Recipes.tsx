import React from "react";
import { useTranslation } from "react-i18next";

const Recipes = () => {
    const {t} = useTranslation('recipes');
    return(
        <div id="sidebar">
            <h3>{t('quick access')}</h3>
            <div className="checklist quick-access">
                <ul>
                </ul>
            </div>
        </div>
        
    )
}

export default Recipes;