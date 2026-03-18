var Plant = /** @class */ (function () {
    function Plant(name, water, sunlight) {
        this.plantName = name;
        this.waterLevel = water;
        this.sunlightHours = sunlight;
    }
    Plant.prototype.checkHealth = function () {
        if (this.waterLevel < 40) {
            console.log(this.plantName + " needs water 💧");
        }
        else if (this.sunlightHours < 4) {
            console.log(this.plantName + " needs sunlight ☀");
        }
        else {
            console.log(this.plantName + " is healthy 🌿");
        }
    };
    return Plant;
}());
// Creating objects
var garden = [
    new Plant("Rose", 30, 6),
    new Plant("Cactus", 70, 3),
    new Plant("Tulip", 80, 6)
];
// Using for loop
for (var i = 0; i < garden.length; i++) {
    garden[i].checkHealth();
}
