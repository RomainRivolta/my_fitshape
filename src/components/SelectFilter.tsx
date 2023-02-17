import React from "react";
import { useTranslation } from "react-i18next";

interface IOptionSelect {
    str: string;
    value: string;
}
const SelectFilter = () => {
    const { t } = useTranslation('main');
    const optionSelect: IOptionSelect[] = [
        {
            str: t('default'),
            value: ''
        },
        {
            str: t('rating'),
            value: 'rating'
        },
        {
            str: t('popularity'),
            value: 'popularity'
        },
        {
            str: t('new'),
            value: 'new'
        }
    ]

    return (
        <select className="form-select">
            {optionSelect.map((o) => (
                <option value={o.value} key={o.value}>{o.str}</option>
            ))}
        </select>
    )
}

export default SelectFilter;