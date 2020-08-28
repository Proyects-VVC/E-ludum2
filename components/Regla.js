import React from 'react';
import Swal from 'sweetalert2';
import { useMutation, gql} from '@apollo/client';
import Router from 'next/router';

const ELIMINAR_REGLA = gql `
	mutation eliminarRegla($id: ID!) {
		eliminarRegla(id: $id)
	}
`;

const OBTENER_REGLAS_USUARIO = gql `
	query obtenerReglasUsuario {
		obtenerReglasUsuario {
			id
			nombre
			apellido
			empresa 
			email
		}
	}
`;

const Regla = ({regla}) => {

	// Mutation para eliminar regla
	const [ eliminarRegla ] = useMutation( ELIMINAR_REGLA, {
		update(cache) {
			// Obtener una copia del objeto de cache
			const { obtenerReglasUsuario } = cache.readQuery({ query: OBTENER_REGLAS_USUARIO });

			// Reescribir cache
			cache.writeQuery({
				query: OBTENER_REGLAS_USUARIO,
				data: {
					obtenerReglasUsuario: obtenerReglasUsuario.filter( reglaActual => reglaActual.id !== id )
				}
			})
		}
	});

	const { nombre, apellido, empresa, email, id } = regla;

	// Elimina un regla
	const confirmarEliminarRegla = () => {
		Swal.fire({
		  title: "¿Deseas eliminar a este regla?",
		  text: "Esta acción no se puede deshacer",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: "Si, Eliminar!",
		  cancelButtonText: "No, Cancelar"
		}).then( async (result) => {
		  if (result.value) {
		  	try {
		  		// Eliminar por ID
		  		const { data } = await eliminarRegla({
		  			variables: {
		  				id
		  			}
		  		});

		  		// Mostrar una alerta
			    Swal.fire(
			      'Eliminado!',
			      data.eliminarRegla,
			      'success'
			    )
		  	} catch(error){
		  		console.log(error);
		  	}
		  }
		})
	}

	const editarRegla = () => {
		Router.push({
			pathname: '/editarregla/[id]',
			query: { id }
		})
	}

	return(
		<tr>
			<td className="border px-4 py-2">{tipo}</td>
			<td className="border px-4 py-2">{condicion}</td>
			<td className="border px-4 py-2">{regla}</td>
			<td className="border px-4 py-2">
				<button
					type="button"
					className="flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
					onClick={() => confirmarEliminarRegla()}
				>
					Eliminar
					<svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
						<path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
				</button>
			</td>
			<td className="border px-4 py-2">
				<button
					type="button"
					className="flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
					onClick={() => editarRegla()}
				>
					Editar
					<svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
						<path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
					</svg>
				</button>
			</td>
		</tr>
	);
}

export default Regla;