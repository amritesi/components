import React, {JSX} from 'react';
import PropTypes from 'prop-types';
import webexComponentClasses from '../../helpers';
import {useRef} from '../../hooks';
import Tooltip from '../Tooltip/Tooltip';

/**
 * Button component
 *
 * @param {object} props  Data passed to the component
 * @param {string} props.ariaLabel  String that labels the current element
 * @param {boolean} props.autoFocus  Flag indicating if the button has autofocus
 * @param {JSX.Element} props.children  List of children
 * @param {string} [props.className]  Custom CSS class to apply
 * @param {boolean} props.isDisabled  Flag indicating button disabled
 * @param {Function} props.onClick  OnClick callback
 * @param {object} props.style  Inline style object for the component
 * @param {number} props.tabIndex  Value of the tabIndex
 * @param {string} props.tooltip  Tooltip to be displayed
 * @param {'default'|'join'|'cancel'|'ghost'} [props.type='default']  Button type
 * @returns {object}  JSX of the element
 */
export default function Button({
  ariaLabel,
  autoFocus,
  children,
  className,
  isDisabled,
  onClick,
  style,
  tabIndex,
  tooltip,
  type,
}) {
  const [cssClasses] = webexComponentClasses('button', className, {[`${type}`]: true});
  const buttonRef = useRef();

  return (
    <>
      <button
        className={cssClasses}
        disabled={isDisabled}
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        tabIndex={tabIndex}
        ref={buttonRef}
        style={style}
      >
        {children}
      </button>
      {tooltip && (
        <Tooltip target={buttonRef.current}>
          {tooltip}
        </Tooltip>
      )}
    </>
  );
}

Button.propTypes = {
  ariaLabel: PropTypes.string,
  autoFocus: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  tooltip: PropTypes.string,
  style: PropTypes.shape(),
  tabIndex: PropTypes.number,
  type: PropTypes.string,
};

Button.defaultProps = {
  ariaLabel: undefined,
  autoFocus: false,
  className: '',
  isDisabled: false,
  tooltip: '',
  style: {},
  tabIndex: undefined,
  type: 'default',
};
