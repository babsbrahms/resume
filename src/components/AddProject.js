import React from 'react';
import {Segment, Header, Divider, Card, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const AddProject = ({pages, summary,title, enlarge}) => (
    <div>
    <Segment>
            <Header>
                <Header.Content>
                    <Header.Subheader>
                        {title}
                    </Header.Subheader>
                </Header.Content>
            </Header>
        </Segment>
        <Segment>
            <em> summary</em>
            <p>
                {summary}
            </p>
            <Divider/>
            <div className='ui link cards'>
                {pages.map((page, index)=>
                    <Card raised key={index.toString()} color='red'>  
                        <Image src={page.img} alt="not available" />
                        <Card.Content>
                            <Card.Description>
                                {enlarge && <Link to={`/image/${page.name}?img=${page.img}`}>  {page.name}</Link>}
                                {!enlarge && page.name}
                                
                            </Card.Description>
                        </Card.Content>
                    </Card>    
                )}
               
            </div>
        </Segment>
    </div>
);

export default AddProject;

AddProject.propTypes={
    pages: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string
    })),
    summary: PropTypes.string,
    title: PropTypes.string,
    enlarge: PropTypes.bool
}