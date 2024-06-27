import React, {useState} from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Progress from './components/topbar'
import Form1 from './components/form1'
import Form2 from './components/form2'
import Form3 from './components/form3'
import PrintPage from './components/printpage'
import axios from 'axios'

import Home from './home'
import AboutUs from './about'
import Scholar from './scholarship'
import StudentLoan from './studentLoan'
import MessageForStudent from './messageForStudents'
import Events from './events'
import Gallery from './gallery'
import Internship from './internship'
import ContactUs from './contactUs'
import Courses from './courses'
import GraphicDesigning from './courses_component/GraphicDesign'
import ASPNet from './courses_component/ASP_Net'
import Aintelligence from './courses_component/A_intelligence'
import DataScience from './courses_component/DataScience'
import DigitalMarketing from './courses_component/DigitalMarketing'
import GameDevelopment from './courses_component/GameDevelopment'
import IELTS from './courses_component/IELTS'
import Ptesting from './courses_component/P_testing'
import SEO from './courses_component/SEO'
import SpokenEnglish from './courses_component/SpokenEnglish'
import UIUXdesigning from './courses_component/UI_UX_designing'
import AmazonAV from './courses_component/amazon_AV'
import Aviationmanagemant from './courses_component/aviation_managemant'
import CloudComputing from './courses_component/cloudComputing'
import EthicalHacker from './courses_component/ethicalHacker'
import Freelancing from './courses_component/freelancing'
import FullStackWD from './courses_component/fullStack_WD'
import InternetOfThings from './courses_component/internetOfThings'
import PythonProgram from './courses_component/pythonProgram'
import VideoEditing from './courses_component/videoEditing'
import WordPressD from './courses_component/wordPress_D'
import Applynow from './applynow'
import Cart from './components/Cart/Cart'

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(true);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };



  const [getInfo, setGetInfo] = useState("Apply Now For Course")
  const [progress, setProgress] = useState(33)
  const [step1, setStep1] = useState(false)
  const [step2, setStep2] = useState(false)
  const [step3, setStep3] = useState(false)
  const [showPage, setShowPage] = useState(false)
  const [homePage, setHomePage] = useState(true)
  const [data, setData] = useState()
  console.log(data,'data');
  const [courses, setCourses] = useState([
    {
      price: "00"
    },
  ])

  const [SelectData, setSelectData] = useState([
    []
  ]); 
  
  const handleChange = (e) => {
    
    setData({ ...data, [e.target.name]: e.target.value });
    if(e.target.id === "3000.00" || e.target.id === "6000.00" || e.target.id === "12000.00"){
      setData({ ...data, [e.target.name]: e.target.value, ...data, price: e.target.id })
      let obj = {
        course: e.target.value,
        price: e.target.id
      }
      setCourses([
        ...courses, obj
      ])
    }    
  }

  const handleselect = (e) =>{
    if(e.target.id === "0"){
      setSelectData([
          [
            {
              unique: "course_select1",
              label: "Course Interest 1"},
          ]
        ])
    }
    else if(e.target.id === "1"){
      setSelectData([
          [
            {
              unique: "course_select1",
              label: "Course Interest 1"},
            {
              unique: "course_select2",
              label: "Course Interest 2"},
          ]
        ])
    }
    else if(e.target.id === "2"){
      setSelectData([
          [
            {
              unique: "course_select1",
              label: "Course Interest 1"},
            {
              unique: "course_select2",
              label: "Course Interest 2"},
            {
              unique: "course_select3",
              label: "Course Interest 3"},
          ] 
        ])
    }
    else{
      setSelectData([
          [
            {
              unique: "course_select1",
              label: "Course Interest 1"},
            {
              unique: "course_select2",
              label: "Course Interest 2"},
            {
              unique: "course_select3",
              label: "Course Interest 3"},
            {
              unique: "course_select4",
              label: "Course Interest 4"},
          ]
        ])
    }
  }



  const handlestep1 = () => {
    // if(!data.email){
    //   alert("Please enter you email")
    // }
    // else if(!data.name){
    //   alert("Please enter you name")
    // }
    // else if(!data.number){
    //   alert("Please enter you number")
    // }
    // else if(!data.intrest){
    //   alert("Please enter you intrest")
    // }
    // else if(!data.password){
    //   alert("Please enter you password")
    // }
    // else if(!data.password_confirm){
    //   alert("Please enter you confirm password")
    // }
    // else if(data.password !== data.password_confirm){
    //   alert("Please Retype correct password for confirm")
    // }
    // else{
      // if(data.email.includes("@") && data.email.includes(".")){

          axios.post("https://sheet.best/api/sheets/c01e600d-6886-4fbd-8dbe-c5895cfc5ae1", data).then((resp)=>{
            console.log(resp, "data1");
          })
          setStep1(false)
          setStep2(true)
          setProgress(66)
          setGetInfo("Personal Info")
        
        
      // }
      // else{alert("Enter Correct Email")}
      
    // }
  }
  
  const handlestep2 = () => {
    // if(!data.CNIC){
    //   alert("Please enter you CNIC")
    // }
    // else if(!data.city){
    //   alert("Please enter you Gender")
    // }
    // else if(!data.DOB){
    //   alert("Please enter you DOB")
    // }
    // else if(!data.city){
    //   alert("Please enter you City")
    // }
    // else{
        setStep2(false)
        setStep3(true)
        setProgress(100)
        setGetInfo("Course Selection")
    // }
  }

  const handlestep3 = () => {
    // if(data.class_type && data.course_select1 && data.price){
      axios.post("https://sheet.best/api/sheets/c01e600d-6886-4fbd-8dbe-c5895cfc5ae1", data).then((resp)=>{
        console.log(resp, "data2");
      })
      setStep3(false)
      setShowPage(true)
    // }
  }

  const handleCheck = (e) => {
    // if(e.target.name === "email"){
        setData({...data, [e.target.name]: e.target.value})
            //   axios.get("https://sheet.best/api/sheets/811776a8-706a-477d-a0f8-1d0a3bedb014").then(res => {
            //     setData(newData)
            //     axios.post("ht3tps://sheet.best/api/sheets/811776a8-706a-477d-a0f8-1d0a3bedb014", data).then((resp)=>{
            //     console.log(resp, "success");
            //   })
            // })
            // const newData =
            //  res.
            //  data.filter((e) => {
            //   return e.email === data.email
            // })
      // }
      // else{
        // setData({...data, [e.target.name]: e.target.value})
      // }
        
  }

  const totalPrice = courses.reduce((curNumber, item) => {
    return curNumber + +item.price;
  }, 0);


  const handleMove = () => {
    setStep1(true)
    setHomePage(false)
    setCartIsShown(false)
  }
  const handleBack = () => {
    setShowPage(false)
    setHomePage(true)
  }

  // const getData = ()=>{
  //   console.log("fn is running");
  //   axios.get("https://sheet.best/api/sheets/811776a8-706a-477d-a0f8-1d0a3bedb014").then((resp)=>{
  //     console.log(resp.data);
  //   })
  // }

  return(
      <>
      {/* <button onClick={getData}>getData</button> */}
          {cartIsShown && <Cart handleMove={handleMove} onClose={hideCartHandler} />}
          {!homePage && <Progress progress={progress} getInfo={getInfo} />}
          {step1 && <Form1 handleCheck={handleCheck} handlestep1={handlestep1} />} 
          {step2 && <Form2 handleCheck={handleCheck} handlestep2={handlestep2} />}
          {step3 && <Form3 handleCheck={handleCheck} handlestep3={handlestep3} data={data} SelectData={SelectData} handleChange={handleChange} handleselect={handleselect} />}
          {showPage && <PrintPage handleBack={handleBack} totalPrice={totalPrice} data={data} />}
        <BrowserRouter>
          <Routes>
              {homePage && 
                <>
                  <Route path='/' element={<Home handleMove={handleMove} />} />
                  <Route path='/about-us' element={<AboutUs />} />
                  <Route path='/courses' element={<Courses />} />
                  <Route path='/graphic-designing' element={<GraphicDesigning handleMove={handleMove} />} />
                  <Route path='/video-editing' element={<VideoEditing handleMove={handleMove} />} />
                  <Route path='/python-programming' element={<PythonProgram handleMove={handleMove} />} />
                  <Route path='/artificial-intelligence' element={<Aintelligence handleMove={handleMove} />} />
                  <Route path='/amazon-virtual-assistant' element={<AmazonAV handleMove={handleMove} />} />
                  <Route path='/cloud-computing' element={<CloudComputing handleMove={handleMove} />} />
                  <Route path='/full-stack-web-development' element={<FullStackWD handleMove={handleMove} />} />
                  <Route path='/penetration-testing' element={<Ptesting handleMove={handleMove} />} />
                  <Route path='/aviation-management' element={<Aviationmanagemant handleMove={handleMove} />} />
                  <Route path='/ethical-hacker' element={<EthicalHacker handleMove={handleMove} />} />
                  <Route path='/wordpress-development' element={<WordPressD handleMove={handleMove} />} />
                  <Route path='/ui-ux-designing' element={<UIUXdesigning handleMove={handleMove} />} />
                  <Route path='/seo' element={<SEO handleMove={handleMove} />} />
                  <Route path='/internet-of-things' element={<InternetOfThings handleMove={handleMove} />} />
                  <Route path='/freelancing' element={<Freelancing handleMove={handleMove} />} />
                  <Route path='/digital-marketing' element={<DigitalMarketing handleMove={handleMove} />} />
                  <Route path='/data-science' element={<DataScience handleMove={handleMove} />} />
                  <Route path='/asp.net' element={<ASPNet handleMove={handleMove} />} />
                  <Route path='/ielts' element={<IELTS handleMove={handleMove} />} />
                  <Route path='/spoken-english' element={<SpokenEnglish handleMove={handleMove} />} />
                  <Route path='/game-development' element={<GameDevelopment handleMove={handleMove} />} />
                  <Route path='/scholarship' element={<Scholar />} />
                  <Route path='/student-loan' element={<StudentLoan />} />
                  <Route path='/message-for-student' element={<MessageForStudent />} />
                  <Route path='/events' element={<Events />} />
                  <Route path='/gallery' element={<Gallery />} />
                  <Route path='/internship' element={<Internship />} />
                  <Route path='/contact-us' element={<ContactUs />} /> 
                </>
                
              }
              <Route path='/applynow' element={<Applynow />} />
          </Routes>  
        </BrowserRouter>

      </>
    )
}

export default App
