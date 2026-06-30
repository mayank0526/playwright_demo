import {test,expect} from '@playwright/test'; 
import {Login} from '../pages/login';

test('valid login' ,async ({page}) => {

const log = new Login(page);
await log.navigate() ;
await log.loginn(
    'Admin','admin123'
);

});
