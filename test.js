// let friendsAtYourParty = 0

// while (friendsAtYourParty < 10){
//     console.log('Another friend arrived at your party')
//     friendsAtYourParty++
// }
// console.log('There are', friendsAtYourParty, 'friends at your party')

const me = {
    name: {
      first: "Brian",
      last: "Holt",
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA",
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    },
  };
  
  console.log(me.getAddress());