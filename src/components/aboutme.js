import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class About extends Component{
render(){
    return(
        <div>
        <Grid>
          <Cell col={4}>
            <div  style={{paddingTop: '2em'}}>
                <img
                  src="https://image.flaticon.com/icons/svg/1831/1831987.svg"
                  alt="avatar"
                  style={{height: '230px'}}
                   />
            </div>

            <h2 style={{paddingTop: '1em'}}>Thainá Braz</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> 
            <p>   I am a computer science student very passionate about technology in general,
              management and learning. I consider myself a communicative person who is
                always willing to helping others.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            <h5>Phone</h5>
            <p>(+351) 912 115 074</p>
            <h5>Email</h5>
            <a>thainabbraz@gmail.com</a>
           
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
             
              
              schoolName="Bachelor in Computer Science "
              schoolDescription=" ESTG - School of Technology and Management – Campus 2 - Morro do Lena, Alto do Vieiro, Apt 4163, Leiria, Portugal "
               />

               <Education

                 schoolName="Introduction to IoT"
                 schoolDescription="Cisco Networking Academ"
                  />
                <Education
                 
                    schoolName="Erasmus Experience"
                    schoolDescription="University of Antwerp"
                      />
                
          
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Volunteer</h2>

            
              <Experience

              jobName="As raparigas do código - Co-founder"
              jobDescription="We work as a team creating workshops and teaching how to
              code for free for girls in Portugal. The project was created in order to shorten 
              the gender gap on tech area.  https://raparigasdocodigo.pt/"
              />
                <Experience
              
                jobName="Rede ex aequo - Volunteer"
                jobDescription="LGBTI Education project
                The LGBTI Education Project is a project of the ex aequo network - an
                association of young lesbian, gay, bisexual, trans, intersex and supporters,
                which was financially supported by the European Youth Foundation of the
                Council of Europe, between January and September 2005, as a project -pilot.
                This is an ongoing project of the association that aims at an educational
                intervention through the dissemination of information on the themes of
                homosexuality, bisexuality, gender identity and expression, and, sexual
                biology between teachers and students from the 7th to the 12th year, teacher
                educators, teachers Higher Education trainees and students."
                />
          <Experience
              
              jobName="Movimento LGBTI Leiria - Co-founder"
              jobDescription="LGBTI Leiria is a activist organization created in Leiria in order support LGBTI+ community and promove the 1st LGBTI pride march in Leiria.
              It will be attended by human rights organizations, social support associations, humanitarian organizations. The initiative has the support of the Municipality of Leiria. 
              "
              />

              <hr style={{borderTop: '3px solid #e22947'}} />

          </Cell>
        </Grid>
      </div>
        )
    }
 }
export default About;
