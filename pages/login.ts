import{ Page}  from'@playwright/test'

export class Login {
    constructor (private page:Page){}

  async navigate (){ await this.page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }
    async loginn (username:string,password:string) {

        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole("button" , {name:'Login'}).click();
     

    }
}

