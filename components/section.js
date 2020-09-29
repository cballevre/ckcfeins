export default function section(props) {
	
	let sectionClass = 'pb-12 p-6 flex flex-col md:flex-row';
	let sizeLeftClass = 'mb-6';
	let sizeRightClass = 'text-lg leading-normal text-gray-700';

	if(props.size == "short") {
		sizeLeftClass += ' md:w-2/5';
		sizeRightClass += ' md:w-3/5';
	} else {
		sizeLeftClass += ' md:w-2/5';
		sizeRightClass += ' md:w-3/5';
	}

	if(props.index % 2 == 0) {
		if(props.index % 4 == 0) {
			sectionClass += ' bg-gray-100';
		} else {
			sectionClass += ' bg-blue-100';
		}
		
	}

	return (
		<section className={sectionClass}>
    		<div className={sizeLeftClass}>
    			<h2 class="text-xl font-bold text-gray-900">{ props.title }</h2>
    		</div>
    		<div className={sizeRightClass}>
    			{props.children}
    		</div>
    	</section>
	);
}