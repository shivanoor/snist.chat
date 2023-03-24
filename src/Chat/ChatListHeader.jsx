import React, { useContext, useEffect, useRef, useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsisVertical,
	faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AccountContext } from "../contexts/AccountProvider";

export const ChatListHeader = () => {
	const { account, setAccount } = useContext(AccountContext);
	const [open, setOpen] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef(null);

	const [ProfileOpen, setProfileOpen] = useState(false);

	const handleMenuClick = (event) => {
		setOpen(true);
		setShowMenu(true);
	};
	const handleClickBack = (event) => {
		setOpen(false);
		setProfileOpen(false);
	};

	const handleDialogClose = (event) => {
		setTimeout(() => {
			setOpen(false);
			setShowMenu(false);
		}, 250);
	};

	const handleClickOutsideMenu = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			handleDialogClose();
		}
	};

	const handleDialogLogOut = (event) => {
		// googleLogout();
		setAccount(null);
		// <Navigate to="/login"></Navigate>
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutsideMenu);
		return () => {
			document.removeEventListener("mousedown", handleClickOutsideMenu);
		};
	}, []);

	const viewProfile = (event) => {
		event.preventDefault();
		setProfileOpen(true);
	};
	return (
		<>
			<div className="chatlist-header">
				<ul>
					<li>
						<img
							src={account.picture}
							alt="app-logo"
							className="app-logo"
							onClick={viewProfile}
						/>
					</li>
					<li>
						<div className="icons">
							<FontAwesomeIcon icon={faMessage} />
							<FontAwesomeIcon
								className="menu-icon"
								icon={faEllipsisVertical}
								onClick={handleMenuClick}
							/>
							{open && showMenu && (
								<div className="menu" ref={menuRef}>
									<button onClick={viewProfile}>Profile</button>

									<button onClick={handleDialogLogOut}>LogOut</button>
									<button onClick={handleDialogClose}>Close</button>
								</div>
							)}
						</div>
					</li>
				</ul>
				{ProfileOpen && (
					<div className="profile">
						<div className="profile-header">
							<FontAwesomeIcon
								icon={faArrowLeft}
								onClick={handleClickBack}
							></FontAwesomeIcon>
							<h3>Profile</h3>
						</div>
						<div className="profile-body">
							<div className="img">
								<img src={account.picture} alt="profile-photo" />
							</div>
							<div className="name">
								<h4>Your Name</h4>
								<h4>{account.name}</h4>
							</div>
							<div className="name">
								<h4>Email</h4>
								<h4>{account.email}</h4>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default ChatListHeader;
