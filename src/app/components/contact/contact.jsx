"use client"
import React from 'react';
import SubHeader from "../headers/subheader"
import SecondaryPageDivider from "../pagedivider/secondarypagedivider.jsx"
import { GithubSVG, LinkedInSVG, MailSVG, InstagramSVG, UpRightSVG } from "../contact/svgs.jsx"
import styles from "./svgs.module.css"

const github = "https://github.com/vvinniev34"
export function handleGithubClick() {
    window.open(github, '_blank');
}

const linkedin = "https://www.linkedin.com/in/vincent-liu-1271e"
export function handleLinkedInClick() {
    window.open(linkedin, '_blank');
}

const email = "liu01841@umn.edu"
export function handleEmailClick() {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
}

const Contact = () => {
    return (
        <SubHeader 
            title="Contact"
            description={
                <div className='md:text-2xl'>
                    <div className='font-semibold'>Let's connect</div>
                    <div>Get in touch for opportunites or just to say hi! 👋</div>
                    <div className="flex w-[27rem] md:w-[35rem]" style={{ maxWidth:"fit-content", paddingTop:'1rem' }}>
                        <div className="flex flex-col ">
                        <div className="flex m-5" style={{width:"90%"}}>
                            <div className={styles.contactSVG} onClick={handleGithubClick}>
                                <GithubSVG/>
                            </div>
                            <div className="flex justify-center items-center" style={{width:"75%"}}>
                                <div className="w-auto textHover" style={{cursor:"pointer"}} onClick={handleGithubClick}>
                                    GitHub
                                </div>
                            </div>
                            <div className={styles.contactSVG} onClick={handleGithubClick}>
                                <UpRightSVG/>
                            </div>
                        </div>
                        
                        <SecondaryPageDivider dark={true}/>
                        
                        <div className="flex m-5" style={{width:"90%"}}>
                            <div className={styles.contactSVG} onClick={handleLinkedInClick}>
                                <LinkedInSVG/>
                            </div>
                            <div className="flex justify-center items-center" style={{width:"75%"}}>
                                <div className="w-auto textHover" style={{cursor:"pointer"}} onClick={handleLinkedInClick}>
                                    LinkedIn
                                </div>
                            </div>
                            <div className={styles.contactSVG} onClick={handleLinkedInClick}>
                                <UpRightSVG/>
                            </div>
                        </div>
                        
                        <SecondaryPageDivider dark={true}/>

                        <div className="flex m-5" style={{width:"90%"}}>
                            <div className={styles.contactSVG} onClick={handleEmailClick}>
                                <MailSVG/>
                            </div>
                            <div className="flex justify-center items-center" style={{width:"75%"}}>
                                <div className="w-auto textHover" style={{cursor:"pointer"}} onClick={handleEmailClick}>
                                    {email}
                                </div>
                            </div>
                            <div className={styles.contactSVG} onClick={handleEmailClick}>
                                <UpRightSVG/>
                            </div>
                        </div>

                        <SecondaryPageDivider dark={true}/>

                        <div className="flex m-5" style={{width:"90%"}}>
                            <div className={styles.contactSVG}>
                                <InstagramSVG/>
                            </div>
                            <div className="flex justify-center items-center" style={{width:"75%"}}>
                                <div className="w-auto textHover" style={{cursor:"pointer"}}>
                                    Instagram
                                </div>
                            </div>
                            <div className={styles.contactSVG}>
                                <UpRightSVG/>
                            </div>
                        </div>
                        </div>
                    </div>
              </div>
            }
            color={"white"}
            descriptionColor={"white"}
        />
    );
}

export default Contact;
