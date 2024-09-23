// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {cowinGender} = props
  return (
    <div className="gender-container">
      <h1 className="heading">Vaccination by gender</h1>
      <ResponsiveContainer width={1000} height={200}>
        <PieChart>
          <Pie
            data={cowinGender}
            dataKey="count"
            startAngle={0}
            endAngle={180}
            innerRadius="30"
            outerRadius="70"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="Circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
