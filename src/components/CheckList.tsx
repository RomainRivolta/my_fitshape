import React from "react";
import { useTranslation } from "react-i18next";
import {
    atLeastOneUppercase,
    atLeastOneLowercase,
    atLeastOneNumeric,
    atLeastOneSpecialChar,
    eightCharsOrMore
} from "../utils/validationRule";

interface IProps {
    value: string | undefined;
}

const CheckList = (props:IProps) => {
    const {t} = useTranslation('auth');

    const rules = [
        { label: t('one uppercase'), pattern: atLeastOneUppercase},
        { label: t('one lowercase'), pattern: atLeastOneLowercase},
        { label: t('one number'), pattern: atLeastOneNumeric},
        { label: t('special char'), pattern: atLeastOneSpecialChar},
        { label: t('min char'), pattern: eightCharsOrMore }
      ];

    return (
        <div className="alert alert-light checklist" role="alert">
            {rules.map((rule) => {
                const cn = props.value && props.value.match(rule.pattern) ? 'passed':'invalid';
                return <p key={rule.label} className={cn}>{rule.label}</p>
            })}
        </div>
    );
}

export default CheckList;
