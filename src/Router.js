
import React from "react";
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import SplashScreen from "./components/screens/splash/SplashScreen";
import StudentLoginScreen from "./components/screens/studentLogin/StudentLoginScreen";
import TeacherLoginScreen from "./components/screens/teacherLogin/TeacherLoginScreen";
import TeacherSignupScreen from './components/screens/teacherSignup/TeacherSignupScreen';
import StudentSignupScreen from './components/screens/studentSignup/StudentSignupScreen';
import VideoPlayer from "./components/widgets/videoplayer/VideoPlayer";
import QuestionsPaper from "./components/widgets/questions/QuestionsPaper";
import ResetPasswordStudent from "./components/screens/resetpasswordstudent/ResetPasswordStudent";
import StudentDashbord from "./components/screens/studentdashboard/StudentDashbord";
import TeacherDashboard from "./components/screens/teacherdashboard/TeacherDashboard";
import { getItem } from "./store/local/storage";
import StudentProfile from "./components/widgets/profile/StudentProfile";
import StudentCourse from "./components/widgets/courselist/StudentCourse";
import TrainerList from "./components/widgets/explore/TrainerList";
import TeacherProfile from "./components/widgets/profile/TeacherProfile";
import TeacherCourse from "./components/widgets/courselist/TeacherCourse";
import ResetPasswordTeacher from './components/screens/resetPasswordTeacher/ResetPasswordTeacher';

function RouteController() {
  const [user,setUser] = React.useState(null)
  const [role,setRole] = React.useState('')
  React.useEffect(()=>{
   let token =  getItem('token')
   if(token === '' || token === undefined || token === null){
      setUser(false)
   }
   else{
     setUser(true)
     let role = getItem('role')
     setRole(role)
   }
  },[])
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={user && role === 'learner' ?<StudentDashbord />:(user && role ==='trainer'?<TeacherDashboard />:<SplashScreen />)} />
        <Route path="/student" element={<StudentLoginScreen />} />
        <Route path="/teacher" element={<TeacherLoginScreen />} />
        <Route path="/signup-teacher" element={<TeacherSignupScreen />} />
        <Route path="/signup-student" element={<StudentSignupScreen />} />
        <Route path="/course/:id" element={<VideoPlayer />} />
        <Route path="/exam/:id" element={<QuestionsPaper />} />
        <Route path="/reset" element={<ResetPasswordStudent />} />
        <Route path="/reset/teacher" element={<ResetPasswordTeacher />} />
        <Route path="/student/profile" element={<StudentProfile/>} />
        <Route path="/student/course" element={<StudentCourse/>} />
        <Route path="/student/explore" element={<TrainerList/>} />
        <Route path="/teacher/profile" element={<TeacherProfile/>} />
        <Route path="/teacher/course" element={<TeacherCourse/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteController;
