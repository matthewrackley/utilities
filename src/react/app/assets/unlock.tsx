import * as React from "react";
import styled, { WebTarget } from 'styled-components';
import { Styled } from 'styled-components/dist/constructors/constructWithOptions';

interface StyledProps {
  color: string,
  borderWidth: string,
  borderRadius: string;
  children: React.ReactNode,
  width: string | number,
  height: string | number;
};
const Border = styled.div.attrs<StyledProps>((attr) => {
  return {
    color: attr.color,
    borderWidth: attr.borderWidth,
    borderRadius: attr.borderRadius
  };
})<StyledProps>`
  background-color: #FFFFFF00;
  border-color: ${({ color }) => color};
  border-width: ${({ borderWidth }) => borderWidth};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
type Styling<E extends WebTarget, P extends object> = Styled<'web', E, React.DetailedHTMLProps<React.HTMLAttributes<E>, E>>
interface Props {
  color?: string;
  width?: string | number;
  height?: string | number;
  borderWidth?: string;
  borderRadius?: string;
};

interface DefaultProps extends Required<Props> { }
const defaultProps: DefaultProps = {
  color: '#000',
  width: '1.5rem',
  height: '1.5rem',
  borderWidth: '2px',
  borderRadius: '33%'
};
export const Unlock: React.FC<Props> = (props) => {
  const { color, width, height, borderWidth, borderRadius } = { ...defaultProps, ...props };
  return (
    <Border color={ color } borderWidth={ borderWidth } borderRadius={ borderRadius } width={ width } height={ height }>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861 861" color={color}>
        <text
          style={ {
            fontSize: 36,
            fontFamily: "Roboto",
            whiteSpace: "pre",
            backgroundColor: '#FFFFFF00',
            color: color,
          } }
          transform="translate(95.28 627.324)"
        />
        <path
          d="M1.059 294.998a.473.473 0 0 0-.472.471v.119c0 .064.053.118.118.118a.119.119 0 0 0 .117-.118v-.119c0-.132.104-.235.237-.235.132 0 .236.103.236.235v.473H.587a.235.235 0 0 0-.236.236v.589c0 .066.053.118.118.118h1.18a.117.117 0 0 0 .117-.118v-.589a.234.234 0 0 0-.235-.236v-.473a.474.474 0 0 0-.472-.471Zm0 0"
          transform="translate(4.237 -118765.422) scale(402.76831)"
          color={ color }
        />
      </svg>
    </Border>
  );
};
export default Unlock;
