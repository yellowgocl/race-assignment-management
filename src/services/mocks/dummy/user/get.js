import { faker } from '@faker-js/faker';
faker.setLocale('zh_CN');
export default (req) => {
    const id = req.url.searchParams.get('id')
    const name = faker.name.lastName() + faker.name.firstName()
    return {
        id,
        name,
        phone: faker.phone.phoneNumber(),
    }
}