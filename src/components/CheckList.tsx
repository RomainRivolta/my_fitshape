import React, { Fragment } from "react";
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

const CheckList = (props: IProps) => {
    const { t } = useTranslation('auth');

    const rules = [
        { label: t('one uppercase'), pattern: atLeastOneUppercase },
        { label: t('one lowercase'), pattern: atLeastOneLowercase },
        { label: t('one number'), pattern: atLeastOneNumeric },
        { label: t('special char'), pattern: atLeastOneSpecialChar },
        { label: t('min char'), pattern: eightCharsOrMore }
    ];

    return (
        <div id="checklist">
            {rules.map(({label, pattern},index) => {
                const cn = props.value && props.value.match(pattern) ? 'passed text-success fs-6' : 'invalid fs-6';
                return (
                    <Fragment key={index}>
                        <p className={cn}><i className="bi" ></i>{label}</p>
                    </Fragment>)
            })}
        </div>
    );
}

export default CheckList;
