import Star from "./Star";
interface Stars {
	count: number,
}

function Stars({ count }: Stars) {
	if (count < 1 || count > 5 || typeof (count) !== 'number') {
		return
	}
	let stars = [];
	for (let i = 1; i <= count; i += 1) {
		stars.push(<Star/>)
	}
	
	return (
		<ul className="card-body-stars u-clearfix">
			<li>
				{stars}
			</li>
		</ul>

	);
}

export default Stars;