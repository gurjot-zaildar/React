import React from 'react'
import Card from './components/Card'
import "./App.css"

const App = () => {


let details = [
  {
    image: "https://imgs.search.brave.com/kjAbMXJ5x9hzQWtuGKZE9T2TjFs-vQ3011HXJduDVog/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1sb2dv/LW1lYW5pbmctNTAw/eDI1MC5qcGc",
    company: "Amazon",
    time: "5 days ago",
    role: "Web UI/UX Designer",
    r1: "Full Time",
    r2: "Remote",
    money: "$120/hr",
    location: "Mumbai, India"
  },
  {
    image: "https://imgs.search.brave.com/-klkWISudQR056EiXsVr-3kbyLfWMav0yampMmALfbs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtcHNkL2dv/b2dsZS1pY29uLWlz/b2xhdGVkLTNkLXJl/bmRlci1pbGx1c3Ry/YXRpb25fNDc5ODct/OTc3Ny5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA",
    company: "Google",
    time: "2 days ago",
    role: "Frontend Developer",
    r1: "Full Time",
    r2: "Hybrid",
    money: "$130/hr",
    location: "Bangalore, India"
  },
  {
    image: "https://imgs.search.brave.com/yQDQt2FkloIYigzwri4CYYiD4pIZHbJdHEt0-B0gDWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/ODkyLzY4Mi9zbWFs/bC9taWNyb3NvZnQt/bG9nby1pY29uLWVk/aXRvcmlhbC1mcmVl/LXZlY3Rvci5qcGc",
    company: "Microsoft",
    time: "1 week ago",
    role: "React Developer",
    r1: "Full Time",
    r2: "Remote",
    money: "$125/hr",
    location: "Hyderabad, India"
  },
  {
    image: "https://imgs.search.brave.com/QpQQaUkD0bIAekvPR1Y9cIRFHxNbH1rwZlIsi2kz2D4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MjEwLzg5MC9zbWFs/bC9tZXRhLWxvZ28t/c3F1YXJlLXJvdW5k/ZWQtbWV0YS1sb2dv/LW1ldGEtbG9nby1m/cmVlLWRvd25sb2Fk/LWZyZWUtcG5nLnBu/Zw",
    company: "Meta",
    time: "3 days ago",
    role: "UI Engineer",
    r1: "Full Time",
    r2: "Onsite",
    money: "$140/hr",
    location: "Gurgaon, India"
  },
  {
    image: "https://imgs.search.brave.com/Yon1D_XqhsG_tAfr2ODXisMzrAFN936HalY-aMoacA8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc0LzE0Lzcy/LzM2MF9GXzU3NDE0/NzIwM19kOHpEb3JP/dzU2Slp0N3J2eDNI/TDZERFFpWnBVSlB6/My5qcGc",
    company: "Netflix",
    time: "4 days ago",
    role: "Web Designer",
    r1: "Contract",
    r2: "Remote",
    money: "$110/hr",
    location: "Pune, India"
  },
  {
    image: "https://imgs.search.brave.com/17Z08VaemRypEXW6ZoaC2OUFu3e5iT08tP7EURsEw9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
    company: "Adobe",
    time: "6 days ago",
    role: "UX Designer",
    r1: "Full Time",
    r2: "Hybrid",
    money: "$115/hr",
    location: "Noida, India"
  },
  {
    image: "https://imgs.search.brave.com/ZyeQqbqlduDKajfQ2lyv0WJ9qgnLdLO3GRY7tqNT1yQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/MTQ1NzU3MC9waG90/by9zeW1ib2wtMDgt/bWF5LTIwMjQtYmFk/ZW4tdyVDMyVCQ3J0/dGVtYmVyZy1yb3R0/d2VpbC10aGUtc3Bv/dGlmeS1hcHAtY2Fu/LWJlLXNlZW4tb24t/dGhlLWRpc3BsYXkt/b2YtYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VGd1aW5L/X00zV3JiazdORzI3/WUFQbi1Rc0pMNTN6/ZlNYOS1JZmdGUUVp/TT0",
    company: "Spotify",
    time: "1 day ago",
    role: "Frontend Engineer",
    r1: "Full Time",
    r2: "Remote",
    money: "$135/hr",
    location: "Delhi, India"
  },
  {
    image: "https://imgs.search.brave.com/GUQBj1kVOQHy29SgKLqRG-eBP6ArgdbC40MDPTvhiVg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI4LzEvYWlyYm5i/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTI4NDkw/Ny5wbmc",
    company: "Airbnb",
    time: "2 weeks ago",
    role: "Product Designer",
    r1: "Full Time",
    r2: "Remote",
    money: "$128/hr",
    location: "Chandigarh, India"
  },
  {
    image: "https://imgs.search.brave.com/atFeEvC46lMzMJt0vhkGOF4hHd1Tp5g_PCaDFzVm0_0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE4LzUxLzc5LzE5/LzM2MF9GXzE4NTE3/OTE5OTJfaWFZNFRr/OTlMNmpha1Y0UlI1/TVhNYWFtbXRJVGhn/QnQuanBn",
    company: "Uber",
    time: "3 days ago",
    role: "Frontend Developer",
    r1: "Internship",
    r2: "Hybrid",
    money: "$90/hr",
    location: "Bangalore, India"
  },
  {
    image: "https://imgs.search.brave.com/dTH1JjOLeR28vBYsQf6I9L71Wo4mvGPXYZYMAZiCaUc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n",
    company: "LinkedIn",
    time: "5 days ago",
    role: "JavaScript Developer",
    r1: "Full Time",
    r2: "Remote",
    money: "$118/hr",
    location: "Mumbai, India"
  }
];

  return (
    <div className='cad'>
{details.map(function(elm,idx){
  return <div key={idx}> <Card image={elm.image} company={elm.company} time={elm.time} role={elm.role} r1={elm.r1} r2={elm.r2} money={elm.money} location={elm.location} /></div>
})}
      
    </div>
  )
}

export default App
