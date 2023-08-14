import './SingleJob.css'

const SingleJob = ({ singleJob }) => {

    const { title, company, location, experience, postedDate, skills } = singleJob

    return (

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500">{title}</h5>
            <p className="font-normal ">Company: {company}</p>
            <p className="font-normal ">Location: {location}</p>
            <p className="font-normal ">Experience: {experience}</p>
            <p className="mb-3 font-normal ">Posted: {postedDate}</p>
            <p className=" mb-3 font-semibold text-xl text-center">Required Skills</p>
            <div className="mb-3 flex flex-wrap gap-2 p-2 rounded-lg">
                {
                    skills.map(skill => <p
                        key={skill}
                        className="p-2 border-2 border-blue-500 ms-2 font-semibold rounded-full text-blue-500"
                    >{skill}</p>)
                }
            </div>
            <button className="inline-flex items-center justify-between px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:focus:ring-blue-800 apply-now-btn">Apply Now
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>
    );
};

export default SingleJob;

