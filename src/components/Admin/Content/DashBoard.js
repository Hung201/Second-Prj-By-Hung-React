import './DashBoard.scss'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { getOverview } from '../../../services/apiServices';
import { useState, useEffect } from 'react';

const DashBoard = (props) => {

    const [dataOverview, setDataOverview] = useState([])
    const [dataChart, setDataChart] = useState([])


    useEffect(() => {
        fetchDataOverview()
    }, [])

    const fetchDataOverview = async () => {
        let res = await getOverview();
        if (res && res.EC === 0) {
            setDataOverview(res.DT)
            //process chart data
            let Us = 0, Qz = 0, Qs = 0, As = 0;
            Us = res?.DT?.users?.total ?? 0;
            Qz = res?.DT?.others?.countQuiz ?? 0;
            Qs = res?.DT?.others?.countQuestions ?? 0;
            As = res?.DT?.others?.countAnswers ?? 0;
            const data = [
                {
                    "name": 'Users',
                    "Us": Us,
                },
                {
                    "name": 'Quizzes',
                    "Qz": Qz,
                },
                {
                    "name": 'Questions',
                    "Qs": Qs,
                },
                {
                    "name": 'Answers',
                    "As": As,
                }
            ]
            setDataChart(data)
        }
        console.log('chekc res: ', res)
    }


    return (
        <div className="dashboard-container">
            <div className='title'>
                Analytics DashBoard
            </div>
            <div className='content'>
                <div className='c-left'>
                    <div className='child'>
                        <span className='text-1'>Total Users</span>
                        <span className='text-2'>
                            {dataOverview && dataOverview.users && dataOverview.users.total ?
                                <>{dataOverview.users.total}</>
                                :
                                <>0</>
                            }
                        </span>
                    </div>
                    <div className='child'>
                        <span className='text-1'>Total Quizzes</span>
                        <span className='text-2'>
                            {dataOverview && dataOverview.others && dataOverview.others.countQuiz ?
                                <>{dataOverview.others.countQuiz}</>
                                :
                                <>0</>
                            }
                        </span>
                    </div>
                    <div className='child'>
                        <span className='text-1'>Total Questions</span>
                        <span className='text-2'>
                            {dataOverview && dataOverview.others && dataOverview.others.countQuestions ?
                                <>{dataOverview.others.countQuestions}</>
                                :
                                <>0</>
                            }
                        </span>
                    </div>
                    <div className='child'>
                        <span className='text-1'>Total Answers</span>
                        <span className='text-2'>
                            {dataOverview && dataOverview.others && dataOverview.others.countAnswers ?
                                <>{dataOverview.others.countAnswers}</>
                                :
                                <>0</>
                            }

                        </span>
                    </div>
                </div>
                <div className='c-right'>
                    <ResponsiveContainer width="90%" height={"100%"}>
                        <BarChart data={dataChart}>
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Us" fill="#4b8ccb" />
                            <Bar dataKey="Qz" fill="#8884d8" />
                            <Bar dataKey="Qs" fill="#82ca9d" />
                            <Bar dataKey="As" fill="#fcb12a" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div >
    )
}

export default DashBoard;