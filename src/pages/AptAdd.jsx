import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";

function AptAdd() {

  const { selectedBtnTheme } = useContext(ThemeContext)

  const redirect = useNavigate()

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [pricePerDay, setPricePerDay] = useState(0);

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleImgChange = (e) => setImg(e.target.value)
  const handlePriceChange = (e) => setPricePerDay(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("probando entregar formulario")

    const newApartment = {
      // title: title,
      // img: img,
      // pricePerDay: pricePerDay,
      title,
      img,
      pricePerDay
    }

    // ... aqui contactamos al backend para crear nuevo piso

    try {
      
      const response = await axios.post("https://ironbnb-m3.herokuapp.com/apartments", newApartment)
      redirect("/pisos/list")

    } catch (error) {
      redirect("/error")
    }

  }

  return (
    <div className="AddApartmentPage">
      <h3>Agrega un nuevo piso!</h3>

      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />

        <label htmlFor="img">Image</label>
        <input
          type="text"
          name="img"
          onChange={handleImgChange}
          value={img}
        />

        <label htmlFor="pricePerDay">Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={handlePriceChange}
          value={pricePerDay}
        />

        <button className={selectedBtnTheme} onClick={handleSubmit} type="submit">Agregar</button>
      </form>

    </div>
  );
}

export default AptAdd;