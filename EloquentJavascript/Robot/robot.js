function buildGraph(edges) {
  let graph = Object.create(null);

  const pathsAssigner = (from, to) => {
    if (!graph[from]) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  };

  for (let [from, to] of edges.map((s) => s.split("-"))) {
    pathsAssigner(from, to);
    pathsAssigner(to, from);
  }

  return graph;
}

// There’s the robot’s current location and the collection of undelivered parcels,
// each of which has a current location and a destination address.

// While we’re at it, let’s make it so that we don’t change this state
// when the robot moves but rather compute a new state for the situation after the move.

class VillageState {
  constructor(currentLocation, undeliveredParcels) {
    this.currentLocation = currentLocation;
    this.undeliveredParcels = undeliveredParcels;
  }

  move = (nextAddress) => {
    let updatedUndeliveredParcels = this.undeliveredParcels
      .map((parcel) => {
        if (parcel.place !== this.currentLocation) return parcel;
        return {
          place: this.currentLocation,
          destinationAddress: parcel.destinationAddress,
        };
      })
      .filter((parcel) => parcel.destinationAddress !== nextAddress);

    return new VillageState(nextAddress, updatedUndeliveredParcels);
  };
}

let first = new VillageState("Post Office", [
  { place: "Post Office", destinationAddress: "Alice's House" },
]);
let next = first.move("Daniel's House");

console.log(next.currentLocation);
// → Alice's House
console.log(next.undeliveredParcels);
// → []
console.log(first.currentLocation);
// → Post Office

/*

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

console.log(buildGraph(roads));
*/
