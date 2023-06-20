import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Headerr from "./components/Headerr";
import Home from "./components/Home";
import "./components/css/main.css";
import AddTutors from "./components/Addtutors";
import Addotm from "./components/Addotm";
import UpdateOTMdata from "./components/UpdateOTMdata";
import OTMform from "./components/OTMform";
import DataTableTuytors from "./components/DataTableTuytors";
import UpdateTutordata from "./components/UpdateTutordata";
import Tutorform from "./components/Tutorform";
import Updatetaskdata from "./components/Updatetaskdata";
import Addtask from "./components/Addtask";
import OTMdata from "./components/OTMdata";
import Addclient from "./components/Addclient";
import UpdateClientdata from "./components/UpdateClientdata";
import Clientform from "./components/Clientform";
import AddBudget from "./components/AddBudget";
import UpdateBudgetdata from "./components/UpdateBudgetdata";
import Budgetform from "./components/Budgetform";
import Taskform from "./components/Taskform";
import Allbutton from "./components/Allbutton";
import Updatevonderdata from "./components/Updatevonderdata";
import Vonderform from "./components/Vonderform";
import Viewbudget from "./components/Viewbudget";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import Studentinvoice from "./components/StudentInvoice";
import Vendorsinvoice from "./components/Vendorsinvoice";
import Editvendoreinvoice from "./components/Editvendoreinvoice";
import Updateinvoiceform from "./components/Updateinvoiceform";
import Tryform from "./components/tryform";
import Student_invoice from "./components/Student_invoice";
import Dashbord from "./components/Dashbord";
import Invoicedata from "./components/Invoicedata";
import TutorsInvoice from "./components/TutorsInvoice";
import Edittutorsinvoice from "./components/Edittutorsinvoice";
import Updatetoturinvoceform from "./components/Updatetoturinvoceform";
import TutorsInvoicetabledata from "./components/TutorsInvoicetabledata";
import AppSelection from "./components/AppSelection";
import { useLocation } from 'react-router-dom';


function App() {
  
  const location = useLocation();

  // hide header if pathname is home
  const hideHeader = location.pathname === '/app_select';

  return (
    <>
      <div class='main justify-content-center'>
        <div className='main_content_iner'>
          <Routes>
          <Route path='/app_select' element={<AppSelection />}  />
            <Route path='/' element={<Layout />}>
              {/* Public Routes */}
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/unauthorized' element={<Unauthorized />} />
              
              <Route element={<RequireAuth allowedRoles={["admin"]} />}>
                <Route path='/dashboard' element={<Dashbord />} />
                <Route path='/tutors' element={<AddTutors />} />
                <Route path='/otm' element={<Addotm />} />
                <Route path='/updateotm' element={<UpdateOTMdata />} />
                <Route path='/updateotm/:userId' element={<OTMform />} />
                <Route path='/Updatetutors' element={<UpdateTutordata />} />
                <Route path='/Updatetutors/:userId' element={<Tutorform />} />
                <Route path='/1' element={<DataTableTuytors />} />
                <Route path='/new' element={<OTMdata />} />
                <Route path='/Assingntask/:userId' element={<Taskform />} />
                <Route path='/Addclient' element={<Addclient />} />
                <Route path='/UpdateClientdata' element={<UpdateClientdata />} />
                <Route path='/UpdateClientdata/:userId' element={<Clientform />} />
                <Route path='/Updatevonder' element={<Updatevonderdata />} />
                <Route path='/Updatevonder/:userId' element={<Vonderform />} />
                <Route path='/Budget' element={<AddBudget />} />
                <Route path='/Updatebudget' element={<UpdateBudgetdata />} />
                <Route path='/Updatebudget/:userId' element={<Budgetform />} />
                <Route path='/allbutton' element={<Allbutton />} />
                <Route path='/viewbudget/:userId' element={<Viewbudget />} />
                <Route path='/student-invoice/:userId' element={<Student_invoice />} />
                <Route path='/vendor-invoice/:userId' element={<Vendorsinvoice />} />
                <Route path='/Edit-vendor-invoice/:userId' element={<Editvendoreinvoice />} />
                <Route path='/update-vendor-invoice/:userId' element={<Updateinvoiceform />} />
                <Route path='/try' element={<Tryform />} />
                <Route path='tutors-invoice' element={<TutorsInvoicetabledata />} />
                <Route path='/tutors-invoice/:userId' element={<TutorsInvoice />} />
                <Route path='/Edit-tutors-invoice/:userId' element={<Edittutorsinvoice />} />
                <Route path='/update-tutors-invoice/:userId' element={<Updatetoturinvoceform />} />

                <Route path='/invoicedata' element={<Invoicedata />} />
              </Route>

              <Route element={<RequireAuth allowedRoles={["admin", "otm"]} />}>
                
                <Route path='/Assingntask' element={<Updatetaskdata />} />
                <Route path='/addtask/*' element={<Addtask />} />

              </Route>


            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
