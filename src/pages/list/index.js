import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
	@Intact.template()
	static template = template;
	
	defaults() {
	    return {
	        message: 'hello Intact'
        }
    }
    
	_init() {
		console.log(1);
	}
}