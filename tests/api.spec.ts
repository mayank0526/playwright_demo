import {test,expect, request} from '@playwright/test';

test('get api', async({request})=> {
const response = await request.get('https://jsonplaceholder.typicode.com/users');
expect(response.status()).toBe(200);
const body = await response.json();
console.log(body);

 expect(body.length).toBeGreaterThan(0);
 expect(body[0].username).toBe("Bret");

});

test('Post api', async({request})=>{

const response = await request.post('https://jsonplaceholder.typicode.com/users',
    {
        data: {
            name:'Mayank',
            email:'Mayank@gmail.com'
        }
    }

);
expect(response.status()).toBe(201);
const body = await response.json();
console.log(body);
expect(body.name).toBe('Mayank');
expect(body.email).toBe('Mayank@gmail.com');

});

test('put api', async({request})=> {
const response = await request.put('https://jsonplaceholder.typicode.com/users/1',
{
    data: {
    name: 'MayankUpdate',
    email : 'update@gmail.com'
    }

    }
);
    
expect(response.status()).toBe(200);
const body = await response.json();
console.log(body);
expect(body.name).toBe('MayankUpdate');
expect(body.email).toBe('update@gmail.com');
}
);