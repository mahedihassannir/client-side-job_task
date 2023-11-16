import { Link } from "react-router-dom";

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const from = e.target;

        const username = from.username.value
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value



        console.log({ username, name, email, password });
    }

    return (
        <div className="w-full h-screen">

            <section className="lg:flex">


                <div className="hidden lg:block  lg:w-1/3  bg-red-100">

                    <img src="https://wallpapercave.com/dwp2x/wp4782898.jpg" alt="" />
                    <iframe className="w-full h-96" src="https://lottie.host/?file=001b41b1-15b5-4dd6-bde4-b10e656a40f4/LPuAsiDSzH.json"></iframe>

                </div>
                {/* this is the login input  and some components  */}

                <form onSubmit={handleSubmit} className=" w-full lg:w-1/2 lg:pl-36 pt-10 h-screen bg-white">


                    <div className="flex mx-1 gap-2 lg:gap-10">

                        <div className="w-1/2">

                            <label htmlFor="" className="">
                                <span className="font-semibold text-lg ">Name</span>
                            </label>
                            <br />
                            <input name="name" className=" pl-4 transition duration-300 ease-in-out hover:shadow-pink-300 border-2 hover:shadow-md rounded-md py-3 w-full lg:px-5 text-lg font-semibold" type="text" placeholder="Name" required />

                        </div>
                        <div className="w-1/2">

                            <label htmlFor="" className="">
                                <span className="font-semibold text-lg ">Username</span>
                            </label>
                            <br />
                            <input name="username" className=" transition duration-300 ease-in-out hover:shadow-pink-300 border-2 hover:shadow-md rounded-md py-3 w-full pl-4 lg:px-5 text-lg font-semibold" type="text" placeholder="Username" required />

                        </div>


                    </div>

                    <div className="mt-10">

                        <div className="">

                            <label htmlFor="" className="">
                                <span className="font-semibold text-lg ">Email</span>
                            </label>
                            <br />
                            <input name="email" className="w-full mx-1 transition duration-300 ease-in-out hover:shadow-pink-300 border-2 hover:shadow-md rounded-md py-3 lg:w-[563px] pl-4 text-lg font-semibold" type="email" placeholder="email@" required />

                        </div>


                    </div>

                    <div className="mt-10">

                        <div className="">

                            <label htmlFor="" className="">
                                <span className="font-semibold text-lg ">Password</span>
                            </label>
                            <br />
                            <input name="password" className="w-full px-1 transition duration-300 ease-in-out hover:shadow-pink-300 border-2 hover:shadow-md rounded-md py-3 lg:w-[563px] pl-4 text-lg font-semibold" type="password" placeholder="6+ characters" required />

                        </div>


                    </div>

                    {/* this is for the checkbox */}
                    <div className="flex items-center mt-4 gap-2">



                        <input type="checkbox" />
                        <p>I agree with Dribbble's Terms of Service, Privacy Policy, <br /> and default Notification Settings. </p>

                    </div>
                    {/* this is for the checkbox ends */}

                    {/* this is for the btn  */}
                    <div className="mt-10">

                        <button className=" bg-black text-white text-lg font-semibold hover:bg-yellow-700 w-full lg:w-[560px] h-20 rounded-full" type="submit">
                            Create Account
                        </button>

                    </div>
                    {/* this is for the btn  rends */}


                    <Link to="/login" className=" text-center mt-2 -pl-4">
                        <h3 className="text-lg ">Already have an account ? <span className=" font-semibold underline">sing in</span></h3>
                    </Link>




                </form>

            </section>



        </div>
    );
};

export default Login;