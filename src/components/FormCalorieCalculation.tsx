import React, { FormEvent, Fragment } from "react";
import { useTranslation } from "react-i18next";
import Input from './Input';

interface IObjective {
    name: string;
    value: string;
}

interface IPhysicalActivity {
    name: string;
    value: number | string;
}

const FormCalorieCalculation = () => {

    const { t } = useTranslation('calorie_calculator');
    const objective: IObjective[] = [
        {
            name: `--${t('form.select')}--`,
            value: "",
        },
        {
            name: t('form.weightloss'),
            value: 'weightloss'
        },
        {
            name: t('form.maintenance'),
            value: 'maintenance'
        },
        {
            name: t('form.muscle gain'),
            value: 'muscle gain'
        }
    ];

    const physicalActivity: IPhysicalActivity[] = [
        {
            name: `--${t('form.select')}--`,
            value: "",
        },
        {
            name: t('form.sedentary'),
            value: 1.1
        },
        {
            name: t('form.light'),
            value: 1.2
        },
        {
            name: t('form.moderate'),
            value: 1.3
        },
        {
            name: t('form.daily moderate'),
            value: 1.4  
        },
        {
            name: t('form.intense'),
            value: 1.5
        },
    ];

    const handleChangeObjective = (e: FormEvent) => {
        e.preventDefault();

    }

    const handleChangePhysicalActivity = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <form className="row g-3 px-3 py-3" noValidate>
            <h2>{t('title.calorie calculator')}</h2>
            <div className="col-12">
                <label htmlFor="gender" className="form-label required gender">{t('form.gender')}</label>
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio_gender" id="btnradio_male" autoComplete="off" checked />
                    <label className="btn btn-outline-primary" htmlFor="btnradio_male">{t('form.male')}</label>

                    <input type="radio" className="btn-check" name="btnradio_gender" id="btnradio_female" autoComplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="btnradio_female">{t('female')}</label>
                </div>
            </div>
            <div className="col-md-4">
                <Input type="number" name="size" label={t('form.size')} id="size" className="required" required />
            </div>
            <div className="col-md-4">
                <Input type="number" name="weight" label={t('form.weight')} id="weight" className="required" required />
            </div>
            <div className="col-md-4">
                <Input type="number" name="age" label={t('form.age')} id="age" className="required" required />
            </div>
            <div className="col-md-6">
                <label className="form-label required">{t('form.objective')}</label>
                <select className="form-select" aria-label=".form-select" value="" onChange={handleChangeObjective}>
                    {objective.map(({ name, value }, index) => (
                        <option value={value} key={index}>{name}</option>
                    ))}
                </select>
            </div>
            <div className="col-md-6">
                <label className="form-label required">{t('form.physical activity')}</label>
                <select className="form-select" aria-label=".form-select" value="" onChange={handleChangePhysicalActivity}>
                    {physicalActivity.map(({ name, value }, index) => (
                        <option value={value} key={index}>{name}</option>
                    ))}
                </select>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">{t('form.calculate')}</button>
            </div>

        </form>
    )
}

export default FormCalorieCalculation;