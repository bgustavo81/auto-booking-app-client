import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import Footer from "./Footer";
import "react-multi-carousel/lib/styles.css";

const responsiveOne = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const responsiveTwo = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1600, min: 464 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Landing = () => {
    return (
        <section className="">
            <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/landing_top.jpg" alt="Landing banner, Volkswagon bus and Mountains"></img>
            <div className="flex items-center justify-center w-1/4 h-24 lg:h-18 lg:h-10 bg-red-400 m-auto relative -top-12 lg:-top-6 sm:-top-4 pb-2 rounded-lg">
                <h1 className="text-4xl xl:text-3xl lg:text-2xl md:text-lg sm:text-sm font-bold">Let's go places</h1>
            </div>


            <div>
            <p className="text-3xl md:text-xl font-bold text-red-500 text-center mb-14 lg:mb-0 lg:mt-8 lg:px-2">Explore the world's largest car sharing marketplace.</p>
            <h2 className="text-xl font-bold  text-center pt-8 py-2">Browse By Make</h2>
                <div className="flex justify-center mb-32">
                    <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsiveOne}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="w-10/12"
                    >
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/jeep.jpg" alt="Jeep wagon" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Jeep</button>
                        </Link>
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/subaru.jpg" alt="Subaru car" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Subaru</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/ferrari.jpg" alt="Ferrari sports car" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Ferrari</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/tesla.jpg" alt="Telsa car" className="shadow-md rounded-t-md border-b" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Tesla</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/lambo.jpg" alt="Lamborghini sports car" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Lamborghini</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/wagon.jpg" alt="mercedes-benz g wagon" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Mercedes-Benz</button>
                        </Link>                    
                    </div>
                    </Carousel>
                </div>

                <div className="flex lg:flex-col lg:items-center  justify-center mb-32">
                    <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/jeep_salt_flats.jpg" alt="Jeep in Booneville salt flats" className="w-1/3 rounded-lg shadow-lg lg:mb-12 lg:w-2/3"></img>
                    <div className="text-center w-1/3 px-4 my-auto lg:w-2/3">
                        <h2 className="text-3xl lg:text-2xl font-bold mb-4">Find the perfect car to conquer the <span className="text-red-500">great outdoors.</span></h2>
                        <p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                        <button className="justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 mt-4 hover:text-red-500">Browse cars</button>
                    </div>
                </div>

                <h2 className="text-2xl font-bold  text-center pt-8 py-2 mt-16">Personalize your destination</h2>
                <div className="flex justify-center mb-48">
                    <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={true}
                    responsive={responsiveTwo}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="w-10/12"
                    >
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/los-angeles.jpg" alt="Los Angeles" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Los Angeles</button>
                        </Link>
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/miami.jpg" alt="Miami" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Miami</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/sydney.jpg" alt="Sydney" className="shadow-md rounded-t-md border-b" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Sydney</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/london.jpg" alt="London" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">London</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/toronto.jpg" alt="Toronto" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Toronto</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/atlanta.jpg" alt="Atlanta" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Atlanta</button>
                        </Link>                    
                    </div>

                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/tokyo.jpg" alt="Tokyo" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Tokyo</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/austin.jpg" alt="Austin" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Austin</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/paris.jpg" alt="Paris" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Paris</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/rome.jpg" alt="Rome" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Rome</button>
                        </Link>                    
                    </div>
                    </Carousel>
                </div>
                
                <div className="flex items-center justify-center h-20 text-red-500 m-auto relative -top-12 pb-2 rounded-2xl">
                    <h2 className="text-4xl lg:text-2xl font-bold">Fuel your daydreams</h2>
                </div>
                <p className="text-center text-xl lg:text-lg lg:px-2 lg:-mt-10">Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.</p>
                <div className="flex justify-center mt-12 mb-12">
                    <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 hover:text-red-500">Explore Travelogue</button>
                </div>



                <div className=" flex-col justify-start w-1/2 mx-auto lg:w-2/3">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/vw_mountains.jpg" alt="Volkswagon in the mountains" className="w-full rounded-lg shadow-lg" />
                        <div className="relative -top-24 lg:-top-16 bg-red-400 w-2/3 h-1/2 p-6 mx-auto text-center rounded-md shadow-md">
                                <p className="font-bold text-3xl lg:text-xl">FEATURED TRAVELOGUE</p>
                                <h2 className="text-lg text-white lg:text-sm">An Olympic experience in Washington</h2>
                                <p className="text-white lg:text-sm">Discover the epic waterfalls, moody weather, and lush forests of coastal Washington.</p>
                                <Link to="/" className="underline font-bold hover:shadow-white">Read more</Link>
                        </div>
                </div>


                <h2 className="text-2xl font-bold  text-center pt-8 py-2 mt-16">Personalize your experience</h2>
                <div className="flex justify-center mb-48 lg:mb-24">
                    <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsiveOne}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="w-10/12"
                    >
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/jeep.jpg" alt="Jeep wagon" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">All Wheel Drive</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/tesla.jpg" alt="Tesla car" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Electric</button>
                        </Link>
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/luxury.jpg" alt="Luxury vehicle" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Luxury</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/pet-friendly.jpg" alt="Dog looking out car window" className="shadow-md rounded-t-md border-b" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Pet Friendly</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/convertible.jpg" alt="Convertible car" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Convertible</button>
                        </Link>                    
                    </div>
                    <div className="rounded-xl px-3 py-10 bg-white text-xl font-medium text-gray-700">
                        <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/classic-car.jpg" alt="Classic car" className="shadow-md rounded-t-md" />
                        <Link to="/">
                            <button className="w-full rounded-b-md h-14 bg-white shadow-xl shadow-gray-300 hover:text-red-500">Classic Cars</button>
                        </Link>                    
                    </div>
                    </Carousel>
                </div>

                <div className="flex lg:flex-col lg:items-center justify-center">
                    <div className="text-center w-1/3 px-4 my-auto lg:w-2/3">
                        <h2 className="text-3xl font-bold mb-4">Shop Vroom gift cards</h2>
                        <p>Introducing Turo gift cards! Give the gift of exploration or help make any special occasion extra-memorable.</p>
                        <button className="justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-100 mt-4 hover:text-red-500">Shop Gift Cards</button>
                    </div>
                      <img src="https://my-foto-bucket-123.s3.us-east-2.amazonaws.com/static/classic_with_ribbon.jpg" alt="Classic car with ribbon" className="w-1/3 lg:w-2/3 rounded-lg shadow-lg"></img>  
                </div>
            </div>

            <Footer />
        </section>
    )
};

export default Landing;
