class ElectricalAppliance {
    constructor(name) {
        this.device = 'household electrical appliance';
        this.name = name;
    }

    getPowerConsumption (power, t, on) {
        let turnOn = on;
        if(on === 1){
            turnOn = 'On';
        }else{
            turnOn = 'Off';
        };
        
    
        console.log(`Electric power consumption ${this.name} - (${this.type}) per ${t} hour. = ${power * t}W. ${this.name}: ${turnOn}`);
    }

}

class Characteristic extends ElectricalAppliance {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}

const hairdryer = new Characteristic ('hairdryer', 'styler');
const microwave = new Characteristic ('microwave', 'grill');
const tableLamp = new Characteristic ('table lamp', 'led');

console.log(hairdryer, microwave, tableLamp);
hairdryer.getPowerConsumption(600, 4);
microwave.getPowerConsumption(1800, 2, 1);
tableLampe.getPowerConsumption(30, 6, 1);