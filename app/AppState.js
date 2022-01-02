
import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"




class AppState extends EventEmitter {
  Snacks = [

    new Snack('Mountain Sprite', 2.50),
    new Snack('Root Dew', 5.75),
    new Snack('Red Dwarf', 5.00)
  ]

  money = 0

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
