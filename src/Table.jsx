import './Table.css'

function Table() {
  const data = [
    { id: 1, name: 'สมชาย', email: 'somchai@email.com', role: 'Developer', stock: 20 },
    { id: 2, name: 'สมหญิง', email: 'somying@email.com', role: 'Designer', stock: 0 },
    { id: 3, name: 'สมศักดิ์', email: 'somsak@email.com', role: 'Manager', stock: 5 },
    { id: 4, name: 'สมศรี', email: 'somsri@email.com', role: 'Developer', stock: 15 },
    { id: 5, name: 'สมปอง', email: 'sompong@email.com', role: 'QA Engineer', stock: 8 },
  ]

  return (
    <div className="table-container">
      <h2>รายชื่อพนักงาน</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ชื่อ</th>
            <th>อีเมล</th>
            <th>ตำแหน่ง</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={row.stock === 0 ? 'stock-0' : ''}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>
                <span className={`badge ${row.role.toLowerCase().replace(' ', '-')}`}>
                  {row.role}
                </span>
              </td>
              <td className={row.stock < 10 && row.stock > 0 ? 'stock-low' : ''}>
                {row.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
