export default function section(props) {
	
	let sectionClass;

	if(props.index % 2 == 0) {
		if(props.index % 4 == 0) {
			sectionClass += ' bg-gray-200';
		} else {
			sectionClass += ' bg-blue-200';
		}
	}

	return (
		<section className={sectionClass}>
			<div className='container mx-auto flex flex-col md:flex-row p-6 pb-12'>
				{props.children}
			</div>
    	</section>
	);
}