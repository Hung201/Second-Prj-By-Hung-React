import './DashBoard.scss'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const DashBoard = (props) => {
    const data = [
        {
            "name": 'Page A',
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": 'Page A',
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": 'Page A',
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": 'Page A',
            "uv": 4000,
            "pv": 2400
        }


    ]
    return (
        <div className="dashboard-container">
            <div className='title'>
                Analytics DashBoard
            </div>
            <div className='content'>
                <div className='c-left'>
                    <div className='child'>Total Users</div>
                    <div className='child'>Total Quizzes</div>
                    <div className='child'>Total Questions</div>
                    <div className='child'>Total Answers</div>
                </div>
                <div className='c-right'>
                    <BarChart width={400} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div >
    )
}

export default DashBoard;