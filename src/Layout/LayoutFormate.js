import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NewHeader from '../Components/NewHeader'
import NewFooter from '../Components/NewFooter'
import CustomRoute from '../Routes/CustomRoute'

const LayoutFormate = () => {

    const path = useLocation(); 
  const pageUrl = path.pathname;
  const navigate = useNavigate();
  
  return (
    <>
    
        {pageUrl != "/" ? (
            <>
              <NewHeader />
            </>
          ) : (
            ""
          )}


            <CustomRoute />


        {pageUrl != "/" ? (
            <>
              <NewFooter />
            </>
          ) : (
            ""
          )}
    
    </>
  )
}

export default LayoutFormate
