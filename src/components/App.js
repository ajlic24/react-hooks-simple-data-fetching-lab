import {useEffect, useState} from 'react'

function App() {
    const [image, setImage] = useState('')
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then(data => {
                setImage(data.message)
            })
    }, [])
    
    return (
        <>
            {(image === '') ? <p>Loading...</p> : <img alt='A Random Dog' src={image} />}
        </>
    )

}

export default App
