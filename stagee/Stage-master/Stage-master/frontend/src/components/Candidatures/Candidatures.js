import React, { useState } from 'react';
import './Candidatures.css';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField } from '@mui/material';
import icons from '../importAllSvg';
import CandidaturesDetail from '../CandidaturesDetail/CandidaturesDetail';

const agents = [
  { jobTitle: 'Accountant', candidates: '102', shortlisted: '-', startDate: '8/17/2022', id: 1 },
  { jobTitle: 'Accountant', candidates: '102', shortlisted: '-', startDate: '8/17/2022', id: 2 },
  { jobTitle: 'Accountant', candidates: '102', shortlisted: '-', startDate: '8/17/2022', id: 3 },
  { jobTitle: 'Accountant', candidates: '102', shortlisted: '-', startDate: '8/17/2022', id: 4 },
  { jobTitle: 'Accountant', candidates: '102', shortlisted: '-', startDate: '8/17/2022', id: 5 },
  { jobTitle: 'Accountant', candidates: '102', shortlisted: '-', startDate: '8/17/2022', id: 6 },
  { jobTitle: 'Accountant', candidates: '102', shortlisted: '-', startDate: '8/17/2022', id: 7 },
  { jobTitle: 'Accountant', candidates: '102', shortlisted: '-', startDate: '8/17/2022', id: 8 },
  { jobTitle: 'Accountant', candidates: '102', shortlisted: '-', startDate: '8/17/2022', id: 9 },
  { jobTitle: 'Accountant', candidates: '102', shortlisted: '-', startDate: '8/17/2022', id: 10 }
  // ... (other entries)
];

const CandidateList = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const filteredCandidates = agents.filter(agent =>
    agent.jobTitle.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);
  const paginatedCandidates = filteredCandidates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleClick = (id) => {
    navigate(`/candidaturesdetail/${id}`); // Route to CandidaturesDetail component
  };

  return (
    <div className="candidate-container">
      <div className="top-bar">
        <h2>Candidatures</h2>
        <div className="admin-info">
          <IconButton className="icon-button"><img src={icons.parameter} alt="Settings" /></IconButton>
          <div className="admin-details">
            <span className="admin-name">Prénom Admin</span>
            <span className="admin-role">Admin</span>
          </div>
          <img src={icons.services} alt="Avatar" className="admin-avatar" />
        </div>
      </div>
      <div className="search-bar-container">
        <TextField
          placeholder="Search here..."
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearchChange}
          className="search-bar"
          InputProps={{
            startAdornment: <img src={icons.search} alt="Search Icon" className="search-icon" />
          }}
        />
      </div>
      <TableContainer component={Paper} className="candidate-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: 'left !important' }}>JOB TITLE</TableCell>
              <TableCell align="center">NOMBRE CANDIDATURES</TableCell>
              <TableCell align="center">SHORTLISTED</TableCell>
              <TableCell align="center">START DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCandidates.map((candidate, index) => (
              <TableRow key={index} onClick={() => handleClick(candidate.id)}> {/* Added onClick handler */}
                <TableCell className="job-title-cell">
                  <span className="job-title">{candidate.jobTitle}</span>
                </TableCell>
                <TableCell className="content-cell">{candidate.candidates}</TableCell>
                <TableCell className="content-cell">{candidate.shortlisted}</TableCell>
                <TableCell className="content-cell">{candidate.startDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <span
          className="arrow"
          onClick={() => handlePageChange(currentPage - 1)}
          style={{ visibility: currentPage === 1 ? 'hidden' : 'visible' }}>
          {'<'}
        </span>
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </span>
        ))}
        <span
          className="arrow"
          onClick={() => handlePageChange(currentPage + 1)}
          style={{ visibility: currentPage === totalPages ? 'hidden' : 'visible' }}>
          {'>'}
        </span>
      </div>
    </div>
  );
};

export default CandidateList;
