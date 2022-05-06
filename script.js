"use strict"

const GenerationFunc = () => {
    const arr = []

    const randomFunc = () => {
        let nonRepeat = (Math.round(Math.random()*100))
        console.log(nonRepeat)
        if (arr.includes(nonRepeat) === false) {
            arr.push(nonRepeat)
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


const generation = GenerationFunc ()
generation.randomFunc()
generation.randomFunc()
generation.randomFunc()
generation.randomFunc()
generation.randomFunc()
generation.randomFunc()
generation.randomFunc()
generation.randomFunc()
generation.randomFunc()
generation.randomFunc()
generation.randomFunc()
generation.randomFunc()
console.log(generation.resultFunc())