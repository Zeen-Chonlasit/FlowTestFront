import './Table.css'

function Table() {
  const data = [
    { id: 1, name: 'สมชาย', email: 'somchai@email.com', role: 'Developer' },
    { id: 2, name: 'สมหญิง', email: 'somying@email.com', role: 'Designer' },
    { id: 3, name: 'สมศักดิ์', email: 'somsak@email.com', role: 'Manager' },
    { id: 4, name: 'สมศรี', email: 'somsri@email.com', role: 'Developer' },
    { id: 5, name: 'สมปอง', email: 'sompong@email.com', role: 'QA Engineer' },
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
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td><span className={`badge ${row.role.toLowerCase().replace(' ', '-')}`}>{row.role}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

