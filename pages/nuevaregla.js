import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const NUEVA_REGLA = gql `
	mutation nuevaRegla($input: ReglaInput) {
		nuevaRegla(input: $input) {
			id
			tipo
			condicion
			regla
		}
	}
`;

const OBTENER_REGLAS_USUARIO = gql `
	query obtenerReglasVendedor {
		obtenerReglasVendedor {
			id
			tipo
			condicion
			regla
		}
	}
`;

const NuevoRegla = () => {

	// Routing
	const router = useRouter();

	// State para el mensaje
	const [mensaje, guardarMensaje] = useState(null);

	// Mutation para crear nuevas Reglas
	const [ nuevaRegla ] = useMutation(NUEVA_REGLA, {
		update(cache, { data: { nuevaRegla} }) {
			// Obtener el objeto de cache que deseamos actualizar
			const { obtenerReglasVendedor } = cache.readQuery({ query: OBTENER_REGLAS_USUARIO });

			// Reescribimos el cache ( el cache nunca se debe modificar )
			cache.writeQuery({
				query: OBTENER_REGLAS_USUARIO,
				data: {
					obtenerReglasVendedor: [...obtenerReglasVendedor, nuevaRegla]
				}
			})
		}
	});

	const formik = useFormik({
		initialValues: {
			tipo: '',
			condicion: '',
			regla: ''
		},
		validationSchema: Yup.object({
			tipo: Yup.string()
					   .required("El tipo de la regla es obligatorio"),
			condicion: Yup.string()
					   .required("La condicion de la regla es obligatoria"),
			regla: Yup.string()
					   .required("El campo regla es obligatorio")
		}),
		onSubmit: async valores => {
			
			const { tipo, condicion, regla} = valores;	

			try {
				const { data } = await nuevaRegla({
					variables: {
						input: {
							tipo,
							condicion,
							regla
						}
					}
				});
				//console.log(data.nuevaRegla);
				// Redireccionar hacia reglas
				router.push('/');
			} catch(error) {
				guardarMensaje(error.message.replace('GraphQL error: ', ''));

				setTimeout(() => {
					guardarMensaje(null);
				}, 2000);
			}
		}
	});

	const mostrarMensaje = () => {
		return(
			<div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
				<p>{mensaje}</p>
			</div>
		)
	};	

	return(
		<Layout>
			<h1 className="text-2xl text-gray-800 font-light">Nueva Regla</h1>

			{mensaje && mostrarMensaje() }

			<div className="flex justify-center mt-5">
				<div className="w-full max-w-lg">
					<form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo">
								Tipo
							</label>
							<input 
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
								id="tipo" 
								type="text" 
								placeholder="Tipo Regla"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.tipo}
							/>
						</div>

						{ formik.touched.tipo && formik.errors.tipo ? (
						  	<div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
						  		<p className="font-bold">Error</p>
						  		<p>{formik.errors.tipo}</p>
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
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.condicion}
							/>
						</div>

						{ formik.touched.condicion && formik.errors.condicion ? (
						  	<div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
						  		<p className="font-bold">Error</p>
						  		<p>{formik.errors.condicion}</p>
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
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.regla}
							/>
						</div>

						{ formik.touched.regla && formik.errors.regla ? (
						  	<div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
						  		<p className="font-bold">Error</p>
						  		<p>{formik.errors.regla}</p>
						  	</div>
						  ) : null
						}

						<input
							type="submit"
							className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 cursor-pointer"
							value="Registrar Regla"
						/>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default NuevoRegla;