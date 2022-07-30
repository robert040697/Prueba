import { useState } from "react";
import Layout from "../components/Layout"
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import { UserData } from "./Data";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";


/**DATO IMPORTANTE  El archivo excel lo guarde como .xls para poder mostrarlo */

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <>
    <Layout>
    </Layout>
    <div 
      css={css`
          display: grid;
          grid-template-columns: auto auto;
          gap: 10px;
          padding: 10px;
          div{
            text-align: center;
            padding: 20px 0;
          }
      `}
    >
        <div>    
            <div style={{ width: 700 }}>
              <BarChart chartData={userData} />
            </div>
        </div>
        <div>
            <div style={{ width: 700 }}>
              <LineChart chartData={userData} />
            </div>
        </div>
        <div>
            <div style={{ width: 700 }}>
              <BarChart chartData={userData} />
            </div>  
        </div>  
        <div>
            <div style={{ width: 700 }}>
              <LineChart chartData={userData} />
            </div>
        </div>
    </div>
    </>
  );
}

export default App;