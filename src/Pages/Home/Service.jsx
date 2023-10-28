import { useEffect } from "react";
import { useState } from "react";
import ServieCard from "./ServieCard";

const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (
        <div>
            <div className="text-center bg-base-200 py-6 space-y-3">
                <h4 className="text-2xl font-bold text-[#FF3811]">Our Service</h4>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="text-xl w-3/5 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {
                        service.map(service => <ServieCard key={service._id} service={service}></ServieCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;