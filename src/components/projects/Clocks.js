import React from 'react';
import {Segment, Header, Divider, Card, Image,} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

const pages =[
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(28).png?alt=media&token=49d875af-41e3-444d-a533-f5f11a22c167',
        name: 'Alarm screen'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(set%20alarm).png?alt=media&token=f20d4a29-6bc2-4659-91cc-e4f0981a691c',
        name: 'Set Alarm'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(28).png?alt=media&token=49d875af-41e3-444d-a533-f5f11a22c167',
        name: 'Timer screen'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/fir-site-3277b.appspot.com/o/Screenshot%20(stopwatch).png?alt=media&token=c9d4dc15-49c3-4d76-b8d3-07cffaccea0d',
        name: 'Stopwatch screen'
    },
]
const Clocks = () => (
    <div>
        <Segment>
            <Header>
                <Header.Content>
                    <Header.Subheader>
                        Clocks
                    </Header.Subheader>
                </Header.Content>
            </Header>
        </Segment>
        <Segment>
            <em> summary</em>
            <p>
            It is a react-native app that is built for android devices. It has a stopwatch, timer and alarm which is written in pure JavaScript and react-native.
            </p>
            <Divider/>
            <div className='ui link cards'>
                {pages.map((page, index)=>
                    <Card raised key={index.toString()} color='red'>    
                        <Image src={page.img} alt="not available"/>
                        <Card.Content>
                            <Card.Description>
                                <Link to={`/image/${page.name}?img=${page.img}`}>  {page.name}</Link>
                               
                                
                            </Card.Description>
                        </Card.Content>
                    </Card>    
                )}
            </div>
        </Segment>
        <Segment>
        <em>some technologies and packages used</em>
            <ul>
                <li> <b>react native</b>: It allowed me to write react codes for platform specific operating system (ios and android). It also allows for code sharing within the app for the respective platforms. It is like react without the HTML syntax and some JavaScript syntax. </li>

                <li> <b>react-navigation</b>: It allowed me to navigate between screens. By default, comes with different navigation types.  I.e. stackNavigator, bottonTabNavigator, switchNavigator etc. Futhermore, it allows programers to make their own custom navigators.</li>

                <li> <b> AsycStorage</b>: For storing data. It is similar to html5 localStorage and It works asynchronous like fetch data from a database. </li>

                <li> <b> TimePickerAndroid</b>: A clock to select time for the timer screen. It can be customized based on the given options. </li>
            </ul> 

        <Divider/>
        <em>Other packages used</em>
        <p>
            "react": "16.4.1",
            "react-native": "0.55.4",
            "react-native-vector-icons": "^4.6.0",
            "react-navigation": "^2.9.3"
        </p>

        </Segment>

    </div>
);

export default Clocks;