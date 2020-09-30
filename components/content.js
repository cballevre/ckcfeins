import Section from './section'
import Left from './left'

export default function content(props) {
	
	return (
		<Section index={props.index}>
			<Left>
    			<h2 className='text-xl font-bold text-black'>{ props.title }</h2>
    		</Left>
    		<div className='text-lg leading-normal text-gray-800 content md:w-3/5'>
    			{ props.children }
    		</div>
    	</Section>
	);
}