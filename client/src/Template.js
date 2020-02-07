import React, { useState, useEffect } from 'react';

import axios from "axios";

const Template = () => {
  let dataJ = {};


  const getData = async () => {

    await axios.get('https://neoml9y6n7.execute-api.us-east-1.amazonaws.com/dev/')
      .then(res => {
        dataJ = JSON.parse(res.data.body);
        console.log(dataJ)
      }
      )

  }


  console.log(dataJ.name)




  return (
    <div>
      hi
    </div>
  );
}

export default Template