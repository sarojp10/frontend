import axios from "axios"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"

function Home() {
    const [persons,setPersons] = useState([])
    const fetchPersons = async ()=>{
        const response = await axios.get("https://mern3-0-node-profilecard.onrender.com/person")
        // console.log(response.data)
        if(response.status === 200){
            setPersons(response.data.data)
        }
    }
    useEffect(()=>{
        fetchPersons()
    },[])

    console.log(persons)
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-1 flex flex-wrap justify-center items-center gap-5 mt-5 mx-2 md:flex-row">
                    {
                        persons.map((person)=>{
                            return(
                                <Card person={person} fetchPersons={fetchPersons}/>
                            )
                        })
                    }
                </main>

                <Footer />
                
            </div>
        </>
    )
}

export default Home