function twoSum(array, target) {
    
    for (let indice1 = 0; indice1 < array.length; indice1++){

        for (let indice2=indice1+1; indice2 < array.length; indice2++){

            if (array[indice1] + array[indice2] == target){
                return [indice1,indice2];
            }
        }
    }
    return null;
}

//exemple

let array = [2,7,11,15];
let target = 9;
let affichage_indices=twoSum(array,target);
console.log(affichage_indices);

let array2 = [2,4,6,1,7,10,13];
let target2 = 12;
let affichage_indices2=twoSum(array2,target2);
console.log(affichage_indices2);

