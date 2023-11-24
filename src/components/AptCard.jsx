
function AptCard(props) {

  const { title, pricePerDay, img, createdAt
  } = props.piso

  let fixedDate = new Date(createdAt).toDateString()

  return (
    <div>
      
        <h3>{title}</h3>
        <img src={img} alt="piso" width={400}/>
        <p>precio: {pricePerDay}</p>
        <p>Añadido: {fixedDate}</p>

    </div>
  )
}

export default AptCard