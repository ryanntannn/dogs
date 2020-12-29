const dogs = [
    {id: 0, hunger: 0, happiness: 0, cleaniness: 0}
];

function update_dog(data){
    //console.log(`fed dog ${data.id}`);
    return new Promise((res, rej)=>{
        var targetDog = dogs.find(x => x.id == data.id);
        switch(data.type){
            case 'feed': feed_dog(targetDog); break;
            case 'play': play_dog(targetDog); break;
            case 'clean': clean_dog(targetDog); break;
        }
        res(targetDog);
    });
}

function feed_dog(targetDog){
    increment_hunger(targetDog, 0.2);
    increment_happiness(targetDog, 0.1);
    increment_cleaniness(targetDog, -0.1);
}

function play_dog(targetDog){
    increment_hunger(targetDog, -0.1);
    increment_happiness(targetDog, 0.2);
    increment_cleaniness(targetDog, -0.1);
}

function clean_dog(targetDog){
    increment_hunger(targetDog, -0.1);
    increment_happiness(targetDog, -0.1);
    increment_cleaniness(targetDog, 0.2);
}

function increment_hunger(targetDog, value){
    targetDog.hunger = clamp_number(targetDog.hunger + value, 0, 1);
}

function increment_happiness(targetDog, value){
    targetDog.happiness = clamp_number(targetDog.happiness + value, 0, 1);
}

function increment_cleaniness(targetDog, value){
    targetDog.cleaniness = clamp_number(targetDog.cleaniness + value, 0, 1);
}

function clamp_number(number, min, max){
    if(number <= min){
        return min;
    }else if(number >= max){
        return max;
    }
    return number;
}

module.exports = { update_dog }