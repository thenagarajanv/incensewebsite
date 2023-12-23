import NavBar from "./NavBar";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from "react";
import { Chart } from "react-google-charts";
import ReactApexChart from 'react-apexcharts';
import MoneyIcon from '@mui/icons-material/Money';
import ReceiptIcon from '@mui/icons-material/Receipt';
import QrCodeIcon from '@mui/icons-material/QrCode';

function Dashboard(){

  const config = { 
    series: [90,40],
      options: {
        labels: ['Profit 2023', 'Profit 2022'],
      }
  }

  const [state, setState] = useState({
    series: [{
      name: 'Cost Price',
      data: [199,169,149,99,149,199,99]
    }, {
      name: 'Selling Price',
      data: [250,269,249,199,249,299,399]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    }
  });

  var today = new Date();
	var day = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getFullYear();
	var hour = today.getHours();
    hour = Math.abs(12-hour);
	if(hour<10)hour = "0"+hour;
	    var minute = today.getMinutes();
	if(minute<10)minute = "0"+minute;
		var second = today.getSeconds();
    var Month = "";
	if(month == '1'){
        Month = "January";
    }else if(month == '2'){
        Month = "Feburay";
    }else if(month == '3'){
        Month = "March";
    }else if(month == '4'){
        Month = "Apirl";
    }else if(month == '5'){
        Month = "May";
    }else if(month == '6'){
        Month = "June";
    }else if(month == '7'){
        Month = "July";
    }else if(month == '8'){
        Month = "Augest";
    }else if(month == '9'){
        Month = "September";
    }else if(month == '10'){
        Month = "October";
    }else if(month == '11'){
        Month = "November";
    }else if(month == '12'){
        Month = "December";
    }
  return(
    <div>
      <NavBar/>
        <div className='Top-Container'>
          <Stack direction="horizontal" gap={3}>
            <div className="p-2">
              <h1><b>Sale Analytics</b></h1>
            </div>
              <div className="p-2 ms-auto">
                  <Button variant="light"><b>{Month} {day}, {year} {hour}:{second} </b><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" stroke-width="0" fill="currentColor" stroke="currentColor" class="moon"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg></Button>{' '}
              </div>
          </Stack>
        </div>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <div className="priceContainer">
                  <Row>
                    <h2>Goloka Incense</h2>
                  </Row>
                  <Row>
                    <h5>Average Rate 2023</h5>
                    <Col>
                      <h3>$15,232</h3>
                      <p>{<MoneyIcon/>}Income</p>
                    </Col>
                    <Col>
                      <h3>$53,232</h3>
                      <p>{<ReceiptIcon/>}Expense</p>
                    </Col>
                    <Col>
                      <h3>$5,412</h3>
                      <p>{<QrCodeIcon/>}New Orders</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <h4><b>Sales Volume</b></h4>
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
          </Col>
        </Row>
        <Row>
          <Col>
              <h4><b>Profit Performance</b></h4>
              <ReactApexChart options={config.options} series={config.series} type="pie" />
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Dashboard;
