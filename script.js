"use strict"

const generationFunc = () => {
    const arr = []

    const randomFunc = () => {
        let nonRepeat = (Math.round(Math.random()*100))
        console.log(nonRepeat)
        if (arr.includes(nonRepeat) === true) {
            randomFunc()
        }   else if (arr.length === 100) {
            return
        }   else if (nonRepeat === 0){
            randomFunc()
        }   else {
            arr.push(nonRepeat)
            randomFunc()
        }
    }

    const resultFunc = () => {
        return arr.sort(function(a,b){
            let result = a - b
            return result
        })
    }

    return {
        randomFunc,
        resultFunc,
    }
}


const generation = generationFunc ()
generation.randomFunc()
console.log(generation.resultFunc())