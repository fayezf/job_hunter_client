import bannerImage from '../../../assets/images/easy-job-banner-image.jpg'

const Banner = () => {
    return (
        <div className='h-[800px] bg-cover -mt-24' style={{ backgroundImage: `url(${bannerImage})` }}>
            
        </div>
    );
};

export default Banner;