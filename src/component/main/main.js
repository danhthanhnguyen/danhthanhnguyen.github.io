import React from 'react';
import avatar from '../../image/avatar.jpg';
import img1 from '../../image/img1.jpg';
import img2 from '../../image/img2.jpg';
import Footer from '../../component/footer/footer.js';

class ListContact extends React.Component {
    render() {
        return (
            <div className="tim89">
                <div className="tim90">
                    <img className="tim91" src={this.props.image} alt=""/>
                </div>
                <div className="tim92">
                    <div className="tim93">
                        <h4 className="tim94">{this.props.name}</h4>
                        <h6 className="tim95">{this.props.jobs}</h6>
                        <p className="tim96">{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followContent: ["fab fa-linkedin", "fab fa-github", "fab fa-twitter"],
            followLinks: ["https://www.linkedin.com/in/thanhdanhnguyen", "https://github.com/danhthanhnguyen", "https://twitter.com/tthanhnguyenn"],
            languagesLogo: ["tim69 fab fa-js", "tim69 fab fa-python", "tim69 fab fa-java", "tim69 fab fa-html5", "tim69 fab fa-css3-alt"],
            languages: ["JavaScript", "Python", "Java", "HTML5", "CSS3"],
            toolsLogo: ["tim80 fab fa-github", "tim80 fab fa-react", "tim80 fab fa-angular", "tim80 fab fa-bootstrap", "tim80 fab fa-node-js", "tim80 fab fa-adobe"],
            tools: ["Github", "React Js", "Angular", "Bootstrap", "Node Js", "Adobe"],
            //list contact
            image: [avatar, img1, img2],
            name: ["Thanh", "Thanh Danh", "Ng D Thanh"],
            jobs: ["Lead Designer", "Lead Marketer", "Lead Developer"],
            description: ["Not sure why we have 2 other Thanh in my team.", "If I was good at marketing, I wouldn't be in this team.", "Backend, Front-end, FullStack. I can do everything!"]
        }
    }
    componentDidMount() {
        const logo = document.querySelector('.tim30');
        window.addEventListener('scroll', function() {
            let roll = window.pageYOffset;
            logo.style.transform = `translate3d(0px, ${roll / 3}px, 0px)`;
        });
        //ripple
        const list = document.querySelectorAll('.tim44');
        const ripple = document.querySelectorAll('.tim45');
        const content = document.querySelector('.tim31');
        for (let links = 0; links < list.length; links++) {
            list[links].onmousedown = function(e) {
                let createRipple = document.createElement('span');
                createRipple.classList.add('tim19');
                let size = Math.max(this.clientWidth, this.clientHeight);
                createRipple.style.width = createRipple.style.height = `${size}px`;
                createRipple.style.top = `${e.clientY - this.offsetTop - size / 2 - 330 + window.pageYOffset}px`;
                createRipple.style.left = `${e.clientX - this.offsetLeft - size / 2 - content.offsetLeft}px`;
                ripple[links].appendChild(createRipple);
                createRipple.addEventListener('webkitAnimationEnd', () => {
                    ripple[links].removeChild(createRipple);
                });
            }
        }
    }
    render() {
        const follow = this.state.followContent.map((value, index) =>
        <li key={index.toString()} className="tim42 tim44"><a href={this.state.followLinks[index]} target="_blank" rel="noopener noreferrer"><i className={value}></i></a><span className="tim43 tim45"></span></li>);
        const programLanguages = this.state.languagesLogo.map((value, index) =>
        <li key={index.toString()} className="tim68"><i className={value}></i><span className="tim70">{this.state.languages[index]}</span></li>);
        const toolsFrameworks = this.state.toolsLogo.map((value, index) =>
        <li key={index.toString()} className="tim79"><i className={value}></i><span className="tim81">{this.state.tools[index]}</span></li>);
        return (
            <section className="tim28">
                <div className="tim29">
                    <div id="about" className="tim30"></div>
                    <div id="portfolio" className="tim31">
                        <div className="tim32">
                            <div className="tim33">
                                <img className="tim34" src={avatar} alt=""/>
                            </div>
                            <div className="tim35">
                                <div className="tim36">
                                    <h1 className="tim37">
                                        Thanh
                                    </h1>
                                    <h3 className="tim38">
                                        Web Developer
                                    </h3>
                                    <h5 className="tim39">
                                        <i className="fas fa-map-marker-alt"/>
                                        San Francisco, CA
                                    </h5>
                                </div>
                            </div>
                            <div className="tim40">
                                <ul className="tim41">
                                    {follow}
                                </ul>
                            </div>
                            <div className="tim46">
                                <p className="tim47">
                                    {/* target="_blank" rel="noopener noreferrer": open link in new tab*/}
                                    Web Developer with 6+ years of experience in Javascript, NodeJS, React, HTML, CSS, working as a Full-stack Developer at 
                                    <a className="tim48" href="https://google.com" target="_blank" rel="noopener noreferrer"> Google</a>. Strong engineering professional with a Bachelor's Degree focused in Computer Science from University of California, Stanford.
                                </p>
                            </div>
                            <div className="tim49">
                                <div className="tim50">
                                    <div className="tim51">
                                        <i className="smile far fa-smile"></i>
                                    </div>
                                    <div className="tim52">
                                        <h2 className="tim53">Hello World!</h2>
                                        <h5 className="tim54">Welcome to my personal website. I hope you can find something helpful about me!
                                        <br/>
                                        I've known programming since the age of 16, I'm curious to try to learn about it. And now I am known as a Full-Stack developer!
                                        <br/>
                                        Outside of working time, I love to coding, play sports, play video game (Play Station and Counter Strike).
                                        <br/>
                                        I also LOVE learning new technologies and using them to solve real life's problems! I can <b>coffee</b>, <b>coding</b>, <b>debug</b>, and <b>repeat</b>!
                                        </h5>
                                    </div>
                                    <div className="tim44 tim55">
                                        <button className="tim56">
                                            <span className="tim57">Updated Resume</span>
                                            <span className="tim45 tim58"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="tim59">
                                    <div className="tim60">
                                        <div className="tim61">
                                            <div className="tim62">
                                                <i className="tim63 icon ion-md-code"></i>
                                            </div>
                                            <div className="tim64">
                                                <h5 className="tim65">
                                                    Programming Languages
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="tim66">
                                            <ul className="tim67">
                                                {programLanguages}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tim71">
                                        <div className="tim72">
                                            <div className="tim73">
                                                <i className="tim74 icon ion-md-hammer"></i>
                                            </div>
                                            <div className="tim75">
                                                <h5 className="tim76">
                                                    Tools and Frameworks
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="tim77">
                                            <ul className="tim78">
                                                {toolsFrameworks}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="contact" className="tim82">
                        <div className="tim83">
                            <div className="tim84">
                                <div className="tim85">
                                    <h2 className="tim86">Our Amazing Team</h2>
                                    <h5 className="tim87">Together, these guys make an awesome team.</h5>
                                </div>
                                <div className="tim88">
                                    <ListContact image={this.state.image[0]} name={this.state.name[0]} jobs={this.state.jobs[0]} description={this.state.description[0]}/>
                                    <ListContact image={this.state.image[1]} name={this.state.name[1]} jobs={this.state.jobs[1]} description={this.state.description[1]}/>
                                    <ListContact image={this.state.image[2]} name={this.state.name[2]} jobs={this.state.jobs[2]} description={this.state.description[2]}/>
                                </div>
                            </div>
                        </div>
                    </div>      
                    <div className="tim97">
                        <footer className="App-footer">
                            <Footer/>
                        </footer>
                    </div>
                </div>
            </section>
        );
    }
}
export default Main;
