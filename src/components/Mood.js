import { Cat } from 'react-kawaii'; //elegimos el gato

import { useState } from 'react';

const Mood = () => {
    //1)array with the different moods availables:
    const moodArray = ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']
    const [mood, setMood] = useState(moodArray[Math.floor(Math.random() * moodArray.length)]) //: ponemos como valor inicial un mood aleatorio
    const randomMood = () => { 
        //2) return Math.floor(Math.random() * moodArray.length)

        //todo lo que está dentro de return nos da un número aleatorio, que sería nuestro Index, al que queremos llegar. Entonces escribimos ...moodArray[...]
        //3) return moodArray[Math.floor(Math.random() * moodArray.length)]

        // Pero lo que queremos no es un return, sino un setMood, así que cambiamos: 4)
        setMood(moodArray[Math.floor(Math.random() * moodArray.length)])
    }


//5)Ahora queremos añadir la función para que cambie de color aleatoriamente con cada click:
    // const randomColor= () => {
    //     const random255 = () => Math.floor(Math.random()* 255)
    //     return `rgb(${random255()}, ${random255()}, ${random255()})`
    // }
    // const [color, setColor] = useState();

// 6) Substituimos "return" por "setColor()", y en el div substituimos el color definido "FDA7DC" por nuestro color variable {color}, y además añadimos la función "randomColor" al button.
    // const randomColor= () => {
    //     const random255 = () => Math.floor(Math.random()* 255)
    //     setColor(`rgb(${random255()}, ${random255()}, ${random255()})`)
    // }
    // const [color, setColor] = useState();

// 7) Para poder definir el valor inicial de useState a un color aleatorio, tenemos que sacar la const afuera de la función randomColor. Y nos quedaría todo así:
    // const random255 = () => Math.floor(Math.random() * 255);
    // const randomColor = () => setColor(`rgb(${random255()}, ${random255()}, ${random255()})`)
    // //hook:
    // const [color, setColor] = useState(`rgb(${random255()}, ${random255()}, ${random255()})`)

    //8)Si quisiéramos transforma el color rgb en rgba, necesitamos un cuarto valor, que va de 0 a 1 (otro random):
    const random255 = () => Math.floor(Math.random() * 255);
    const randomColor = () => setColor(`rgba(${random255()}, ${random255()}, ${random255()}, ${Math.random()})`)
    //hook:
    const [color, setColor] = useState(`rgba(${random255()}, ${random255()}, ${random255()}, , ${Math.random()})`)
 


    return (
        <section className="wrapper">
            <h2>Hello! Change my mood and my color!</h2>
            <Cat size={200} mood={mood} color={color} />
            <button onClick={() => {randomMood(); randomColor()}}>Try it!</button>
        </section>
    );
}

export default Mood;