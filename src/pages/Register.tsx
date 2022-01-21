import React, {
  useState,
  ChangeEventHandler,
  VoidFunctionComponent,
  FormEventHandler,
} from "react";
import { NavLink } from "react-router-dom";

const Register: VoidFunctionComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange: (input: string) => ChangeEventHandler<HTMLInputElement> =
    (input) => (e) => {
      setFormData({
        ...formData,
        [input]: e.target.value,
      });
    };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">
          Registrese aquí
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Correo Electrónico"
              onChange={handleChange("email")}
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              onChange={handleChange("password")}
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="w-80 inline-flex items-center justify-center px-4 py-2 bg-green-400 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-green-500 active:bg-green-500 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200 disabled:opacity-25 transition"
            >
              Registrarse
            </button>
          </div>
          <div className="mt-6 text-center">
            <NavLink to="/login">¿Ya posee una cuenta? ¡Inicie Sesión!</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
