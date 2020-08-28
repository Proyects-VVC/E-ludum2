import Head from 'next/head';
import Layout from '../components/Layout';
import Regla from '../components/Regla';

import { useRouter } from 'next/router';
import Link from 'next/link';



const Index = () => {

	// Routing
	const router = useRouter();	

	// Consulta de Apollo
	// const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO);


	// Proteger que no accedamos a data antes de tener resultados


	// //Si no hay informacion
	// if(!data.obtenerReglasUsuario) {
	// 	return router.push('/login');
	// }


	return(
		<div>
			<Layout>
				<h1 className="text-2xl text-gray-800 font-light">Reglas</h1>

				<Link href="/nuevaregla">
					<a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold">Nueva Regla</a>
				</Link>

				<table className="table-auto shadow-md mt-10 w-full w-lg">
					<thead className="bg-gray-800">
						<tr className="text-white">
							<th className="w-1/5 py-2">Tipo</th>
							<th className="w-1/5 py-2">condicion</th>
							<th className="w-1/5 py-2">Regla</th>
							<th className="w-1/5 py-2">Eliminar</th>
							<th className="w-1/5 py-2">Editar</th>
						</tr>
					</thead>
					<tbody className="bg-white">
					
					</tbody>
				</table>
			</Layout>
		</div>		
	)
}

export default Index;
