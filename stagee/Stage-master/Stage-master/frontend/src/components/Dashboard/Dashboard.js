import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Dashboard.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Calendar } from 'antd';
import { FileDoneOutlined } from '@ant-design/icons';
import icons from '../importAllSvg';
import { scaleSequential } from 'd3-scale';
import { interpolateRainbow } from 'd3-scale-chromatic';
import { IconButton } from '@mui/material';

const getColor = (index, total) => {
    const colorScale = scaleSequential(interpolateRainbow).domain([0, total]);
    return colorScale(index);
};

const lineChartData = [
    { name: 'Jan', thisWeek: 40, lastWeek: 24 },
    { name: 'Feb', thisWeek: 30, lastWeek: 14 },
    { name: 'Mar', thisWeek: 20, lastWeek: 98 },
    { name: 'Apr', thisWeek: 27, lastWeek: 39 },
    { name: 'May', thisWeek: 18, lastWeek: 48 },
    { name: 'Jun', thisWeek: 23, lastWeek: 38 },
    { name: 'Jul', thisWeek: 34, lastWeek: 43 },
];

const barChartData = [
    { name: 'Mon', thisWeek: 40, lastWeek: 24 },
    { name: 'Tue', thisWeek: 30, lastWeek: 13 },
    { name: 'Wed', thisWeek: 20, lastWeek: 98 },
    { name: 'Thu', thisWeek: 27, lastWeek: 39 },
    { name: 'Fri', thisWeek: 18, lastWeek: 48 },
    { name: 'Sat', thisWeek: 23, lastWeek: 38 },
    { name: 'Sun', thisWeek: 34, lastWeek: 43 },
];

const barChartDataSpecialite = [
    { name: 'Droit', value: 3 },
    { name: 'Technicien informatique', value: 2 },
    { name: 'Wed', value: 7 },
    { name: 'Thu', value: 5 },
    { name: 'Technicien informatique', value: 4 },
    { name: 'Sat', value: 8 },
    { name: 'Sun', value: 4 },
    { name: 'Sun', value: 4 },
    { name: 'Sun', value: 4 },
    { name: 'Sun', value: 4 },
    { name: 'Sun', value: 4 }
];

const COLORS = ['#278260', '#FF865C'];

const pieChartData = [
    { name: 'F', value: 1245 },
    { name: 'M', value: 1356 },
];

const Dashboard = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCreateAvis = () => {
        navigate('/avis'); // Navigate to Avis component
    };

    const handleCreateEpreuve = () => {
        navigate('/epreuve'); // Navigate to Epreuve component
    };

    return (
        <div className="background d-flex flex-column flex-md-row">
            <div className="flex-grow-1 p-3">
                <div className="dashboard">
                    <div className="row align-items-center mb-4">
                        <div className="col-md-6">
                            <h2 className="dashboard-title">Dashboard</h2>
                        </div>
                        <div className="col-md-6 text-right">
                            <div className="admin-info">
                               
                                <div className="admin-details">
                                    <span className="admin-name">Prénom Admin</span>
                                    <span className="admin-role">Admin</span>
                                </div>
                                <img src={icons.services} alt="Avatar" className="admin-avatar" />
                            </div>
                        </div>
                    </div>
                    <div className="row stats-cards mb-3 align-items-center">
                        <div className="col-md-5 mb-3">
                            <div className="card stats-card-short">
                                <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="stat-item">
                                        <div className="icon-circle agent-icon-color mx-auto">
                                            <img src={icons.agents} alt="Employee Icon" className="stat-icon" />
                                        </div>
                                        <div className="ml-3">
                                            <h5 className="mb-1">Employés</h5>
                                            <p className="mb-0 font-weight-bold">932</p>
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="icon-circle service-icon-color mx-auto">
                                            <img src={icons.services} alt="Services Icon" className="stat-icon" />
                                        </div>
                                        <div className="ml-3"> 
                                            <h5 className="mb-1">Services</h5>
                                            <p className="mb-0 font-weight-bold">754</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card stats-card-short">
                                <div className="card-body d-flex align-items-center">
                                    <div className="icon-circle bg-light-purple">
                                        <FileDoneOutlined className="stat-icon" />
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="mb-0">Candidatures</h5>
                                        <p className="mb-0 font-weight-bold">754</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="button-container">
                                <button className="btn btn-success w-50 mb-1 radius" onClick={handleCreateAvis}>+ Créer Avis</button>
                                <button className="btn btn-outline-success w-50 radius" onClick={handleCreateEpreuve}>+ Créer Epreuve</button>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-12 mb-3">
                            <div className="card">
                                <div className="card-body">
                                <h3 className="chart-title">Nombre Candidatures</h3>
                                    <div className="">
                                        <ResponsiveContainer width="100%" height={300}>
                                            <LineChart data={lineChartData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone" dataKey="thisWeek" stroke="#ff7300" />
                                                <Line type="monotone" dataKey="lastWeek" stroke="#387908" />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 calendrier-card">
                                <div className="card-body">
                                    <h3 className="chart-title">Calendrier Recrutement</h3>
                                    <Calendar fullscreen={false} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 mb-4">
                            <div className="card h-100 besoins-card">
                                <div className="card-body">
                                    <h3 className="chart-title">Besoins</h3>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={barChartData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="thisWeek" fill="#8884d8" />
                                            <Bar dataKey="lastWeek" fill="#82ca9d" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="chart-title">Pourcentages de candidatures par spécialité</h3>
                                    <ResponsiveContainer width="100%" height={400}>
                                        <BarChart data={barChartDataSpecialite} layout="vertical" margin={{ top: 5, right: 5, left: 25, bottom: 1 }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis type="number" />
                                            <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={60} />
                                            <Tooltip />
                                            <Bar dataKey="value" fill="#4caf50" barSize={20}>
                                                {barChartDataSpecialite.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={getColor(index, barChartDataSpecialite.length)} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="chart-title">Pourcentage Candidatures</h3>
                                    <ResponsiveContainer width="100%" height={400}>
                                        <PieChart>
                                            <Pie data={pieChartData} dataKey="value" outerRadius={150} label>
                                                {pieChartData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Legend verticalAlign="bottom" height={36} />
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
