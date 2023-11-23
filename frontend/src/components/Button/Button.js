export const Button = ({ children }) => {
	return (
		<button className=" transition ease-in-out duration-300 w-64 border border-solid 1px my-5 mx-auto rounded-md  hover:bg-black hover:text-white ">
			{children}
		</button>
	);
};
