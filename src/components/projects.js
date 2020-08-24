import React, { Component } from 'react';
import { Tabs, Tab, Card, Grid, Cell, CardActions, CardTitle, IconButton, CardText, Button, CardMenu } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        switch (this.state.activeTab) {
            case 0:
                return (
                    <div className="projects-grid">
                        <Card shadow={0} style={{ width: '312px', marginInline: '10px' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://kinex.co.uk/wp-content/uploads/2019/05/Kinex-Saving-Water-Blog-Image-850x600-1200x565.png) center / cover' }}>SaveMoneyHelper</CardTitle>
                            <CardText>
                            SaveMoneyHelper is an App made in Android Studio to a self finance personal managment. 

                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/thainabbraz/SaveMoneyHelper">Github</Button>
                                        
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={0} style={{ width: '312px', marginInline: '10px', }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.dribbble.com/users/148585/screenshots/1914271/untitled-2v2_1x.gif) center / cover' }}> Online Library</CardTitle>
                            <CardText>
                            Simple library made with .NET and Microsoft SQL Server.
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/thainabbraz/OnlineLibrary">Github</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={0} style={{ width: '312px', marginInline: '10px', }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://3.bp.blogspot.com/-bsAe5iHfUvw/XMm2l8YCMtI/AAAAAAAAA28/9-Uj-v3GHhIE06c1_HdSEOeXML1byHInACLcBGAs/s1600/what-is-an-algorithm.png) center / cover' }}>Java algorithms</CardTitle>
                            <CardText>
                            Project made in Java includes the most common types of algorithm in order to show the difference between them.
                            </CardText>
                            <CardActions border>
                                <Button href="https://github.com/thainabbraz/algoritmosJava" colored>Github</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                    </div>

                )
                break;
            case 1:
                return (
                    <div className="projects-grid">
                    <Card shadow={0} style={{ width: '312px', marginInline: '10px' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg) bottom right 15% no-repeat #46B6AC' }}>FreqCounter</CardTitle>
                        <CardText>
                        FreqCounter is a C project that basically counts the frequency of patterns in directories and files.

                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/thainabbraz/FreqCounter"  colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={0} style={{ width: '312px', marginInline: '10px', }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) bottom right 15% no-repeat #46B6AC' }}>Scholarship</CardTitle>
                        <CardText>
                        This is a university project called Scholarship, which can collect information in Scholarship web pages from Google using a bash program.
                        </CardText>
                        <CardActions border>
                        <Button href="https://github.com/thainabbraz/Scholarship"  colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={0} style={{ width: '312px', marginInline: '10px', }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.dribbble.com/users/148585/screenshots/1914271/untitled-2v2_1x.gif) center / cover' }}> Android University Project</CardTitle>
                            <CardText>
                            Java university project for the "Programing II" course
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/thainabbraz/Java-Android-Project">Github</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>


                </div>
                )
                break;
            case 2:
                return (
                    <div className="projects-grid">
                        <Card shadow={0} style={{ width: '312px', marginInline: '10px' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://evilinside.ru/wp-content/uploads/2018/03/laravel-web-development1.png) center / cover' }}>Laravel Admin Website</CardTitle>
                            <CardText>
                                    Admin website that managers a company of pilots made in laravel framework.
                            </CardText>
                            <CardActions border>
                            <Button colored href="https://github.com/thainabbraz/Laravel-Website">Github</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={0} style={{ width: '312px', marginInline: '10px', }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/5000/1*lXH0CroMTAQKIfDzn-brPw.png) center / cover' }}>Pokemon restful API</CardTitle>
                            <CardText>
                                Website made in react and axios that sort pokemon every time that page is refreshed
                            </CardText>
                            <CardActions border>
                            <Button colored href="https://github.com/thainabbraz/pokeAPI">Github</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={0} style={{ width: '312px', marginInline: '10px', }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/698/1*gM0Fh16cxVYc1dHPozrJdg.jpeg) center / cover' }}>Online courses</CardTitle>
                            <CardText>
                               Web page of courses made in React and NodeJs.
                            </CardText>
                            <CardActions border>
                            <Button colored href="https://github.com/thainabbraz/onlinecourses">Github</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                    </div>
                )
                break;
            case 3:
                return (
                    <div className="projects-grid">
                        <Card shadow={0} style={{ width: '312px', marginInline: '10px' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={0} style={{ width: '312px', marginInline: '10px', }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={0} style={{ width: '312px', marginInline: '10px', }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                    </div>
                )
                break;

        }

    }

    render() {


        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>C# and Java</Tab>
                    <Tab>University</Tab>
                    <Tab>Web development</Tab>
                    <Tab></Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }

}
export default Projects;
