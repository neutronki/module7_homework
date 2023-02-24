function ElectricalAppliance(name) {
    this.device = 'household electrical appliance',
    this.name = name
    
}

ElectricalAppliance.prototype.getPowerConsumption = function (power, t, on) {
    let turnOn = on;
    if(on === 1){
        turnOn = 'On';
    }else{
        turnOn = 'Off';
    };
    

    console.log(`Electric power consumption ${this.name} per ${t} hour. = ${power * t}W. ${this.name}: ${turnOn}`);
};

function Characteristic(name, type) {
    this.name = name,
    this.type = type
}

Characteristic.prototype = new ElectricalAppliance();

const hairdryer = new Characteristic ('hairdryer', 'styler');
const microwave = new Characteristic ('microwave', 'grill');
const tableLamp = new Characteristic ('table lamp', 'led');

console.log(hairdryer, microwave, tableLamp);
hairdryer.getPowerConsumption(600, 4);
microwave.getPowerConsumption(1800, 2, 1);
tableLamp.getPowerConsumption(30, 6, 1);