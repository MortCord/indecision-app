const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(1,6))

const user = {
    name: 'MortCord',
    cities: ['vin', 'ski'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);


        this.cities.forEach((city)=>{
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    nums:[1,6,8,3],
    multiplyBy: 2,
    multiply(){
        return this.nums.map((num) => this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());
