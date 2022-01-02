import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";

export class VendingController {

  constructor() {
    // VendingService.//
  }

  addMoney() {
    ProxyState.on('income')
    vendingService.addMoney()
  }

}