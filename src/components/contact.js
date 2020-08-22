import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
    render() {
        return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Thainá Braz</h2>
                <img
                  src="https://image.flaticon.com/icons/svg/2798/2798301.svg"
                  alt="avatar"
                  style={{height: '250px'}}
                   />
                 <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
    
              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>
    
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (+351) 912 115 074
                      </ListItemContent>
                    </ListItem>
    
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        thainabbraz@gmail.com
                      </ListItemContent>
                    </ListItem>
    
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                        MySkypeID
                      </ListItemContent>
                    </ListItem>
    
    
                  </List>
                </div>
              </Cell>
            </Grid>
          </div>
        )
      }
    }
export default Contact;
