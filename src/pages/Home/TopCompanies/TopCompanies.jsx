import { useEffect, useState } from "react";
import SingleCompany from "../../../components/SingleCompany/SingleCompany";


const TopCompanies = () => {

    const [companies, setCompanies] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/topCompanies')
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, [])

    return (
        <div className="mb-10 w-9/12 mx-auto">
            <h1 className="text-center text-4xl mt-20 font-bold mb-5">Find Out Our Top <span className="text-blue-600">Companies</span></h1>
            <p className="text-center text-xl text-blue-600 mb-10">Here you will be able to see all the top companies of this website. We are affiliated with the top companies so that we may provide best job offers for experienced employee and we also focus on giving opportunities to a fresher</p>
            <div className='flex justify-center'>
                <div className="grid md:grid-cols-3 gap-4">
                    {
                        companies.map(singleCompany => <SingleCompany
                            key={singleCompany._id}
                            singleCompany={singleCompany}
                        ></SingleCompany>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopCompanies;