const {Dashboard} = require('./Dashboard')
const {LoginPage} = require('./LoginPage')

class POmanager

{
 constructor(page)
 {
    this.page = page;
  this.loginpage = new LoginPage(this.page);
  this.dashboard = new Dashboard(this.page);

  //declare all the objects inside constructor
}

getloginpage(){
    return this.loginpage;

}

getdashboard(){
    return this.dashboard;
}



}
module.exports = {POmanager};