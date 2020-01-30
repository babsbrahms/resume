import React, { Component } from 'react';
import {Message, Segment, Card} from "semantic-ui-react";
import PropTypes from 'prop-types';

class HomePage extends Component {
    static defaultProps={
        projects:[
            {
                name: 'phVID',
                description: 'Socail media app',
                language: 'Nodejs, Express, MongoDB',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(2).png?alt=media&token=dd725a1d-971d-4c20-befb-df1099e94661'
            },
            {
                name: 'skincare',
                description: 'Shopping and blog app',
                language: 'Nodejs, Express, MongoDB',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(8).png?alt=media&token=da32216a-0941-4280-b589-ffefa50576dd'
            },
            {
                name: 'e-VENT',
                description: 'Event plannimg app',
                language: 'React, Nodejs, Express, MongoDB',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(22).png?alt=media&token=dfa49c6c-fab0-42b0-a058-4ba4ed4693dc'
            },
            {
                name: 'clocks',
                description: 'clock functionality app',
                language: 'React-native',
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(set%20alarm).png?alt=media&token=f20d4a29-6bc2-4659-91cc-e4f0981a691c'
            },

        ]
    }

    state = { 
        project: this.props.projects[0]
     }

    componentDidMount() {
        
        //this.slideshow(this.props.projects)
    }
  
    componentWillUnmount(){
       // clearInterval(this.timer)
    }
    slideshow = (projects) =>{
        const total = projects.length;
        let index = 0
        this.timer = setInterval(()=>{
            const current =( index === (total-1))? index=0 : index += 1;
            const project= projects[current]
            this.setState({project}) 
        } , 5000)
        
    }
    render() {
       // const {project} = this.state
        return (
            <div className='ui segments'>
                <Segment stacked>
                    {/* <Card.Group centered>
                        <Card>
                            <Card.Content>
                                {project &&project.imageUrl &&  
                                (<img src={project.imageUrl} alt="not available" className='ui image'/>)}
                                <Card.Header>
                                    {project.name}
                                </Card.Header>
                                <Card.Description>
                                    {project.description}
                                </Card.Description>
                                <Card.Meta>
                                    {project.language}
                                </Card.Meta>
                            </Card.Content>
                        </Card>
                    </Card.Group> */}
                                
                    <Card.Group centered>
                        {this.props.projects.map(project =>(<Card>
                            <Card.Content>
                                {project &&project.imageUrl &&  
                                (<img src={project.imageUrl} alt="not available" className='ui image'/>)}
                                <Card.Header>
                                    {project.name}
                                </Card.Header>
                                <Card.Description>
                                    {project.description}
                                </Card.Description>
                                <Card.Meta>
                                    {project.language}
                                </Card.Meta>
                            </Card.Content>
                        </Card>))}
                    </Card.Group>
                </Segment>
            </div>
        );
    }
}

HomePage.propTypes={
    projects: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        language: PropTypes.string,
        imageUrl: PropTypes.string
    }))
}
export default HomePage;