

const getUser = async (id) => {  // el getUser recibe el id al momento de hacer la peticion
  console.log(id)
  const res = await fetch(`https://reqres.in/api/users/${id}`) // fetch es una funcion de javascript que permite hacer peticiones http
  const data = await res.json() // json es un metodo que convierte la respuesta en un objeto json
  console.log(data.data)
  return data.data

}

//componente que se encarga de mostrar el detalle de un usuario
export default async function UserPage({ params }) {// param es un objeto que contiene el id que se le pasa a la url y
  // es propio de nextjs para la navegacion entre paginas
  //console.log({ params }) // {params: {id: "1"}}

  const user = await getUser(params.id); // el getUser recibe el id al momento de hacer la peticion
  //{JSON.stringify(user)}
  return(
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center ">
            <img src={user.avatar} alt={user.email} />
            <div className="card-body text-center">
              <h3>{user.id} {user.fist_name} {user.last_name} </h3>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
