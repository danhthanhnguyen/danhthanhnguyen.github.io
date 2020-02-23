import React from 'react';

class List extends React.Component {
    render() {
        return (
            <li className="tim144">
                <span className="tim145">{this.props.Text}</span>
            </li>
        );
    }
}
class ContentList extends React.Component {
    render() {
        return (
            <div className="tim139">
                <div className="tim140">
                    <h4 className="tim141">{this.props.ContentName}</h4>
                </div>
                <div className="tim142">
                    <ul className="tim143">
                        {this.props.TagList}
                    </ul>
                </div>
            </div>
        );
    }
}
class ListResume extends React.Component {
    constructor(props) {
        super(props);
        this.contentFirstListResume = this.props.indexFirstList.map((value, index) =>
        <List key={index.toString()} Text={value}/>);
        this.contentLastListResume = this.props.indexLastList.map((value, index) =>
        <List key={index.toString()} Text={value}/>);
    }
    render() {
        return (
            <div className="tim131">
                <div className="tim132">
                    <div className="tim133">
                        <i className={this.props.Icon}></i>
                    </div>
                    <div className="tim135">
                        <h3 className="tim136">{this.props.Heading}</h3>
                    </div>
                </div>
                <div className="tim137">
                    <div className="tim138">
                        <ContentList ContentName={this.props.EnterFirstName} TagList={this.contentFirstListResume}/>
                        <ContentList ContentName={this.props.EnterLastName} TagList={this.contentLastListResume}/>
                    </div>
                </div>
            </div>
        );
    }
}
class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ["San Francisco, CA", "+(84)-978605073", "nguyendanhthanh980@gmail.com", "linkedin.com/in/thanhdanhnguyen", "thanhdanhnguyen.netlify.com"],
            icon: ["iconAddress fas fa-home", "iconAddress fas fa-phone-alt", "iconAddress fas fa-envelope", "iconAddress fab fa-linkedin", "iconAddress fas fa-globe-europe"],
            iconContent: ["tim134 fas fa-briefcase", "tim134 fas fa-tools", "tim134 fas fa-tasks", "tim134 fas fa-user-graduate"],
            heading: ["Experience", "Skills", "Projects", "Education"],
            firstHeading: ["Software Engineer", "Programming Languages", "Facebook - Extension", "Bachelor of Science"],
            lastHeading: ["Freelancer", "Tools and Frameworks", "Map Editor", "Computer Science"],
            firstExperience: ["Build web-based user interfaces and content layouts using HTML5, CSS3, JavaScript, React.js, and using web template engine Jinja.", "Work closely with other engineers to ensure seamless integration of front ends with backend and data infrastructure.", "Collaborate with design, marketing, customer success teams to understand core needs and adopt a user-centric approach to problem solving."],
            lastExperience: ["Developing responsive websites using React.js, HTML5, CSS3, JavaScript, and using frameworks such as Bootstrap, jQuery, Moment JS.", "Developing Google Chrome extensions and maintaining extensions using React.js, HTML5, CSS3, JavaScript, and using frameworks such as Bootstrap, jQuery, Moment JS.", "Collaborated with clients to generate web content to meet their needs."],
            firstSkills: ["C/C++, Python, Java.", "JavaScript/ES6.", "HTML5/CSS3/XML."],
            lastSkills: ["Git, Qt Creator, Visual Studio, Visual Studio Code, Adobe Dreamweaver, Burp Suites.", "React.js, Bootstrap, jQuery, Apollo Client, GraphQL.", "Node.js, Express.js, SQLite, REST API."],
            firstProjects: ["Created a Chrome extension to assist Facebook users with exclusive features.", "Written in React.js, Node.js, Express.js, HTML5, CSS3, jQuery and used Bootstrap 4, Facebook Query Language, Graph API.", "Available on Chrome Store."],
            lastProjects: ["Worked with a team of five to develop a Map Editor.", "Written in C++ using Qt Creator IDE and Qt libraries.", "Helped the team to build UI, graphic scene, units, assets and buildings."],
            university: ["University of California, Stanford."]
        }
    }
    render() {
        const contactMe = this.state.location.map((value, index) => 
        <li key={index.toString()} className="tim127"><span className="tim128">{value}</span><i className={this.state.icon[index]}></i></li>);
        return (
            <div className="tim119">
                <div className="tim120">
                    <div className="tim121">
                        <div className="tim122">
                            <h1 className="tim123">Thanh</h1>
                        </div>
                    </div>
                    <div className="tim124">
                        <div className="tim125">
                            <ul className="tim126">
                                {contactMe}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tim129">
                    <div className="tim130">
                        <ListResume Icon={this.state.iconContent[0]} Heading={this.state.heading[0]} EnterFirstName={this.state.firstHeading[0]} EnterLastName={this.state.lastHeading[0]} indexFirstList={this.state.firstExperience} indexLastList={this.state.lastExperience}/>
                        <ListResume Icon={this.state.iconContent[1]} Heading={this.state.heading[1]} EnterFirstName={this.state.firstHeading[1]} EnterLastName={this.state.lastHeading[1]} indexFirstList={this.state.firstSkills} indexLastList={this.state.lastSkills}/>
                        <ListResume Icon={this.state.iconContent[2]} Heading={this.state.heading[2]} EnterFirstName={this.state.firstHeading[2]} EnterLastName={this.state.lastHeading[2]} indexFirstList={this.state.firstProjects} indexLastList={this.state.lastProjects}/>
                        <ListResume Icon={this.state.iconContent[3]} Heading={this.state.heading[3]} EnterFirstName={this.state.firstHeading[3]} EnterLastName={this.state.lastHeading[3]} indexFirstList={this.state.university} indexLastList={this.state.university}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Resume;