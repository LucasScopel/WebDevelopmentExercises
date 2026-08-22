//The first time I did it, it didn't end up so good, so I made it again in another day.

class Group {
  constructor() {
    this.members = [];
  }

  static from(iterableObject) {
    let myGroup = new Group();

    for (let element of iterableObject) {
      myGroup.add(element);
    }

    return myGroup;
  }

  add(value) {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i] === value) return;
    }

    this.members.push(value);
    return;
  }

  delete(value) {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i] === value) {
        this.members.splice(this.members.indexOf(value), 1);
      }
    }
    return;
  }

  has(value) {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i] === value) return true;
    }

    return false;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
