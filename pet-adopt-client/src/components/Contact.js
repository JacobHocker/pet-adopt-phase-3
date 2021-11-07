import React from 'react';
import { Container } from 'react-bootstrap';
import {SocialMediaIconsReact} from 'social-media-icons-react';

function Contact() {
    return(
        <div className='contact-page'>
            <Container>
                <div className='contact-container'>
                    <div className='contact-header'>
                        <h1>If you would like to reach out to us.</h1>
                        <h2>You can click on one of the icons!</h2>
                    </div>
                    <div className='icon-container'>
                        <div className='icon'>
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="linkedin" iconColor="rgba(234,231,231,1)" backgroundColor="rgba(232,11,11,0.99)" iconSize="5" roundness="11%" url="https://linkedin.com/in/jacob-hocker-23a064220" size="100" />
                        </div>
                        <div className='icon'>
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="medium" iconColor="rgba(234,231,231,1)" backgroundColor="rgba(232,11,11,0.99)" iconSize="5" roundness="11%" url="https://jacobhocker.medium.com" size="100" />
                        </div>
                        <div className='icon'>
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="github" iconColor="rgba(234,231,231,1)" backgroundColor="rgba(232,11,11,0.99)" iconSize="5" roundness="11%" url="https://github.com/JacobHocker" size="100" />
                        </div>
                    </div>
                </div>   
            </Container>
        </div>
    )
}

export default Contact;