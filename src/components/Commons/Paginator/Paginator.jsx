import { useState } from 'react';
import classes from './Paginator.module.css';
import cn from 'classnames'

const Paginator = (props) => {
	let pageCount = Math.ceil(props.totalUsers / props.pageSize)
	let portionSize = 5

	let pages = []
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pageCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionNumber = portionNumber * portionSize

	return (
		<div>
			{
				portionNumber > 1 &&
				<span>
					<button className={classes.button} onClick={() => { setPortionNumber(portionNumber - 1) }}>{'<<'}</button>
					<span className={classes.points} >...</span>
				</span>
			}
			{
				pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
					.map(p => {
						return <span className={cn({ [classes.selectedPage]: props.currentPage === p }, classes.pageNumber)}
							key={p} onClick={(e) => { props.onPageChenched(p) }} >{p}</span>
					})
			}
			{
				portionCount > portionNumber &&
				<span>
					<span className={classes.points} >...</span>
					<button className={classes.button} onClick={() => { setPortionNumber(portionNumber + 1) }}>{'>>'}</button>
				</span>
			}
		</div>
	);
};

export default Paginator;