import {IndividualData} from "../DataExcel/FullData"

export const Data = ({excelData}) => {
    return excelData.map((individualExcelData)=>(
        <tr key={individualExcelData.Id}>
            <IndividualData individualExcelData={individualExcelData}/>
        </tr>        
    ))
}