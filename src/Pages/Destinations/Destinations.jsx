import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Destinations = () => {

    const [data, SetData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/destination/destination")
            .then(res => res.json())
            .then(data => {
                SetData(data)
            })


    }, [])
    console.log(data);

    return (
        <div className="">

            {/* this is the parent div  */}
            <div className="grid grid-cols-1 justify-center lg:grid-cols-4 md:grid-cols-2 gap-2">
                {
                    data.map(res => (

                        console.log(res),
                        <div className=" cursor-pointer w-[370px] h-[450px]  rounded-2xl ">

                            <div className="">
                                <img className="w-full rounded-2xl  h-[300px]" src={res.img} alt="" />

                            </div>
                            <section>

                                <div className="flex justify-between pt-2">
                                    <h3 className="text-lg font-semibold">{res.name}</h3>
                                    <p className="flex items-center"><FaStar></FaStar><span className="pl-1 font-semibold">5.0</span></p>
                                </div>

                                <div className="">
                                    <p className="text-lg">3,550 kilometers away
                                    </p>
                                    <p className="text-lg">Dec 6 – 11
                                    </p>

                                    <h3 className="text-lg font-semibold">$218 3day</h3>
                                </div>

                            </section>



                        </div>

                    ))
                }


            </div>
            {/* this is the parent div ends */}

        </div>
    );
};

export default Destinations;