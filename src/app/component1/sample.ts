export class MyModel {
  
  lala:string;
  
  constructor() {
    this.lala = "llaala";
  }
  
  appendToLala(param: string){
    this.lala += param;
  }
  
}