import React from 'react'
import DropMenu from '../DropMenu';
import { withTranslation } from 'react-i18next';
import { chain } from 'lodash'

export default withTranslation()(({t, i18n: { services: { resourceStore }, resolvedLanguage, changeLanguage, ...rest}}) => {
    const locales = React.useMemo(() => {
        return chain(resourceStore?.data || {})
            .keys()
            .map((v, k) => ({
                id: k,
                name: v
            }))
            .value()
    }, [resourceStore?.data])

    const onChangeLanguage = React.useCallback((value) => {
        changeLanguage(value?.name)
    }, [changeLanguage])

    return (
        <DropMenu defaultValue={chain(locales).find(['name', resolvedLanguage]).value()} data={locales} onChange={onChangeLanguage} ></DropMenu>
    )
})

