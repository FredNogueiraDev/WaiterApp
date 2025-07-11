import styled from 'styled-components/native';

export const Item = styled.View`
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
`;

export const Actions = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  margin-right: 12px;
`;

export const QuantityContainer = styled.View`
  margin-left: 12px;
  min-width: 20px;
`;

export const ProductDetails = styled.View`
  gap: 4px;
`;

export const Summary = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const TotalContainer = styled.View`
  margin-right: 32px;
  flex: 1;
`;
