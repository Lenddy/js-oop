class Ninja{
    constructor(name,health,speed = 3,strength = 3){
        this.name = name
        this .health = health
        this.speed = speed
        this. strength = strength
    }
    sayName(){
        return "my name is" +" "+ this.name
    }
    showStats(){
        return `\n health ${this.health} \n speed ${this.speed} \n strength ${this.strength}`
    }

    drinkSake(healthPlus = 10){
        return this.health += healthPlus
    }
}

// const Lenddy = new Ninja("Lenddy",100);
// console.log(`${Lenddy.sayName()} \n my stats are ${Lenddy.showStats()} \n plus health ${Lenddy.drinkSake()}`)


class Sensei extends Ninja{
    constructor(name,health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name,health,speed,strength)
        this.wisdom = wisdom
    }
    speakWisdom(){
        this.drinkSake()
        return `health ${this.health} \n here is my wisdom` 
    }
}

const Max = new Sensei("Max")
console.log(`${Max.sayName()} \n my stats are ${Max.showStats()} \n plus health ${Max.drinkSake()} \n plus wisdom ${Max.speakWisdom()}`)

// console.log(Max.speakWisdom());
// console.log(Max.showStats());
// console.log(Max.drinkSake());
// console.log(Max.showStats());
// console.log(Max.speakWisdom());
