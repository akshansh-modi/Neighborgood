import postcardimg from "/img/illustration.png";
import Button from "../layouts/Button";
const Postcard = () => {
  return (
    <>
      <div className="min-h-screen dark:bg-slate-500 dark-text mt-4   ">
        <div className="  flex flex-col lg:flex-row justify-between items-center  lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
          <div className=" w-full lg:w-3/4">
            <img src={postcardimg}></img>
          </div>
          <div className=" w-full lg:w-3/4 space-y-4">
            <h1 className=" text-4xl  font-semibold text-center lg:text-start">
              Our Postcards
            </h1>
            <div className="mt-8 flex flex-col gap-4">
              <p className="text-color-brown dark:text-color-light">
                Explore our unique collection of postcards and share a slice of
                your world with your neighbors. Let&apos;s bridge distances one
                postcard at a time. Send a smile, share a story, and strengthen
                our community bonds. Pick your favorite, add a personal touch,
                and let the joy spread to every doorstep. Explore, connect,
                cherish!
              </p>
            </div> 
          </div>
          <div className=" mt-4 lg:mt-0">
          <Button title="View Postcards" />
        </div>
        </div>
      </div>
    </>
  );
};

export default Postcard;
