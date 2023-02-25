import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Cover from "../../components/Cover"

interface IRender {
    title: string;
    text: string;
}

const CalorieCalculator = () => {

    const { t } = useTranslation('calorie_calculator');
    const render: IRender[] = [
        {
            title: t('title what are calories'),
            text: t('explain daily calorie requirements')
        },
        {
            title: t('title macronutrients'),
            text: t('explain macronutrients')
        },
        {
            title: t('title proteins'),
            text: t('explain proteins')
        },
        {
            title: t('title fat'),
            text: t('explain fat')
        },
        {
            title: t('title carb'),
            text: t('explain carb')
        }
    ];
    return (
        <Fragment>
            <Cover img="metabolismCover.jpg" title={t('title')} sub_title={t('sub title')} />
            <div className="container pt-5">
                <div className="row">
                    <div className="col ms-auto">
                        {render.map((e) => (
                            <Fragment>
                                <h2>{e.title}</h2>
                                <p>{e.text}</p>
                            </Fragment>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <form noValidate>

                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CalorieCalculator;