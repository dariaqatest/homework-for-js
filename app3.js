// ============================================================================
//#region CLASSES
class Zoo {

    // get/set zoo’s address
    get Address() { return this.address; }
    set Address(address) { this.address = address; }

    // get/set zoo’s address
    get Area() { return this.area; }

    // get/set zoo’s area
    set Area(area) { this.area = area; }

    // get established date
    get EstablishedDate() { return this.establishedDate; }

    // get/set ticket’s price
    get TicketPrice() { return this.ticketPrice; }
    set TicketPrice(ticketPrice) { this.ticketPrice = ticketPrice; }

    constructor(address, area, establishedDate, ticketPrice, workers, animals) {
        this.address = address;
        this.area = area;
        this.establishedDate = establishedDate;
        this.ticketPrice = ticketPrice;
        this.workers = workers; // []
        this.animals = animals; // []

        // add/remove/edit worker
        this.AddWorker = (worker) => this.workers.push(worker);

        // add/remove/edit worker
        this.RemoveWorker = function (phone) {
            let idx = workers.findIndex((obj => obj.phone == phone));
            workers.splice(idx, 1);
        }

        // add/remove/edit worker
        this.EditWorker = function (phone, worker) {
            let idx = workers.findIndex((obj => obj.phone == phone));
            workers[idx] = worker;
        }

        // add/remove/edit animal
        this.AddAnimal = (animal) => this.animals.push(animal);

        // add/remove/edit animal
        this.RemoveAnimal = function (phone) {
            let idx = animals.findIndex((obj => obj.phone == phone));
            animals.splice(idx, 1);
        }

        // add/remove/edit animal
        this.EditAnimal = function (phone, animal) {
            let idx = wnimals.findIndex((obj => obj.phone == phone));
            animals[idx] = animal;
        }

        // show all animals
        this.ShowAllAnimals = function () {
            animals.forEach(function (animal) {
                console.log(`${animal.AnimalInfo}`);
            });
        }

        // show all workers
        this.ShowAllWorkers = function () {
            workers.forEach(function (worker) {
                console.log(`${worker.firstName} ${worker.lastName} - ${worker.phone}`);
            });
        }

        // show animal by id
        this.ShowAnimalById = function (id) {
            return animals[id];
        }
    }
}

class Worker {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
}

class Animal {

    // get animal info
    get AnimalInfo() { return `${this.type} - weight:${this.weight} kg.; height:${this.height} cm.; origin:${this.placeOfOrigin};`; };

    // get/set zoo’s address
    set Weight(weight) { this.weight = weight; }

    // get/set zoo’s address
    set Height(height) { this.height = height; }

    constructor(type, color, weight, height, placeOfOrigin) {
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    }
}

class Snakes extends Animal {
    constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
        super(type, color, weight, height, placeOfOrigin);
        this.isPoisonous = isPoisonous;
    }
}

class CatLike extends Animal {
    constructor(type, color, weight, height, placeOfOrigin, isSafeToPet) {
        super(type, color, weight, height, placeOfOrigin);
        this.isSafeToPet = isSafeToPet;
    }
}

class Birds extends Animal {
    constructor(type, color, weight, height, placeOfOrigin, isFlying) {
        super(type, color, weight, height, placeOfOrigin);
        this.isFlying = isFlying;
    }
}
//#endregion
// ============================================================================

// ============================================================================
//#region INIT ZOO

let workers = [];

let worker1 = new Worker("Ivan", "Ivanovich", "123-345-345");
workers.push(worker1);

let worker2 = new Worker("Aleksey", "Petrovich", "666-666-667");
workers.push(worker2);

let worker3 = new Worker("Daria", "Puteshestvinica", "000-000-001");
workers.push(worker3);

let animals = [];

let snake = new Snakes("Python", "Black", 10, 5, "Australia", true);
animals.push(snake);

let tiger = new CatLike("Tiger", "White", 50, 70, "Afrika", false);
animals.push(tiger);

let eagle = new Birds("Eagle", "Black", 15, 15, "USA", true);
animals.push(eagle);

let weZoo = new Zoo("Warsaw Zoo", "1000 m^2", "1969-03-07", "40 zł", workers, animals);

//#endregion
// ============================================================================

// ============================================================================
//#region OPTIONAL

// 1) ADD\EDIT
weZoo.AddWorker(new Worker("Dasha", "Petrova", "000-000-004"));
weZoo.EditWorker("000-000-004", new Worker("Dasha", "Denisova", "000-000-004"));

// 2) REMOVE
weZoo.AddWorker(new Worker("Alla", "Bella", "000-000-005"));
weZoo.RemoveWorker("000-000-005");

// 3) SHOW LOG
weZoo.ShowAllAnimals();
weZoo.ShowAllWorkers();

//#endregion
// ============================================================================

// ============================================================================
//#region WWW ON DOCUMENT READY - DOM TREE READY

function AppendList(elemId, arr, callback) {
    let ul = document.createElement('ul');
    document.getElementById(elemId).appendChild(ul);

    arr.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += callback(item);
    });
}

(function () {

    // Set Title
    let element = document.getElementById('zoo');
    element.innerText = `Address:${weZoo.Address}; \nArea:${weZoo.Area}; \nEstablished date:${weZoo.EstablishedDate}; \nPrice:${weZoo.TicketPrice};`;

    // Show Workers
    AppendList('workersList', weZoo.workers, function (worker) {
        return `${worker.firstName} ${worker.lastName} - ${worker.phone}`;
    });

    // Show Animals
    AppendList('animalsList', weZoo.animals, function (animal) {
        return animal.AnimalInfo;
    });
    
})();
//#endregion
// ============================================================================