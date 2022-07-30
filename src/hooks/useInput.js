import { useState } from "react";

export const useInput = (initialValue, callback) => {
    const [input, setInput] = useState({initialValue})

    const handleChanges = e => {
        setInput({...initialValue, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        callback()
    }
    return {input, setInput, handleChanges, handleSubmit}
}