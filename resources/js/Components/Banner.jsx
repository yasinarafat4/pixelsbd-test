import MyBackgroundImage from '../../images/background-picture.jpeg';
import bannerImg from '../../images/pixels-banner.png';
import Container from './Container';



export default function Banner() {
    return (

        <div style={{
            backgroundImage: `url(${MyBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '600px',
        }}>
            <Container>
                <div className='flex items-center py-20'>
                    <div className='space-y-6'>
                        <h1 className='text-5xl text-slate-800 font-semibold'>Online photo editor for <br /> everyone</h1>
                        <p className='font-sm text-slate-800'>Our online photo editor offers everything you need to enhance and edit photos effortlessly. Experience simple photo editing online for free!

                        </p>
                        <button className='bg-blue-600 text-slate-100 px-6 py-3 hover:bg-blue-700 rounded'>Edit photo for free</button>
                    </div>
                    <div>
                        <img src={bannerImg} alt="Banner Image" />
                    </div>
                </div>
            </Container>
        </div>

    )
}
