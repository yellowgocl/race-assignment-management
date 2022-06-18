import React from 'react'
import { withTranslation } from 'react-i18next';

import LanguageSelector from '../LanguageSelector';

const Component = ({t}) => {
        return (
        <header className="px-4 py-5 sm:px-6 flex">
            <div className='flex-1'>
                <h3 className="text-lg leading-6 font-medium text-gray-900">{t('app:title')}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{t('app:descript')}</p>
            </div>
            <LanguageSelector></LanguageSelector>
        </header>
    )
}

export default withTranslation(['app', 'common'])(Component)