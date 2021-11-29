import './App.css';
import MyProfile from './Components/Profile/MyProfile';
import photo from './assets/7.jpg';
import PropTypes from 'prop-types';



function App() {
  const handleName =(e)=> {e.preventDefault(); alert("khouloud Mekni")};
  const styleContent = { color:"black", textAlign:'center'}
  return (

    <div className="App" style={styleContent}>
      <button  onClick={handleName}>  Click Here </button>  
      
    <MyProfile
      fullName = "khouloud Mekni"
    bio="FullStack JS"
    profession="Web Developer"
    >
    <img src ={photo} alt="mImage"/>
    </MyProfile>
    
    </div>
  );
}
MyProfile.defaultProps={
  fullName : "khouloud Mekni",
  bio : "FullStack JS",
  profession:"Web Developer",
}
MyProfile.propTypes={
  fullName : PropTypes.string,
  bio : PropTypes.string,
  profession:PropTypes.string
}

export default App;
