import React, { Component } from 'react';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.Location}</em> <span>&bull;</span> <em className="date">{item.MonthOfStart} - {item.MonthOfLeaving} {item.YearOfLeaving}</em>
                      </p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className='skills'>
              <Grid container spacing={1} className='row item skills'>
                <Grid item xs={12}>
                  <strong>Programming Languages</strong>
                </Grid>
                {resumeData.programmingLanguages && resumeData.programmingLanguages.map((item, index) => {
                  return (
                    <Grid item key={"lang" + index}>
                      <Chip sx={{ height: '3.5rem', width: '10rem' }}
                        label={
                          <Typography variant="subtitle1" sx={{ fontSize: '1.5rem', fontFamily: 'Arial', fontWeight: 'bold' }}>
                            {item}
                          </Typography>
                        }
                      />
                    </Grid>
                  )
                })}
              </Grid>
            </div>
            <Grid container spacing={1} className='row item skills'>
              <Grid item xs={12}>
                <strong>Tools</strong>
              </Grid>
              {resumeData.tools && resumeData.tools.map((item, index) => {
                return (
                  <Grid item key={"tool" + index}>
                    <Chip sx={{ height: '3.5rem', width: '10rem' }}
                      label={
                        <Typography variant="subtitle1" sx={{ fontSize: '1.5rem', fontFamily: 'Arial', fontWeight: 'bold' }}>
                          {item}
                        </Typography>
                      }
                    />
                  </Grid>
                )
              })}
            </Grid>
            <Grid container spacing={1} className='row item skills'>
              <Grid item xs={12}>
                <strong>Topics</strong>
              </Grid>
              {resumeData.topics && resumeData.topics.map((item, index) => {
                return (
                  <Grid item key={"topics" + index}>
                    <Chip sx={{ height: '3.5rem', width: '10rem' }}
                      label={
                        <Typography variant="subtitle1" sx={{ fontSize: '1.5rem', fontFamily: 'Arial', fontWeight: 'bold' }}>
                          {item}
                        </Typography>
                      }
                    />
                  </Grid>
                )
              })}
            </Grid>
            <Grid container spacing={1} className='row item skills'>
              <Grid item xs={12}>
                <strong>Non-Technical Skills</strong>
              </Grid>
              {resumeData.softSkills && resumeData.softSkills.map((item, index) => {
                return (
                  <Grid item key={"softSkills" + index}>
                    <Chip sx={{ height: '3.5rem', width: '10rem' }}
                      label={
                        <Typography variant="subtitle1" sx={{ fontSize: '1.5rem', fontFamily: 'Arial', fontWeight: 'bold' }}>
                          {item}
                        </Typography>
                      }
                    />
                  </Grid>
                )
              })}
            </Grid>
          </div>

        </div>

      </section >
    );
  }
}