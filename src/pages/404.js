import Navbar from "@/components/Navbar"


export default function Custom404() {
  return (
    <div>
    <Navbar />
    <div style={{width:'100%' , height:'400px' , display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <h1 style={{color:'grey' , fontSize:'40px'}}>
        404 ERROR
    </h1>
    <p>page not found</p>

    </div>
    </div>
  )
}