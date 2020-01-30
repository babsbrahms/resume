import React, { Component } from 'react';
import {Segment, Header, Divider, Card, Image, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './css/style.css';

class AddProject extends Component {
    constructor (props) {
        super(props);

        this.state = { 
            large: false,
            currentPage: undefined,
            pageCount: props.pages.length,
            pages: props.pages
        }
    }


    pressBtn = (index) => {
        this.setState({ large: true, currentPage: index  })
    }

    addPage = () => {
        const { currentPage, pageCount } = this.state;
        const current = currentPage;
        const page = current + 1 
        if (page === pageCount) {
            this.setState({ currentPage: pageCount });
        }else {
            this.setState({ currentPage: page });
        }
        
    }

    removePage = () => {
        const { currentPage } = this.state;
        const current = currentPage;
        const page =  current - 1 ;

        if (page === 0) {
            this.setState({ currentPage: 0 });
        }else {
            this.setState({ currentPage: page });
        }

    }

    render() {
        const { large, currentPage, pageCount } = this.state;
        const {pages, summary,title, enlarge, link } = this.props;
        return (
        <div>
            <Segment>
                <Header>
                    <Header.Content as='h2'>
                            {title}                   
                    </Header.Content>
                </Header>
                {!!link && <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}><a target='_blank' href={link}>website</a></div>}
            </Segment>
            <Segment>
                <b>summary</b>
                <p>
                    {summary}
                </p>
                <Divider/>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}} className='ui link cards'>
                    <Card.Group stackable itemsPerRow={2} centered>
                        {!large && pages.map((page, index)=>
                            <Card fluid raised key={index.toString()} color='red'>  
                                <Image src={page.img} alt="not available" />
                                <Card.Content>
                                    <Card.Description>
                                        {enlarge && <a onClick={() => this.pressBtn(index, pages)} style={{ color: 'blue'}}>{page.name}</a>}
                                        {!enlarge && page.name}
                                        
                                    </Card.Description>
                                </Card.Content>
                            </Card>    
                        )}
                    </Card.Group>                
                </div>
            </Segment>
            {large && 
                (<div className="pop">
                    <div className="pop-inner">

                        <div className="pop-header">
                            <div className="pop-header-left">
                                <h2 className="pop-header-text">{pages[currentPage].name}</h2>
                            </div>
                            <div className="pop-header-right">
                                <a className="pop-header-text pop-header-text-right" role={'link'} onClick={() => this.setState({ large: false, currentPage: undefined })}><Icon inverted color='black' name='close'/></a>
                            </div>
                        </div>

                        <div className="pop-body">

                                <Segment>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                                        <div>
                                            {(currentPage !== 0 ) && <b><a className="pop-header-text-right" onClick={() => this.removePage()}><Icon inverted size='big' color='red' name='arrow alternate circle left' /></a></b>}
                                            {(currentPage === 0 ) && <b><a style={{ color: '#ffffff'}}><Icon disabled inverted size='big' color='red' name='arrow alternate circle left' /></a></b>}  
                                        </div>
                                        
                                        <div>
                                            {(currentPage !== (pageCount - 1) ) &&<b><a className="pop-header-text-right" onClick={() => this.addPage()}><Icon inverted size='big' color='red' name='arrow alternate circle right' /></a></b>}
                                            {(currentPage === (pageCount - 1) ) &&<b><a style={{ color: '#ffffff'}}><Icon disabled inverted size='big' color='red' name='arrow alternate circle right' /></a></b>}
                                        </div>
                                        
                                    </div>
                                    <Divider/>
                                    <Card fluid>

                                        <Image src={pages[currentPage].img}  />
                                        
                                    </Card>
                                
                                </Segment>
                            
                            
                        </div>


                        <div className="pop-footer" />

                    </div>
                </div>)}
        </div>
        );
    }
}

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
