import { useState } from "react"
const useWordle = () => {
    const[turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) //each guess is an array
    const [history, setHistory] = useState([]) //each guess is a string 
    const [isCorrect, setIsCorrect] = useState(false)



    // format a guess into array of letter objects, with key and color property
    const formatGuess = () => {


    }

    //add new guess to the guesses state
    //update isCorrect state if guess is correct
    //add a turn to the turn state
    const addNewGuess = () => {


    }


    //handle keyup event & track current guess
    //if user presses enter, add new guess
    const handleKeyUp = () => {


    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}

}

export default useWordle;