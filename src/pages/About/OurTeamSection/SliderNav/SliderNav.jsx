import React from "react";
import PropTypes from "prop-types";
import "./sliderNav.scss";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiOutlineRight } from "react-icons/ai";
/**
 * Renders the Nav bar for the sliders
 * @param navObjects
 * @param navFilter
 * @param activeSlide
 * @param setActive
 * @param status
 * @param setStatus
 * @returns {JSX.Element}
 * @constructor
 */
const SliderNav = ({
	navObjects,
	activeSlide,
	setActive,
	status,
	setStatus,
	setShowAll,
	setShowCurrent,
	setShowPast,
}) => {
	const handleChange = (event) => {
		const updatedStatus = event.target.value;
		setStatus(updatedStatus);
		if (updatedStatus === "all") {
			setShowAll(true);
			setShowCurrent(false);
			setShowPast(false);
		  } else if (updatedStatus === "current") {
			setShowAll(false);
			setShowCurrent(true);
			setShowPast(false);
		  } else if (updatedStatus === "past") {
			setShowAll(false);
			setShowCurrent(false);
			setShowPast(true);
		  }
	};
	const handleTeamChange = (event) => {
		const updatedTeam = event.target.value;
		setActive(updatedTeam);
	};
	const MyIcon = (props) => {
		const { style, ...otherProps } = props;
		const colorStyle = {
			color: "white",
		};
		const styles = { ...style, ...colorStyle };
		return <AiOutlineRight {...otherProps} style={styles} />;
	};

	return (
		<div className={"menu"}>
			<div className={`slider-nav-button-container`}>
				<div className="status-container" style={{ width: "100%" }}>
					<h4>Filter by Satus</h4>
					<form >
						<div className="status-item">
							<label>
								<input
									type="radio"
									value="all"
									checked={status === 'all'}
									onChange={handleChange}
								/>
								All
							</label>
						</div>
						<div className="status-item">
							<label>
								<input
									type="radio"
									value="current"
									checked={status === 'current'}
									onChange={handleChange}
								/>
								Current
							</label>
						</div>
						<div className="status-item">
							<label>
								<input
									type="radio"
									value="past"
									checked={status === 'past'}
									onChange={handleChange}
								/>
								Past
							</label>
						</div>
					</form>
				</div>
				<div className="job-title-container" id="select-form" style={{ width: "100%" }}>
					<h4>Filter by Job Title</h4>
					<div className="category-items">
							<div className="category-item" onClick={() => setActive("All Teams")}>
								All Teams
							</div>
							{navObjects.map((navObject, index) => (
							<div
								className="category-item"
								key={index}
								onClick={() => setActive(navObject.title)} 
							>
								{navObject.title}
							</div>
							))}
					</div>

				</div>
			</div>
	  	</div>
		// <div className={"menu"}>
		// 	<div className={`slider-nav-button-container`}>
		// 		<Toolbar
		// 			sx={{
		// 				width: "100%",
		// 			}}
		// 		>
		// 			<h4>Filter</h4>
		// 			<FormControl
		// 				id="select-form"
		// 				sx={{
		// 					width: "100%",
		// 				}}
		// 			>
		// 				<Select
		// 					sx={{
		// 						color: "white",
		// 						".MuiOutlinedInput-notchedOutline": {
		// 							border: "none",
		// 							cursor: "pointer",
		// 						},
		// 						"&.Mui-focused .MuiOutlinedInput-notchedOutline":
		// 							{
		// 								border: "none",
		// 								cursor: "pointer",
		// 							},
		// 						"&:hover .MuiOutlinedInput-notchedOutline": {
		// 							border: "none",
		// 							cursor: "pointer",
		// 						},
		// 					}}
		// 					id="select-dropdown-small"
		// 					value={activeSlide}
		// 					onChange={handleTeamChange}
		// 					IconComponent={MyIcon}
		// 				>
		// 					<MenuItem
		// 						value={"All Teams"}
		// 						onClick={() => {
		// 							setActive("All Teams");
		// 						}}
		// 					>
		// 						{"All Teams"}
		// 					</MenuItem>
		// 					{navObjects.map((navObject, index) => (
		// 						<MenuItem
		// 							key={index}
		// 							value={navObject.title}
		// 							onClick={() => {
		// 								setActive(navObject.title);
		// 							}}
		// 						>
		// 							{navObject.title}
		// 						</MenuItem>
		// 					))}
		// 				</Select>
		// 			</FormControl>
		// 			<FormControl
		// 				id="select-form"
		// 				sx={{
		// 					width: "100%",
		// 				}}
		// 			>
		// 				<Select
		// 					sx={{
		// 						color: "white",
		// 						".MuiOutlinedInput-notchedOutline": {
		// 							border: "none",
		// 							cursor: "pointer",
		// 						},
		// 						"&.Mui-focused .MuiOutlinedInput-notchedOutline":
		// 							{
		// 								border: "none",
		// 								cursor: "pointer",
		// 							},
		// 						"&:hover .MuiOutlinedInput-notchedOutline": {
		// 							border: "none",
		// 							cursor: "pointer",
		// 						},
		// 					}}
		// 					id="select-dropdown"
		// 					value={status}
		// 					onChange={handleChange}
		// 					IconComponent={MyIcon}
		// 				>
		// 					<MenuItem
		// 						value={"all"}
		// 						onClick={() => {
		// 							setShowAll(true);
		// 							setShowCurrent(false);
		// 							setShowPast(false);
		// 						}}
		// 					>
		// 						All Team Members
		// 					</MenuItem>
		// 					<MenuItem
		// 						value={"current"}
		// 						onClick={() => {
		// 							setShowAll(false);
		// 							setShowCurrent(true);
		// 							setShowPast(false);
		// 						}}
		// 					>
		// 						Current Team Members
		// 					</MenuItem>
		// 					<MenuItem
		// 						value={"past"}
		// 						onClick={() => {
		// 							setShowAll(false);
		// 							setShowCurrent(false);
		// 							setShowPast(true);
		// 						}}
		// 					>
		// 						Past Team Members
		// 					</MenuItem>
		// 				</Select>
		// 			</FormControl>
		// 		</Toolbar>
		// 	</div>
		// </div>
	);
};

SliderNav.propTypes = {
	/**
	 * Array of nav objects which include the title to be displayed as the nav link,
	 * and the flag that is check to see if the nav link should be underlined as active.
	 */
	navObjects: PropTypes.array,
	/**
	 * State which is set to the current active slide
	 */
	activeSlide: PropTypes.string,
	/**
	 * Function to update the activeSlide state variable to a new activeSlide
	 */
	setActive: PropTypes.func,
};

SliderNav.defaultProps = {
	navObjects: null,
	activeSlide: null,
	setActive: null,
};

export default SliderNav;
