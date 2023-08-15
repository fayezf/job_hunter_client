

const AboutUs = () => {
    return (
        <div className='w-9/12 mx-auto mt-20 mb-20'>
            <h4 className="text-3xl text-center font-semibold mb-2">Get to Know Us</h4>
            <div className='md:flex items-center'>
                <div className='md:w-1/2'>
                    <h4 className='text-teal-600 font-semibold text-2xl'>Who are we?</h4>
                    <h2 className='text-4xl font-bold mb-5'>We provide best jobs in technology field</h2>
                    <p className='text-xl'>Welcome to CareerFy, your ultimate destination for navigating the dynamic landscape of career opportunities. Whether you're a fresh graduate looking to kick-start your journey or an experienced professional seeking your next challenge, JobConnect connects you with a diverse range of job listings across industries.</p>
                    <br />
                    <p className='text-xl mb-5'>With an intuitive interface, CareerFy makes job hunting a breeze. Browse through an extensive array of job openings, filter by location, industry, or experience level, and apply seamlessly with just a few clicks.</p>
                    <hr className='mb-5' />
                    <div className='md:flex justify-between text-xl mb-10'>
                        <div>
                            <p><span className='font-semibold'>Name:</span> CareerFy</p>
                            <p><span className='font-semibold'>Email:</span> job@portal.com</p>
                        </div>
                        <div>
                            <p><span className='font-semibold'>Employees:</span> 220</p>
                            <p><span className='font-semibold'>From:</span> Jatrabari, Dhaka - 1362</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;