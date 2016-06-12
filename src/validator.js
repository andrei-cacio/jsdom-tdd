import $ from 'jquery';

export const isEmpty = value => !value.length;

export default function getValidator(rule, inputSelector, valueGetter) {
	return {
		validate() {
			const $input = $(inputSelector);
			const value = valueGetter();

			if (isEmpty(value)) {
				$input.addClass('error');
				return false;
			}
			else {
				$input.removeClass('error');
				return true;
			}
		}
	}
}