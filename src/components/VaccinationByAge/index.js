// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {cowinAge} = props
  console.log(cowinAge)
  return (
    <div className="age-container">
      <h1 className="heading">Vaccination by age</h1>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart>
          <Pie
            data={cowinAge}
            dataKey="count"
            startAngle={0}
            endAngle={360}
            outerRadius="80"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill=" #64c2a6" />
          </Pie>
          <Legend iconType="Circle" wrapperStyle={{padding: '50'}} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
