import React from "react";
import { useTranslation } from "react-i18next";
import Account from "../../components/Account";

const ResetPassword = () => {
    const {t} =  useTranslation('auth');
    return(
        <Account>
            <form>
                <h1 className="mb-2 text-center h3 ">{t('recover password')}</h1>
                <p className="mb-4 text-center">{t('enter your register email address to get recover')}.</p>
            </form>
        </Account>
    )
}

export default ResetPassword;