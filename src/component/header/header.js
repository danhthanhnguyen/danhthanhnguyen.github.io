import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuContent: ['About', 'Portfolio', 'Contact', 'Resume', 'Code'],
            followContent: ["fab fa-linkedin", "fab fa-github", "fab fa-twitter"],
            followLinks: ["https://www.linkedin.com/in/thanhdanhnguyen", "https://github.com/danhthanhnguyen", "https://twitter.com/tthanhnguyenn"],
            connect: ["#about", "#portfolio", "#contact", "#resume", "#code"]
        }
    }
    componentDidMount() {
        const list = document.querySelectorAll('.tim17');
        const ripple = document.querySelectorAll('.tim18');
        //ripple effect
        for (let links = 0; links < list.length; links++) {
            list[links].onmousedown = function(e) {
                let createRipple = document.createElement('span');
                createRipple.classList.add('tim19');
                let size = Math.max(this.clientWidth, this.clientHeight);
                createRipple.style.width = createRipple.style.height = `${size}px`;
                createRipple.style.top = `${e.clientY - this.offsetTop - size / 2}px`;
                createRipple.style.left = `${e.clientX - this.offsetLeft - size / 2}px`;
                ripple[links].appendChild(createRipple);
                createRipple.addEventListener('webkitAnimationEnd', () => {
                    ripple[links].removeChild(createRipple);
                });
            }
        }
        //scroll suave - on codepen
        const menuItems = document.querySelectorAll('.scroll');
        function getScrollTopByHref(element) {
            const id = element.getAttribute('href');
            return document.querySelector(id).offsetTop;
        }
        function scrollToPosition(to) {
            smoothScrollTo(0, to);
        }
        function scrollToIdOnClick(event) {
            event.preventDefault();
            const to = getScrollTopByHref(event.currentTarget);
            scrollToPosition(to);
        }
        for (let item = 0; item < menuItems.length; item++) {
            //resume, code on click
            if (item > 2) {
                menuItems[item].addEventListener('click', function(event) {
                    event.preventDefault();
                });
            } else {//about, portfolio and contact on click
                menuItems[item].addEventListener('click', scrollToIdOnClick);
            }
        }
        function smoothScrollTo(endX, endY, duration) {
            const startX = window.scrollX || window.pageXOffset;
            const startY = window.scrollY || window.pageYOffset;
            const distanceX = endX - startX;
            const distanceY = endY - startY;
            const startTime = new Date().getTime();
            duration = typeof duration !== 'undefined' ? duration : 1200;
            // Easing function
            const easeInOutQuad = (time, from, distance, duration) => {
                time /= duration / 2;
                if (time < 1) {
                    return distance / 2 * time * time + from;
                }
                time--;
                return -distance / 2 * (time * (time - 2) - 1) + from;
            };
            const timer = setInterval(() => {
                const time = new Date().getTime() - startTime;
                const newX = easeInOutQuad(time, startX, distanceX, duration);
                const newY = easeInOutQuad(time, startY, distanceY, duration);
                if (time >= duration) {
                    clearInterval(timer);
                }
                window.scroll(newX, newY);
            }, 1000 / 60) //60 fps
        };
    }
    hamburger = () => {
        const menu = document.querySelector('.tim20');
        const line1 = document.querySelector('.tim23');
        const line2 = document.querySelector('.tim24');
        menu.classList.toggle('tim25');
        line1.classList.toggle('tim26');
        line2.classList.toggle('tim27');
    }
    render() {
        const menu = this.state.menuContent.map((value, index) =>
        <li key={index.toString()} className="tim9 tim17"><a className="scroll" href={this.state.connect[index]}><span className="tim10">{value}</span><span className="tim11 tim18"></span></a></li>);
        const follow = this.state.followContent.map((value, index) =>
        <li key={index.toString()} className="tim12 tim17"><a href={this.state.followLinks[index]} target="_blank" rel="noopener noreferrer"><i className={value}></i></a><span className="tim13 tim18"></span></li>);
        return (
            <div className="tim1">
                <div className="tim2">
                    <button className="tim3 tim17">
                        <span className="tim4">Thanh</span>
                        <span className="tim5 tim18"></span>
                    </button>
                </div>
                <div className="tim20">
                    <div className="tim6">
                        <nav className="tim7">
                            <ul className="tim8">
                                {menu}
                            </ul>
                        </nav>
                    </div>
                    <div className="tim14">
                        <nav className="tim15">
                            <ul className="tim16">
                                {follow}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div onClick={this.hamburger} className="tim21">
                    <div className="tim22">
                        <div className="tim23"></div>
                        <div className="tim24"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
