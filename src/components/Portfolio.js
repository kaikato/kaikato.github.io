import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';

import CardMedia from '@mui/material/CardMedia';
import { CardActions, Typography } from '@mui/material';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <div className='row item'>
              <Grid container spacing={2} className="grid">
                <Grid item xs={12} >
                  <h1>Check Out Some of My Projects.</h1>
                </Grid>
                {
                  resumeData.portfolio && resumeData.portfolio.map((item) => {
                    return (
                      <Grid item xs={12} sm={6} md={4}>
                        <Card className='item' sx={{ maxWidth: 330, height: 400 }}>
                          <CardMedia sx={{ height: 150 }}
                            component="img"
                            alt={item.name}
                            height="140"
                            image={item.imgurl}
                          />
                          <CardContent>
                            <h3>{item.name}</h3>
                            <Typography gutterBottom className="card-text">
                              {item.description}
                            </Typography>


                          </CardContent>
                          <CardActions>
                            {
                              item.githuburl &&
                              <Button className="github-button" variant="outlined" startIcon={<GitHubIcon />} href={item.githuburl}>
                                View on Github
                              </Button>
                            }
                          </CardActions>
                        </Card>
                      </Grid>
                    )
                  })
                }
              </Grid>

            </div>
          </div>
        </div>
      </section>
    );
  }
}