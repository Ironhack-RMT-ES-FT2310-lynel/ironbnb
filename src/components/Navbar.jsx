import { NavLink } from "react-router-dom";

function Navbar() {

  const checkActiveURL = (navInfo) => {
    console.log(navInfo)
    // retornamos el valor del className
    if (navInfo.isActive === true) {
      return "link-active"
    } else {
      return "link-inactive"
    }
  }

  return (
    <nav>
      <NavLink to={"/"} className={checkActiveURL}>Home</NavLink>
      {/* con NavLink podemos pasar funciones de callback como valor de className, styles y otros lugares internos del componente */}
      <NavLink to={"/pisos/list"} className={checkActiveURL}>Ver pisos</NavLink>
      <NavLink to={"/pisos/add"} className={checkActiveURL}>Agregar piso</NavLink>
    </nav>
  );
}

export default Navbar;


