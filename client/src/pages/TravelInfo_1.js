import React,{useState} from "react";
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const TravelInfo= () => {

  const items = [    "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Visakhapatnam",
  "Indore",
  "Thane",
  "Bhopal",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivali",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Howrah",
  "Ranchi",
  "Gwalior",
  "Jabalpur",
  "Coimbatore",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Chandigarh",
  "Guwahati",
  "Solapur",
  "Hubli-Dharwad",
  "Tiruchirappalli",
  "Bareilly",
  "Moradabad",
  "Mysore",
  "Tiruppur",
  "Gurgaon",
  "Aligarh",
  "Jalandhar",
  "Bhubaneswar",
  "Salem",
  "Warangal",
  "Guntur",
  "Bhiwandi",
  "Saharanpur",
  "Gorakhpur",
  "Bikaner",
  "Amravati",
  "Noida",
  "Jamshedpur",
  "Bhilai",
  "Cuttack",
  "Firozabad",
  "Kochi",
  "Nellore",
  "Bhavnagar",
  "Dehradun",
  "Durgapur",
  "Asansol",
  "Rourkela",
  "Nanded",
  "Kolhapur",
  "Ajmer",
  "Akola",
  "Gulbarga",
  "Jamnagar",
  "Ujjain",
  "Loni",
  "Siliguri",
  "Jhansi",
  "Ulhasnagar",
  "Jammu",
  "Sangli-Miraj & Kupwad",
  "Mangalore",
  "Erode",
  "Belgaum",
  "Ambattur",
  "Tirunelveli",
  "Malegaon",
  "Gaya",
  "Jalgaon",
  "Udaipur",
  "Maheshtala",
  "Davanagere",
  "Kozhikode",
  "Kurnool",
  "Rajpur Sonarpur",
  "Rajahmundry",
  "Bokaro",
  "South Dumdum",
  "Bellary",
  "Patiala",
  "Gopalpur",
  "Agartala",
  "Bhagalpur",
  "Muzaffarnagar",
  "Bhatpara",
  "Panihati",
  "Latur",
  "Dhule",
  "Rohtak",
  "Korba",
  "Bhilwara",
  "Berhampur",
  "Muzaffarpur",
  "Ahmednagar",
  "Mathura",
  "Kollam",
  "Avadi",
  "Kadapa",
  "Anantapur",
  "Kamarhati",
  "Bilaspur",
  "Shahjahanpur",
  "Bijapur",
  "Rampur",
  "Shivamogga",
  "Chandrapur",
  "Junagadh",
  "Thrissur",
  "Alwar",
  "Bardhaman",
  "Kulti",
  "Kakinada",
  "Nizamabad",
  "Parbhani",
  "Tumkur",
  "Hisar",
  "Ozhukarai",
  "Bihar Sharif",
  "Panipat",
  "Darbhanga",
  "Bally",
  "Aizawl",
  "Dewas",
  "Ichalkaranji",
  "Karnal",
  "Bathinda",
  "Jalna",
  "Eluru",
  "Barasat",
  "Kirari Suleman Nagar",
  "Purnia",
  "Satna",
  "Mau",
  "Sonipat",
  "Farrukhabad",
  "Sagar",
  "Rourkela Civil Township",
  "Durg",
  "Imphal",
  "Ratlam",
  "Hapur",
  "Arrah",
  "Karimnagar",
  "Anantapur",
  "Etawah",
  "Ambarnath",
  "North Dumdum",
  "Bharatpur",
  "Begusarai",
  "New Delhi",
  "Gandhidham",
  "Baranagar",
  "Tiruvottiyur",
  "Pondicherry",
  "Sikar",
  "Thoothukudi",
  "Rewa",
  "Mirzapur",
  "Raichur",
  "Pali",
  "Ramagundam",
  "Silchar",
  "Haridwar",
  "Vijayanagaram",
  "Tenali",
  "Nagercoil",
  "Sri Ganganagar",
  "Karawal Nagar",
  "Mango",
  "Thanjavur",
  "Bulandshahr",
  "Uluberia",
  "Katihar",
  "Sambhal",
  "Singrauli",
  "Nadiad",
  "Secunderabad",
  "Naihati",
  "Yamunanagar",
  "Bidhannagar",
  "Pallavaram",
  "Bidar",
  "Munger",
  "Panchkula",
  "Burhanpur",
  "Raurkela Industrial Township",
  "Kharagpur",
  "Dindigul",
  "Gandhinagar",
  "Hospet",
  "Nangloi Jat",
  "Malda",
  "Ongole",
  "Deoghar",
  "Chapra",
  "Haldia",
  "Khandwa",
  "Nandyal",
  "Morena",
  "Amroha",
  "Anand",
  "Bhind",
  "Bhalswa Jahangir Pur",
  "Madhyamgram",
  "Bhiwani",
  "Berhampore",
  "Ambala",
  "Morbi",
  "Fatehpur",
  "Raebareli"];
  const [searchTerm1, setSearchTerm1] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  const [filteredSuggestions1, setFilteredSuggestions1] = useState([]);
  const [filteredSuggestions2, setFilteredSuggestions2] = useState([]);

  const handleChange1 = event => {
    const searchTerm = event.target.value;
    setSearchTerm1(searchTerm);

    const filtered = items.filter(suggestion =>
      suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredSuggestions1(filtered.slice(0,8));
  };

  const handleChange2 = event => {
    const searchTerm = event.target.value;
    setSearchTerm2(searchTerm);

    const filtered = items.filter(suggestion =>
      suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredSuggestions2(filtered.slice(0,8));
  };


  return (
    <>
      <div className="input-group my-3" style={{marginLeft:'9vw',width:'80vw'}}>
        <div>
        <span className="input-group-text"></span>
        <input
          type="text"
          aria-label="Leaving from"
          placeholder="Leaving from"
          className="form-control"
          style={{height:'3.5vw'}}
          value={searchTerm1}
          onChange={handleChange1}
        />
          {filteredSuggestions1.length > 0 && (
        <ul>
          {filteredSuggestions1.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
      </div>
      <div>
        <span className="input-group-text"></span>
        <input
          type="text"
          aria-label="Going to"
          placeholder="Going to"
          value={searchTerm2}
          className="form-control"
          onChange={handleChange2}
        />
        {filteredSuggestions1.length > 0 && (
        <ul>
          {filteredSuggestions2.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}  
        </div>
        
        <input className="btn btn-primary" type="submit" value="Search" style={{width:'7vw'}}/>
      </div>
    </>
  );
};

export default TravelInfo;