import React, { useState, useEffect } from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [dogPic, setDogPic] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response)=>response.json())
            .then((data) => {
                setDogPic(data.message)
                setIsLoaded(!isLoaded)
            })
    }, [])

    return (
        isLoaded ? <img src={dogPic} alt="A Random Dog" /> : "Loading..."
    )
}

export default App