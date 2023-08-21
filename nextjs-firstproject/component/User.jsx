
"use client";// para que funcione el fetch en el navegador y cada vez que quiera usar un hook de nextjs tengo que importarlo

import { useRouter } from 'next/navigation'; //hook de nextjs para la navegacion entre paginas

export default function User({ user }) {// destructuring de props

    const router = useRouter() // hook de nextjs para la navegacion entre paginas
    return (
        <ul className='list-group'>
            {user.map((users) => (
                <li className='list-group-item d-flex justify-content-between align-items-center  list-group-item-action' key={users.id} // key es un atributo especial de react para identificar cada elemento de la lista
                    onClick={() => {
                        router.push(`/user/${users.id}`) // hook de nextjs para la navegacion entre paginas
                        console.log(users.id)
                    }
                    }>
                    <div>
                        <h5>{users.id} {users.first_name} {users.last_name}</h5>
                        <p>{users.email}</p>
                    </div>
                    <img src={users.avatar} alt={users.email}
                        style={{ borderRadius: '50%', width: '80px', height: '80px', border: '1px solid #000' }}
                    />
                </li>
            )
            )}
        </ul>


    )
}
