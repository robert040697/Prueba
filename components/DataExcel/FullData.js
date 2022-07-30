export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.OrderID}</th>
            <th>{individualExcelData.OrderDate}</th>
            <th>{individualExcelData.ShipDate}</th>
            <th>{individualExcelData.ShipMode}</th>
            <th>{individualExcelData.CustomerID}</th>
            <th>{individualExcelData.CustomerName}</th>
            <th>{individualExcelData.Country}</th>
            <th>{individualExcelData.City}</th>
            <th>{individualExcelData.State}</th>
            <th>{individualExcelData.PostalCode}</th>
            <th>{individualExcelData.Region}</th>
            <th>{individualExcelData.ProductID}</th>
            <th>{individualExcelData.Category}</th>
            <th>{individualExcelData.SubCategory}</th>
            <th>{individualExcelData.ProductName}</th>
            <th>{individualExcelData.Sales}</th>
            <th>{individualExcelData.Quantity}</th>
            <th>{individualExcelData.Discount}</th>
            <th>{individualExcelData.Profit}</th>
        </>
    )
}