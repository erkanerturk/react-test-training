import checkPropTypes from 'check-prop-types';
import { ShallowWrapper } from 'enzyme';

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of date-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val): ShallowWrapper => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProp) => {
  const propError = checkPropTypes(component.propTypes, conformingProp, 'prop', component.name);
  expect(propError).toBeUndefined();
};
