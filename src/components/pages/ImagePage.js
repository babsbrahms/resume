import React from 'react';
import {Segment, Card, Image} from "semantic-ui-react";
import PropTypes from 'prop-types';
// import qs from "query-string"

const ImagePage = ({match, location}) => (
    <Segment>
        <Card fluid>
            {/* <Image src={`${qs.parse(location.search).img}=media&token=${qs.parse(location.search).token}`} /> */}
            <Image src={location.search.split('?img=')[1]} />
            <Card.Content>
                <Card.Header>
                   {match.params.name}
                   <p>{location.search.split('?img=')[1]}</p>
                </Card.Header>
            </Card.Content>
        </Card>
        
    </Segment>
);

export default ImagePage;

ImagePage.propTypes={
    match:PropTypes.shape({
        params:PropTypes.shape({
            name: PropTypes.string
        })
    }),
    location: PropTypes.shape({
        search: PropTypes.string
    })
}