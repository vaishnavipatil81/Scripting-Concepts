class Plant {
    plantName: string;
    waterLevel: number;
    sunlightHours: number;

    constructor(name: string, water: number, sunlight: number) {
        this.plantName = name;
        this.waterLevel = water;
        this.sunlightHours = sunlight;
    }

    checkHealth(): void {
        if (this.waterLevel < 40) {
            console.log(this.plantName + " needs water 💧");
        } else if (this.sunlightHours < 4) {
            console.log(this.plantName + " needs sunlight ☀");
        } else {
            console.log(this.plantName + " is healthy 🌿");
        }
    }
}

// Creating objects
let garden: Plant[] = [
    new Plant("Rose", 30, 6),
    new Plant("Cactus", 70, 3),
    new Plant("Tulip", 80, 6)
];

// Using for loop
for (let i = 0; i < garden.length; i++) {
    garden[i].checkHealth();
}