
import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";

class VendingService {
  constructor() {
    console.log("service working")
  }
  addMoney() {
    ProxyState.money += .25
    console.log(ProxyState.money);
  }
  income() {


  }
}


export const vendingService = new VendingService()