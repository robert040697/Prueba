import {useState} from 'react'
import {Data} from '../components/DataExcel/Data'
import * as XLSX from 'xlsx'
import Layout from '../components/Layout';

function Importar() {
  
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);  
 
  // submit
  const [excelData, setExcelData]=useState(null);
  // it will contain array of objects

  // handle File
  const fileType=['application/vnd.ms-excel'];
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      // console.log(selectedFile.type);
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('plz select your file');
    }
  }

  // submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    }
    else{
      setExcelData(null);
    }
  }
  
  return (
    <>
    <Layout></Layout>
    <div className="container">

      {/** Seccion para subir Archivo */}
      <div className='form'>
        <form className='form-group' autoComplete="off"
        onSubmit={handleSubmit}>
          <label><h5>Subir Archivo Excel</h5></label>
          <br></br>
          <input type='file' className='form-control'
            onChange={handleFile} required></input>                  
          {excelFileError&&<div className='text-danger'
            style={{marginTop:5+'px'}}>{excelFileError}</div>}
          <button type='submit' className='btn btn-success'
            style={{marginTop:5+'px'}}>Subir</button>
        </form>
      </div>

      <br></br>
      <hr></hr>

      {/* Mostrar datos */}
      <h5>Datos</h5>
      <div className='viewer'>
        {excelData===null&&<>No se a seleccionado ningun archivo Excel</>}
        {excelData!==null&&(
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>OrderID</th>
                  <th scope='col'>OrderDate</th>
                  <th scope='col'>ShipDate</th>
                  <th scope='col'>ShipMode</th>
                  <th scope='col'>CustomerID</th>
                  <th scope='col'>CustomerName</th>
                  <th scope='col'>Country</th>    
                  <th scope='col'>City</th> 
                  <th scope='col'>State</th> 
                  <th scope='col'>PostalCode</th> 
                  <th scope='col'>Region</th> 
                  <th scope='col'>ProductID</th> 
                  <th scope='col'>Category</th>               
                  <th scope='col'>SubCategory</th> 
                  <th scope='col'>ProductName</th> 
                  <th scope='col'>Sales</th> 
                  <th scope='col'>Quantity</th> 
                  <th scope='col'>Discount</th> 
                  <th scope='col'>Profit</th> 
                </tr>
              </thead>
              <tbody>
                <Data excelData={excelData}/>
              </tbody>
            </table>            
          </div>
        )}       
      </div>

    </div>
    </>
  );
}

export default Importar;