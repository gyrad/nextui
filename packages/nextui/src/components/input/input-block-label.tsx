import React from 'react';
import useTheme from '../../hooks/use-theme';
import clsx from '../../utils/clsx';

export interface InputBlockLabelLabel {
  label: string;
  htmlFor: string;
  selfValue?: string;
  asPlaceholder?: boolean;
  heightRatio?: string | undefined;
  hover?: boolean;
}

const InputBlockLabel: React.FC<InputBlockLabelLabel> = ({
  label,
  htmlFor,
  selfValue,
  asPlaceholder = false,
  heightRatio,
  hover,
}) => {
  const theme = useTheme();
  return (
    <label
      className={clsx('input-label-block', {
        'as-placeholder': asPlaceholder,
        'with-value': selfValue,
        hover,
      })}
      htmlFor={htmlFor}
    >
      {label}
      <style jsx>{`
        .input-label-block {
          display: block;
          font-weight: normal;
          color: ${theme.palette.text};
          padding: 0 0 0 4px;
          margin-bottom: ${theme.layout.gapQuarter};
          font-size: 0.875rem;
          line-height: 1.5;
          -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
          -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
        }
        .input-label-block > :global(*:first-child) {
          margin-top: 0;
        }
        .input-label-block > :global(*:last-child) {
          margin-bottom: 0;
        }
        .as-placeholder {
          position: absolute;
          padding: 0;
          z-index: 10;
          left: 12px;
          top: 20%;
          margin-bottom: 0;
          transition: left 0.25s ease 0s, color 0.25s ease 0s, top 0.25s ease 0s;
          color: ${theme.palette.accents_3};
        }
        .as-placeholder.hover,
        .as-placeholder.with-value {
          color: ${theme.palette.text};
          top: calc(${heightRatio} * ${theme.layout.gapHalf} * -1 - 8px);
          left: 4px;
        }
      `}</style>
    </label>
  );
};

const MemoInputBlockLabel = React.memo(InputBlockLabel);

export default MemoInputBlockLabel;
