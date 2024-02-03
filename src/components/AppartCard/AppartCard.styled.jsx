import styled from 'styled-components';

export const AppartThumb = styled.div`
  position: relative;
  overflow: hidden;
`;

export const AppartImage = styled.img`
  display: block;
  position: relative;
  width: 350px;
`;

export const DescribeThumb = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 100%;
  transform: translateY(0);
  padding-left: 20px;
  font-size: 16px;
  line-height: 1.56;
  letter-spacing: 0.03em;
  background-color: rgba(15,29,45,0.7);
  color:white;
`;
