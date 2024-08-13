
import Contentbox from "./contentbox";
import Productimg from "./Productimg";


function Cardcontainer(){
    return (
        <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
          {/* image div */}
          <Productimg />
          

          {/* content div */}
          <Contentbox />
        </div>
    )
}

export default Cardcontainer;