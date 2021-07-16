import React, { useState } from 'react';

const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false)

	const changeStatus = () => {
		setEditMode(true)
	}

	const saveStatus = () => {
		setEditMode(false)
	}
	return (
		<div>
			{
				!editMode &&
				<span onClick={changeStatus}>{props.aboutMe}</span>
			}
			{
				editMode &&
				<input autoFocus={true} onBlur={saveStatus} value={props.aboutMe} />
			}
		</div>
	);
};

export default ProfileStatus;