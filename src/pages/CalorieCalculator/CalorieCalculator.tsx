import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Cover from "../../components/Cover"
import FormCalorieCalculation from "../../components/FormCalorieCalculation";
import MediaObject from "../../components/MediaObject";

interface IRender {
    title: string;
    content: string | JSX.Element;
}

const CalorieCalculator = () => {

    const { t } = useTranslation('calorie_calculator');

    const contentParagraph = (str: string) => (
        <p>{str}</p>
    );

    const contentMedia = (text: string | Array<string>, alt: string, src: string) => (
        <MediaObject text={text} alt={alt} src={src} />
    );

    const render: IRender[] = [
        {
            title: t('title.what are calories'),
            content: contentParagraph(t('explain.daily calorie requirements'))
        },
        {
            title: t('title.macronutrients'),
            content: contentParagraph(t('explain.macronutrients'))
        },
        {
            title: t('title.proteins'),
            content: contentMedia([t('explain.proteins.intro'),t('explain.proteins.goal')],"protein","https://www.basic-fit.com/dw/image/v2/BDFP_PRD/on/demandware.static/-/Library-Sites-basic-fit-shared-library/default/dwed88169a/Roots/Blog/Blog-Header/528x352/19-07-blog-fitness-nutrition-protein-food.png?sw=600")
        },
        {
            title: t('title.fat'),
            content: contentMedia([t('explain.fat.intro'),t('explain.fat.goal')],"fat","https://i0.wp.com/blog-le-fitness.com/wp-content/uploads/2017/07/huile-dolive.jpg?w=2200&ssl=1")
        },
        {
            title: t('title.carb'),
            content: contentMedia([t('explain.carb.intro'), t('explain.carb.goal')],"carb","https://medias.toutelanutrition.com/ressource/104/glucides_1.jpg")
        }
    ];
    return (
        <Fragment>
            <Cover img="metabolismCover.jpg" title={t('title.page')} sub_title={t('sub title')} />
            <div className="container pt-5">
                <div className="row">
                    <div className="col ms-auto">
                        {render.map(({ content, title }, index) => (
                            <Fragment key={index}>
                                <h2>{title}</h2>
                                {content}
                            </Fragment>
                        ))}
                    </div>
                </div>
                <div className="my-4">
                    <FormCalorieCalculation />
                </div>
            </div>
        </Fragment>
    )
}

export default CalorieCalculator;