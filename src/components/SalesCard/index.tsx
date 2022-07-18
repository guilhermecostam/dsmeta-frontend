import axios from 'axios'
import { useEffect, useState } from 'react'
import { Sale } from '../../models/sale'
import { BASE_URL } from '../../utils/request'
import DatePickerForm from '../DatePickerForm'
import NotificationButton from '../NotificationButton'
import './style.css'

function SalesCard() {
    const [sales, setSales] = useState<Sale[]>([])

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(response => {
                setSales(response.data.content)
            })
    }, [])

    return (
        <div className="dsmeta-card">
            <h2>Vendas</h2>
            <DatePickerForm />
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td className="show992">{sale.id}</td>
                                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show992">{sale.visited}</td>
                                    <td className="show992">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
  
export default SalesCard
  