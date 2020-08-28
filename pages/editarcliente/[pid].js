import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const OBTENER_REGLA = gql `
	query obtenerRegla($id: ID!) {
		obtenerRegla(id: $id) {
			tipo
			condicion
			regla
		}
	}
`;

const ACTUALIZAR_REGLA = gql `
	mutation actualizarRegla($id: ID!, $input: ReglaInput) {
		actualizarRegla(id: $id, input: $input) {
			tipo
			condicion
			regla
		}
	}
`;

const EditarRegla = () => {

	// Obtener el ID actual
	const router = useRouter();
	const { query: { id } } = router;
	//console.log(id);

	// Consultar para obtener el regla
	const { data, loading, error } = useQuery(OBTENER_REGLA, {
		variables: {
			id
		}
	});

	// Actualizar el regla
	const [ actualizarRegla ] = useMutation(ACTUALIZAR_REGLA);

	// Schema de validacion
	const schemaValidacion = Yup.object({
								tipo: Yup.string()
										   .required("El tipo de la regla es obligatorio"),
								condicion: Yup.string()
										   .required("La condicion de la regla es obligatoria"),
								regla: Yup.string()
										   .required("El campo regla del regla es obligatorio")
							})

	// Proteger que no accedamos a data antes de tener resultados
	if(loading) return 'Cargando...';

	//console.log(data.obtenerRegla)

	const { obtenerRegla } = data;

	// Modifica el regla en la BD
	const actualizarInfoRegla = async valores => {
		const { tipo, condicion, regla } = valores;

		try {
			const { data } = await actualizarRegla({
				variables: {
					id,
					input: {
						tipo,
						condicion,
						regla
					}
				}
			});

			//console.log(data);
			// TODO: Sweet alert
			Swal.fire(
		      'Actualizado!',
		      'La regla se actualizó correctamente',
		      'success'
		    )

			// TODO: Redireccion
			router.push('/');
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<Layout>
			<h1 className="text-2xl text-gray-800 font-light">Editar Regla</h1>

			<div className="flex justify-center mt-5">
				<div className="w-full max-w-lg">
					<Formik
						validationSchema={ schemaValidacion }
						enableReinitialize
						initialValues={ obtenerRegla }
						onSubmit={ ( valores ) => {
							actualizarInfoRegla(valores)
						}}
					>
						{props => {
							//console.log(props);
							return(
								<form 
									className="bg-white shadow-md px-8 pt-6 pb-8 mb-4" 
									onSubmit={props.handleSubmit}
								>
									<div className="mb-4">
										<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo">
											Tipo
										</label>
										<input 
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
											id="tipo" 
											type="text" 
											placeholder="Tipo Regla"
											onChange={props.handleChange}
											onBlur={props.handleBlur}
											value={props.values.tipo}
										/>
									</div>

									{ props.touched.tipo && props.errors.tipo ? (
									  	<div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
									  		<p className="font-bold">Error</p>
									  		<p>{props.errors.tipo}</p>
									  	</div>
									  ) : null
									}

									<div className="mb-4">
										<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="condicion">
											Condicion
										</label>
										<input 
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
											id="condicion" 
											type="text" 
											placeholder="Condicion Regla"
											onChange={props.handleChange}
											onBlur={props.handleBlur}
											value={props.values.condicion}
										/>
									</div>

									{ props.touched.condicion && props.errors.condicion ? (
									  	<div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
									  		<p className="font-bold">Error</p>
									  		<p>{props.errors.condicion}</p>
									  	</div>
									  ) : null
									}

									<div className="mb-4">
										<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="regla">
											Regla
										</label>
										<input 
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
											id="regla" 
											type="text" 
											placeholder="Regla"
											onChange={props.handleChange}
											onBlur={props.handleBlur}
											value={props.values.regla}
										/>
									</div>

									{ props.touched.regla && props.errors.regla ? (
									  	<div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
									  		<p className="font-bold">Error</p>
									  		<p>{props.errors.regla}</p>
									  	</div>
									  ) : null
									}

									<input
										type="submit"
										className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 cursor-pointer"
										value="Editar Regla"
									/>
								</form>
							)
						}}
					</Formik>
				</div>
			</div>			
		</Layout>
	);
}

export default EditarRegla;