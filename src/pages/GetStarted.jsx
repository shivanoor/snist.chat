import React from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider, { Slide } from "react-auto-image-slider";
import "./getstarted.scss";

// images
import img1 from "../img/bg/bg0.png";
import img2 from "../img/bg/bg3.jpg";
import img3 from "../img/bg/bg4.png";
import img4 from "../img/bg/bg5.png";

import logo1 from "../img/logo1.png";
export const GetStarted = () => {
	const navigate = useNavigate();
	const handleBtn = (e) => {
		e.preventDefault();
		navigate("/login");
	};
	return (
		<div className="container">
			<div className="index-navbar">
				<ul>
					<li>
						<div className="logo">
							<img src={logo1} alt="" />
						</div>
					</li>
					<li>
						<span>
							<a href="#About">About</a>
						</span>
						<span>
							<a href="#features">Features</a>
						</span>

						<span onClick={handleBtn}>Login</span>
					</li>
				</ul>
			</div>
			<div className="middle-section" id="About">
				<div className="info">
					<p>
						Sreenidhi chat and Media Website. Chat your way to new connections.
						Making communication simple and easy,join the conversation and never
						miss a beat,Stay in touch with the people who matter most!
						<span className="typing">Stay connected, anytime, anywhere.</span>
					</p>

					<button className="getstarted-btn" onClick={handleBtn}>
						Get Started
					</button>
				</div>
				<div className="slider">
					<ImageSlider effectDelay={500} autoPlayDelay={3000}>
						<Slide>
							<img
								src="https://res.cloudinary.com/smartsupp/image/upload/w_1024,h_740,f_auto,c_fill/v1652255012/upload/Everything_starts_with_a_conversation_2x_oaocqd.png"
								alt="img1"
							/>
						</Slide>
						<Slide>
							<img alt="img2" src={img2} />
						</Slide>
						<Slide>
							<img alt="img3" src={img3} />
						</Slide>
						<Slide>
							<img alt="img4" src={img1} />
						</Slide>
						<Slide>
							<img alt="img5" src={img4} />
						</Slide>
					</ImageSlider>
				</div>
			</div>
			<section className="features" id="features">
				<h1>Why Snist Chat ?</h1>
				<p>
					Because you need a <strong>free</strong> and <strong>easy</strong> way
					to communicate with your Friends.
				</p>

				<section>
					<div>
						<div className="f1">
							<div className="card one">
								<div className="bg1">
									<div className="img">
										<img src={img1} alt="" />
									</div>
								</div>
							</div>
							<div className="f-info">
								<h2 id="f-h1">Real Time Chat </h2>
								<p>
									Real-time chat refers to a form of communication where people
									can exchange messages and communicate with each other in
									real-time, or without any delay. This type of communication is
									typically done through messaging apps or chat software that
									allow users to send and receive text messages, emojis, images,
									and sometimes even voice or video calls.
								</p>
							</div>
						</div>
					</div>

					<div>
						<div className="f1 f2">
							<div className="card two">
								<div className="bg1">
									<div className="img">
										<img src={img4} alt="" />
									</div>
								</div>
							</div>
							<div className="f-info">
								<h2 id="f-h2">Get Close</h2>
								<p>
									Your customers have questions before they buy. Be where they
									are, when they need you, so they have the confidence they need
									to choose you over the competition. Every time.
								</p>
							</div>
						</div>
					</div>
				</section>
			</section>

			<footer>
				<span>
					All Rights Reserved &copy; <a href="snistchat.com">snistchat.com</a>
				</span>
				<span>
					<img
						src="https://sreenidhi.edu.in/wp-content/uploads/elementor/thumbs/Group-7407@2x-1-q1wr3fauf42mc4qhvyug2x0w6tx98nrb0909f37ljc.png"
						alt=""
					/>
				</span>
			</footer>
		</div>
	);
};
