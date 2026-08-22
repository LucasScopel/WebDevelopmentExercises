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

  [Symbol.iterator]() {
    counter = 0;

    return {
      next: () => {
        if (counter >= this.members.length) {
          return { value: undefined, done: true };
        }

        return { value: this.members[counter++], done: false };
      },
    };
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
