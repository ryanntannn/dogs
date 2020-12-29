const dogs = [
    {id: 0, hunger: 1, happiness: 1, cleaniness: 1}
];

function feed_dog(data){
    //console.log(`fed dog ${data.id}`);
    return new Promise((res, rej)=>{
        var targetDog = dogs.find(x => x.id == data.id);
        targetDog.hunger += 1;
        res(targetDog);
    });
}

module.exports = { feed_dog }